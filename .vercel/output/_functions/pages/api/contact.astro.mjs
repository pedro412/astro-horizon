export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.bluehorizonmexico.com", "SSR": true};
const getEnv = () => Object.assign(__vite_import_meta_env__, { _: process.env._ }) ?? process.env;
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return map[char] ?? char;
});
const sanitize = (value) => typeof value === "string" ? value.trim() : "";
const buildRedirectUrl = (referer) => {
  try {
    const url = new URL(referer ?? "/");
    url.searchParams.set("contact", "success");
    return url.toString();
  } catch {
    return "/?contact=success";
  }
};
const prerender = false;
const POST = async ({ request }) => {
  let formData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error("Unable to parse contact form payload", error);
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const company = sanitize(formData.get("company"));
  const message = sanitize(formData.get("message"));
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const env = getEnv();
  const resendApiKey = env.RESEND_API_KEY;
  const resendFromEmail = env.RESEND_FROM_EMAIL ?? "website@bluehorizonmexico.com";
  const contactRecipient = env.CONTACT_RECIPIENT ?? "gerencia@bluehorizonmexico.com";
  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: "Email service is not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  const html = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;
  let resendResponse;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: `Blue Horizon Website <${resendFromEmail}>`,
        to: [contactRecipient],
        reply_to: email,
        subject: `New contact from ${name}`,
        html
      })
    });
  } catch (error) {
    console.error("Resend API request failed", error);
    return new Response(JSON.stringify({ error: "Unable to send email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!resendResponse.ok) {
    return new Response(JSON.stringify({ error: "Unable to send email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
  if (wantsJson) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const redirectUrl = buildRedirectUrl(request.headers.get("referer"));
  return Response.redirect(redirectUrl, 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
