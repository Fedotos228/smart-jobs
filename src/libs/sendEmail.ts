'use server'

import nodemailer from 'nodemailer'

export type FormState = {
  success: boolean
  message: string
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
})

function buildConfirmationEmail(name: string, organization: string, phone: string, email: string, message: string) {
  const siteUrl = process.env.SITE_URL ?? 'https://smartjobs.md'
  const logoUrl = `${siteUrl}/logo-white.png`

  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 0;font-size:13px;color:#888888;width:120px;vertical-align:top;">${label}</td>
          <td style="padding:8px 0;font-size:14px;color:#1D1E1D;vertical-align:top;">${value}</td>
         </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Thank you for contacting SmartJobs</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F8FB;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#F4F8FB;padding:48px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;
                      overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08);">

          <!-- ── Header ── -->
          <tr>
            <td style="background-color:#F26822;padding:36px 40px;text-align:center;">
              <img src="${logoUrl}" alt="SmartJobs" width="80"
                   style="display:block;margin:0 auto;height:auto;" />
            </td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="padding:44px 48px 36px;">

              <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#1D1E1D;line-height:1.3;">
                Thank you, ${name}!
              </h1>
              <p style="margin:0 0 28px;font-size:15px;color:#555555;line-height:1.75;">
                We've received your message and our team will get back to you as soon
                as possible — usually within <strong style="color:#1D1E1D;">1 business day</strong>.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #E3E3E3;margin:0 0 28px;" />

              <!-- Summary label -->
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.1em;
                         text-transform:uppercase;color:#F26822;">
                Your message summary
              </p>

              <!-- Summary card -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                     style="background:#F4F8FB;border-radius:14px;padding:20px 24px;">
                <tr><td>
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    ${row('Name', name)}
                    ${row('Organization', organization)}
                    ${row('Phone', phone)}
                    ${row('Email', email)}
                    ${row('Message', message)}
                  </table>
                </td></tr>
              </table>

              <!-- CTA -->
              <div style="margin:36px 0;text-align:center;">
                <a href="${siteUrl}"
                   style="display:inline-block;background-color:#F26822;color:#ffffff;
                          text-decoration:none;padding:14px 40px;border-radius:12px;
                          font-size:15px;font-weight:600;letter-spacing:0.02em;">
                  Visit our website
                </a>
              </div>

              <p style="margin:0;font-size:13px;color:#999999;line-height:1.7;">
                Have an urgent question? Reach us directly at
                <a href="mailto:office@smartjobs.md"
                   style="color:#F26822;text-decoration:none;font-weight:600;">
                  office@smartjobs.md
                </a>
              </p>

            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background-color:#1D1E1D;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:#aaaaaa;">
                © ${new Date().getFullYear()} SmartJobs. All rights reserved.
              </p>
              <p style="margin:0;font-size:12px;color:#666666;">
                You received this email because you submitted a contact form on our website.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name         = String(formData.get('name') ?? '').trim()
  const organization = String(formData.get('organization') ?? '').trim()
  const phone        = String(formData.get('phone') ?? '').trim()
  const email        = String(formData.get('email') ?? '').trim()
  const message      = String(formData.get('message') ?? '').trim()

  if (!name || !email) {
    return { success: false, message: 'Name and email are required.' }
  }

  try {
    await Promise.all([
      // Internal notification to the SmartJobs team
      transporter.sendMail({
        from: `"SmartJobs Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New contact from ${name}${organization ? ` — ${organization}` : ''}`,
        html: `
          <h2 style="font-family:Arial,sans-serif;">New contact form submission</h2>
          <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;">
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Organization</b></td><td>${organization || '—'}</td></tr>
            <tr><td><b>Phone</b></td><td>${phone || '—'}</td></tr>
            <tr><td><b>Email</b></td><td>${email}</td></tr>
            <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
          </table>
        `,
      }),

      // Confirmation email to the user
      transporter.sendMail({
        from: `"SmartJobs" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We received your message, ${name} 👋`,
        html: buildConfirmationEmail(name, organization, phone, email, message),
      }),
    ])

    return { success: true, message: 'Message sent successfully!' }
  } catch (err) {
    console.error('[sendContactEmail]', err)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}
