import type { APIRoute } from 'astro';

type Env = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_RECIPIENT?: string;
};

const getEnv = () => (import.meta.env ?? process.env) as Env;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[char] ?? char;
  });

const sanitize = (value: FormDataEntryValue | null) => (typeof value === 'string' ? value.trim() : '');

const buildRedirectUrl = (referer: string | null) => {
  try {
    const url = new URL(referer ?? '/');
    url.searchParams.set('contact', 'success');
    return url.toString();
  } catch {
    return '/?contact=success';
  }
};

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error('Unable to parse contact form payload', error);
    return new Response(JSON.stringify({ error: 'Invalid form data' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const company = sanitize(formData.get('company'));
  const phone = sanitize(formData.get('phone'));
  const location = sanitize(formData.get('location'));
  const message = sanitize(formData.get('message'));

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const env = getEnv();
  const resendApiKey = env.RESEND_API_KEY;
  const resendFromEmail = env.RESEND_FROM_EMAIL ?? 'website@bluehorizonmexico.com';
  const contactRecipient = env.CONTACT_RECIPIENT ?? 'gerencia@bluehorizonmexico.com';

  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: 'Email service is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const html = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || 'N/A')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
    <p><strong>Location / Project:</strong> ${escapeHtml(location || 'N/A')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  let resendResponse: Response;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Blue Horizon Website <${resendFromEmail}>`,
        to: [contactRecipient],
        reply_to: email,
        subject: `New contact from ${name}`,
        html,
      }),
    });
  } catch (error) {
    console.error('Resend API request failed', error);
    return new Response(JSON.stringify({ error: 'Unable to send email' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!resendResponse.ok) {
    let errorBody = '';
    try {
      errorBody = await resendResponse.text();
    } catch (error) {
      console.error('Resend error response read failed', error);
    }
    console.error('Resend API responded with an error', {
      status: resendResponse.status,
      statusText: resendResponse.statusText,
      body: errorBody?.slice(0, 500),
    });
    return new Response(JSON.stringify({ error: 'Unable to send email' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const redirectUrl = buildRedirectUrl(request.headers.get('referer'));
  return Response.redirect(redirectUrl, 303);
};
