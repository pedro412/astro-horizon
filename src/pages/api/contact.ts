import type { APIRoute } from 'astro';

const env = import.meta.env as {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_RECIPIENT?: string;
};

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
  const formData = await request.formData();

  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const company = sanitize(formData.get('company'));
  const message = sanitize(formData.get('message'));

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

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
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
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

  if (!resendResponse.ok) {
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
