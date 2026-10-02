import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

type SubmissionData = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  createdAt: string
}

function wrap(body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { 
    background: linear-gradient(135deg, #f5f4f0 0%, #e8e6e0 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a18;
    padding: 40px 20px;
    line-height: 1.6;
  }
  .container { 
    max-width: 600px; 
    margin: 0 auto; 
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  }
  .header {
    background: linear-gradient(135deg, #1a1a18 0%, #2d2d2a 100%);
    padding: 40px 32px;
    text-align: center;
    border-bottom: 4px solid #3a6b4a;
  }
  .logo {
    display: inline-block;
    background: #ffffff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(58, 107, 74, 0.2);
  }
  .logo-text {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #1a1a18;
  }
  .logo-core { color: #3a6b4a; }
  .tagline {
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.7);
  }
  .content { padding: 48px 32px; }
  .card {
    background: #f9f8f6;
    border: 1px solid #e8e6e0;
    border-radius: 8px;
    padding: 24px;
    margin: 24px 0;
  }
  .card-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #3a6b4a;
  }
  .info-row {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #e8e6e0;
  }
  .info-row:last-child { border-bottom: none; }
  .info-label {
    width: 120px;
    flex-shrink: 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #888;
  }
  .info-value {
    flex: 1;
    font-size: 14px;
    color: #1a1a18;
  }
  .badge {
    display: inline-block;
    background: #3a6b4a;
    color: #ffffff;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .message-box {
    background: #ffffff;
    border: 2px solid #e8e6e0;
    border-radius: 8px;
    padding: 20px;
    font-size: 14px;
    line-height: 1.8;
    color: #1a1a18;
    margin-top: 12px;
  }
  .btn {
    display: inline-block;
    background: #3a6b4a;
    color: #ffffff !important;
    padding: 16px 32px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(58, 107, 74, 0.3);
    transition: all 0.3s ease;
  }
  .btn:hover {
    background: #2d5439;
    box-shadow: 0 6px 16px rgba(58, 107, 74, 0.4);
  }
  .highlight {
    background: #fef7ed;
    border-left: 4px solid #f4a261;
    padding: 16px;
    border-radius: 4px;
    font-size: 13px;
    color: #666;
    margin: 24px 0;
  }
  .footer {
    text-align: center;
    padding: 32px;
    background: #f5f4f0;
    border-top: 1px solid #e8e6e0;
    font-size: 12px;
    color: #999;
  }
  .footer-links {
    margin-top: 12px;
  }
  .footer-link {
    color: #3a6b4a;
    text-decoration: none;
    margin: 0 8px;
  }
  p { margin: 0 0 16px 0; }
  strong { color: #1a1a18; font-weight: 600; }
  @media only screen and (max-width: 600px) {
    body { padding: 20px 10px; }
    .content { padding: 32px 20px; }
    .header { padding: 32px 20px; }
    .info-row { flex-direction: column; gap: 4px; }
    .info-label { width: 100%; }
  }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <div class="logo">
      <span class="logo-text">SOLVIX <span class="logo-core">CORE</span></span>
    </div>
    <div class="tagline">Digital Engineering Studio</div>
  </div>
  ${body}
  <div class="footer">
    <p style="margin-bottom: 8px; color: #666;">
      <strong style="color: #1a1a18;">Solvix Core</strong> — Digital systems that move business
    </p>
    <div class="footer-links">
      <a href="mailto:info@solvixcore.uk" class="footer-link">info@solvixcore.uk</a>
      <span style="color: #ddd;">•</span>
      <a href="https://solvixcore.uk" class="footer-link">solvixcore.uk</a>
    </div>
    <p style="margin-top: 16px; font-size: 11px; color: #aaa;">
      © ${new Date().getFullYear()} Solvix Core. All rights reserved.
    </p>
  </div>
</div>
</body>
</html>`
}

export async function sendAdminAlert(s: SubmissionData) {
  const html = wrap(`
    <div class="content">
      <h2 style="font-size: 24px; font-weight: 700; color: #1a1a18; margin-bottom: 8px;">
        🎯 New Enquiry Received
      </h2>
      <p style="font-size: 14px; color: #666; margin-bottom: 24px;">
        ${new Date(s.createdAt).toLocaleString('en-GB', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>

      <div class="card">
        <div class="card-title">Contact Information</div>
        <div class="info-row">
          <div class="info-label">Name</div>
          <div class="info-value"><strong>${s.name}</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Email</div>
          <div class="info-value"><a href="mailto:${s.email}" style="color: #3a6b4a; text-decoration: none;">${s.email}</a></div>
        </div>
        ${s.company ? `
        <div class="info-row">
          <div class="info-label">Company</div>
          <div class="info-value">${s.company}</div>
        </div>
        ` : ''}
      </div>

      <div class="card">
        <div class="card-title">Project Details</div>
        <div class="info-row">
          <div class="info-label">Project Type</div>
          <div class="info-value"><span class="badge">${s.projectType || 'Not specified'}</span></div>
        </div>
        <div class="info-row">
          <div class="info-label">Budget</div>
          <div class="info-value"><strong>${s.budget || 'Not specified'}</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Message</div>
          <div class="info-value">
            <div class="message-box">${s.message.replace(/\n/g, '<br/>')}</div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin: 32px 0;">
        <a href="https://solvixcore.uk/admin/dashboard" class="btn">
          View Full Details in Dashboard →
        </a>
      </div>

      <div class="highlight">
        💡 <strong>Next Steps:</strong> Review the enquiry in your dashboard, then reply directly via email to start the conversation.
      </div>
    </div>
  `)

  await transporter.sendMail({
    from: `"Solvix Core" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `[New Enquiry] ${s.name} — ${s.projectType || 'Website Project'}`,
    html,
  })
}

export async function sendUserConfirmation(s: SubmissionData) {
  const html = wrap(`
    <div class="content">
      <h2 style="font-size: 24px; font-weight: 700; color: #1a1a18; margin-bottom: 8px;">
        ✅ We Got Your Message
      </h2>
      <p style="font-size: 16px; color: #666; margin-bottom: 32px;">
        Thanks for reaching out, <strong>${s.name}</strong>
      </p>

      <p style="font-size: 15px; line-height: 1.8; color: #444;">
        We have received your enquiry and appreciate you taking the time to get in touch. 
        Our team will review your message and get back to you within <strong>24 hours</strong> 
        with honest thoughts on how we can help.
      </p>

      <div class="card">
        <div class="card-title">Your Enquiry Summary</div>
        <div class="info-row">
          <div class="info-label">Project Type</div>
          <div class="info-value"><span class="badge">${s.projectType || 'Website Project'}</span></div>
        </div>
        <div class="info-row">
          <div class="info-label">Budget Range</div>
          <div class="info-value">${s.budget || 'Not specified'}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Your Message</div>
          <div class="info-value">
            <div class="message-box">${s.message.replace(/\n/g, '<br/>')}</div>
          </div>
        </div>
      </div>

      <div class="highlight">
        📧 <strong>In the meantime:</strong> Feel free to reply directly to this email if you have any additional details to share. 
        We read every message personally.
      </div>

      <p style="font-size: 14px; color: #666; margin-top: 32px;">
        Looking forward to speaking with you soon.
      </p>
      <p style="font-size: 14px; color: #1a1a18; font-weight: 600;">
        — The Solvix Core Team
      </p>
    </div>
  `)

  await transporter.sendMail({
    from: `"Solvix Core" <${process.env.SMTP_USER}>`,
    to: s.email,
    replyTo: process.env.ADMIN_EMAIL,
    subject: `We got your message — Solvix Core`,
    html,
  })
}
