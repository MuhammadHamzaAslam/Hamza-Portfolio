import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
    <!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: 'Open Sans', sans-serif; color: #37474f;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Muhammad Ahmed</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; padding: 20px; background-color: #f0f4f8; color: #37474f; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .container { max-width: 650px; margin: 30px auto; background-color: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #000218 0%, #E4ECFF 100%); color: #fff; padding: 40px; text-align: center; position: relative; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px; }
        .header:before { content: ''; position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 20px solid #fff; }
        .content { padding: 30px; }
        .greeting { font-size: 20px; margin-bottom: 25px; color: #2e7d32; font-weight: 600; }
        .highlight { color: #1b5e20; font-weight: bold; }
        .overview-title { font-size: 18px; color: #000; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; }
        .skills-list { list-style: none; padding: 0; margin-bottom: 25px; }
        .skills-list li { margin: 12px 0; padding-left: 25px; position: relative; color: #E4ECFF; }
        .skills-list li:before { content: '✨'; position: absolute; left: 0; top: 2px; font-size: 16px; }
        .project-section { margin-top: 40px; border-top: 1px dashed #ccc; padding-top: 30px; }
        .project-item { margin-bottom: 25px; }
        .project-title { font-size: 16px; font-weight: 600; color: #263238; margin-bottom: 8px; }
        .project-link { color: #E4ECFF; text-decoration: none; font-weight: 500; }
        .connect-section { margin-top: 40px; border-top: 1px dashed #ccc; padding-top: 30px; text-align: center; }
        .connect-title { font-size: 18px; color: #000; margin-bottom: 20px; }
        .social-links { list-style: none; padding: 0; margin-bottom: 25px; display: flex; justify-content: center; gap: 25px; }
        .social-links a { color: #000; text-decoration: none; font-size: 20px; transition: color 0.3s ease; }
        .social-links a:hover { color: #1b5e20; }
        .contact-info { margin-bottom: 25px; }
        .contact-info a { color: #E4ECFF; text-decoration: none; font-weight: 500; }
        footer { background-color: #000318; color: #E4ECFF; text-align: center; padding: 25px; font-size: 14px; border-top: 1px solid #c8e6c9; border-radius: 0 0 12px 12px; }
        .signature { margin-top: 30px; font-style: italic; color: #388e3c; }
        .portfolio-link { color: #1b5e20; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Your Inquiry!</h1>
            </div>
        <div class="content">
            <p class="greeting">Hello <strong class="highlight">${name}</strong>,</p>
            <p>Thank you for reaching out! I appreciate you taking the time to connect. I've received your message and will get back to you promptly.</p>

            <p class="overview-title">How I Can Help You Achieve Your Goals:</p>
            <ul class="skills-list">
                <li>✨ Crafting <strong class="highlight">Responsive and Dynamic Websites</strong> that engage users.</li>
                <li>✨ Developing seamless <strong class="highlight">Mobile Applications</strong> using React Native for broad reach.</li>
                <li>✨ Building captivating <strong class="highlight">Frontend Experiences</strong> with React, HTML, CSS, Tailwind, and Bootstrap.</li>
                <li>✨ Architecting robust <strong class="highlight">Backend Solutions</strong> with Node.js, Express, MongoDB, and Firebase.</li>
                <li>✨ Providing expert <strong class="highlight">Full Stack Consultation and Development</strong> to bring your vision to life.</li>
            </ul>

            <div class="project-section">
                <p class="overview-title">Explore Some of My Recent Work:</p>
                <div class="project-item">
                    <p class="project-title">Realtime Chat Application</p>
                    <a href="https://github.com/MuhammadAhmadAslam/Chat-App" class="project-link" target="_blank">View on GitHub <img src="https://img.icons8.com/material-outlined/16/000000/github.png" alt="GitHub"></a>
                </div>
                <div class="project-item">
                    <p class="project-title">All Website Projects Collection</p>
                    <a href="https://github.com/MuhammadAhmadAslam/All-Websites-Project" class="project-link" target="_blank">View on GitHub <img src="https://img.icons8.com/material-outlined/16/000000/github.png" alt="GitHub"></a>
                </div>
                <div class="project-item">
                    <p class="project-title">Saylani Management System (LMS & CRM)</p>
                    <a href="https://saylani-management-system.vercel.app/" class="project-link" target="_blank">Explore Live Demo <img src="https://img.icons8.com/material-outlined/16/000000/link.png" alt="Live Demo"></a>
                </div>
                <div class="project-item">
                    <p class="project-title">Stock POS Web Application</p>
                    <a href="https://stock-pos-web.vercel.app/admin/dashboard" class="project-link" target="_blank">Explore Live Demo <img src="https://img.icons8.com/material-outlined/16/000000/link.png" alt="Live Demo"></a>
                </div>
            </div>

            <div class="connect-section">
                <p class="connect-title">Let's Connect and Collaborate:</p>
                <ul class="social-links">
                    <li><a href="https://www.facebook.com/ahmedaslamofficial" target="_blank"><img src="https://img.icons8.com/fluent/30/2962ff/facebook-new.png" alt="Facebook"></a></li>
                    <li><a href="https://www.instagram.com/m_ahmed_Dev" target="_blank"><img src="https://img.icons8.com/fluent/30/e1306c/instagram-new.png" alt="Instagram"></a></li>
                    <li><a href="https://github.com/MuhammadAhmadAslam" target="_blank"><img src="https://img.icons8.com/fluent/30/24292e/github.png" alt="GitHub"></a></li>
                    <li><a href="https://www.linkedin.com/in/muhammad-ahmed-b7b8452b6/" target="_blank"><img src="https://img.icons8.com/fluent/30/0077b5/linkedin.png" alt="LinkedIn"></a></li>
                </ul>
                <div class="contact-info">
                    📧 Email: <a href="mailto:${process.env.EMAIL_USER}" class="portfolio-link">${process.env.EMAIL_USER}</a><br/>
                    🌐 Portfolio: <a href="https://your-portfolio.com" class="portfolio-link" target="_blank">your-portfolio.com</a>
                </div>
            </div>

            <p class="signature">Looking forward to the possibility of working together!</p>
            <p style="margin-top: 25px;">Best regards,<br/><strong class="highlight" style="font-size: 18px;">Muhammad Ahmed</strong><br/>Full Stack Developer</p>
        </div>
        <footer>
            © 2025 Muhammad Ahmed. All rights reserved.
        </footer>
    </div>
</body>
</html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      info,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
