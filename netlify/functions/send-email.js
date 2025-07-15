const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, address, message, preferredTime, formType } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name, email, and phone are required' }),
      };
    }

    // Configure email transport
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content based on form type
    let subject, htmlContent;
    
    if (formType === 'callback') {
      subject = 'New Callback Request - A-Aaron\'s Solar';
      htmlContent = `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <hr>
        <p>Please contact this customer at their preferred time.</p>
      `;
    } else {
      subject = 'New Contact Form Submission - A-Aaron\'s Solar';
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Please respond to this inquiry promptly.</p>
      `;
    }

    // Send email to business
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@aaronssolar.com',
      to: process.env.CONTACT_EMAIL || 'a.a.ronshomeimprovement321@gmail.com',
      subject: subject,
      html: htmlContent,
    });

    // Send confirmation email to customer
    const confirmationSubject = 'Thank you for contacting A-Aaron\'s Solar';
    const confirmationHtml = `
      <h2>Thank you for your inquiry!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to A-Aaron's Solar. We've received your ${formType === 'callback' ? 'callback request' : 'message'} and will get back to you shortly.</p>
      
      <h3>Your submission details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${formType === 'callback' ? 
        `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : 
        `<p><strong>Address:</strong> ${address || 'Not provided'}</p>
         <p><strong>Message:</strong> ${message}</p>`
      }
      
      <p>We look forward to helping you with your solar maintenance needs!</p>
      
      <p>Best regards,<br>
      Aaron<br>
      A-Aaron's Solar<br>
      Phone: 1-321-720-1500<br>
      Email: a.a.ronshomeimprovement321@gmail.com</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@aaronssolar.com',
      to: email,
      subject: confirmationSubject,
      html: confirmationHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        success: true 
      }),
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Failed to send email',
        error: error.message 
      }),
    };
  }
};