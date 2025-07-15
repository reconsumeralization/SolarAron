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
    const { 
      name, 
      email, 
      phone, 
      address, 
      message, 
      preferredTime, 
      formType,
      packageName,
      packagePrice,
      propertyType,
      serviceTypes,
      urgency,
      budget
    } = JSON.parse(event.body);

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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Callback Request</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          </div>
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please contact this customer at their preferred time.</p>
          </div>
        </div>
      `;
    } else if (formType === 'package') {
      subject = 'New Package Selection - A-Aaron\'s Solar';
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">New Package Selection</h2>
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address || 'Not provided'}</p>
            <p><strong>Package:</strong> ${packageName || 'Not specified'}</p>
            <p><strong>Package Price:</strong> $${packagePrice || 0}/year</p>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Additional Details:</h3>
            <pre style="white-space: pre-wrap; font-family: inherit;">${message || 'No additional details provided'}</pre>
          </div>
          <div style="background-color: #dcfce7; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a; margin-top: 20px;">
            <p style="margin: 0;"><strong>Next Steps:</strong> Contact customer within 24 hours to schedule first service.</p>
          </div>
        </div>
      `;
    } else if (formType === 'quote') {
      subject = 'New Quote Request - A-Aaron\'s Solar';
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Quote Request</h2>
          <div style="background-color: #faf5ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Property:</strong> ${address || 'Not provided'}</p>
            <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
            <p><strong>Services:</strong> ${serviceTypes || 'Not specified'}</p>
            <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Customer Requirements:</h3>
            <pre style="white-space: pre-wrap; font-family: inherit;">${message || 'No requirements specified'}</pre>
          </div>
          <div style="background-color: #e0e7ff; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed; margin-top: 20px;">
            <p style="margin: 0;"><strong>Action Required:</strong> Prepare custom quote within 24-48 hours.</p>
          </div>
        </div>
      `;
    } else {
      subject = 'New Contact Form Submission - A-Aaron\'s Solar';
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address || 'Not provided'}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 20px;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please respond to this inquiry promptly.</p>
          </div>
        </div>
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
    let confirmationSubject, confirmationHtml;
    
    if (formType === 'callback') {
      confirmationSubject = 'Callback Request Confirmed - A-Aaron\'s Solar';
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Callback Request Confirmed</h1>
          </div>
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${name},</p>
            <p style="color: #4b5563;">Thank you for requesting a callback from A-Aaron's Solar! We've received your request and will call you back at your preferred time.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Request Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            </div>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;"><strong>What's Next:</strong> We typically return calls within 2-4 hours during business hours (8 AM - 6 PM EST).</p>
            </div>
            
            <p style="color: #4b5563;">We look forward to discussing your solar maintenance needs!</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 5px 0;">Best regards,</p>
              <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">Aaron</p>
              <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">A-Aaron's Solar</p>
              <p style="color: #6b7280; margin: 5px 0;">Phone: 1-321-720-1500</p>
              <p style="color: #6b7280; margin: 5px 0;">Email: a.a.ronshomeimprovement321@gmail.com</p>
            </div>
          </div>
        </div>
      `;
    } else if (formType === 'package') {
      confirmationSubject = 'Package Selection Confirmed - A-Aaron\'s Solar';
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #16a34a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Package Selection Confirmed</h1>
          </div>
          <div style="background-color: #f0fdf4; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${name},</p>
            <p style="color: #4b5563;">Thank you for selecting our ${packageName || 'maintenance package'}! We're excited to help you maintain your solar system and maximize your investment.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <h3 style="color: #16a34a; margin-top: 0;">Your Package Details:</h3>
              <p><strong>Customer:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Address:</strong> ${address || 'Not provided'}</p>
              <p><strong>Selected Package:</strong> ${packageName || 'Not specified'}</p>
              <p><strong>Annual Cost:</strong> $${packagePrice || 0}</p>
            </div>
            
            <div style="background-color: #dcfce7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #15803d;"><strong>What's Next:</strong> We'll contact you within 24 hours to schedule your first service appointment and complete the setup process.</p>
            </div>
            
            <p style="color: #4b5563;">We look forward to providing you with exceptional solar maintenance service!</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 5px 0;">Best regards,</p>
              <p style="color: #16a34a; font-weight: bold; margin: 5px 0;">Aaron</p>
              <p style="color: #16a34a; font-weight: bold; margin: 5px 0;">A-Aaron's Solar</p>
              <p style="color: #6b7280; margin: 5px 0;">Phone: 1-321-720-1500</p>
              <p style="color: #6b7280; margin: 5px 0;">Email: a.a.ronshomeimprovement321@gmail.com</p>
            </div>
          </div>
        </div>
      `;
    } else if (formType === 'quote') {
      confirmationSubject = 'Quote Request Received - A-Aaron\'s Solar';
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #7c3aed; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Quote Request Received</h1>
          </div>
          <div style="background-color: #faf5ff; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${name},</p>
            <p style="color: #4b5563;">Thank you for requesting a custom quote from A-Aaron's Solar! We've received your detailed requirements and our team is preparing your personalized quote.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7c3aed;">
              <h3 style="color: #7c3aed; margin-top: 0;">Your Request Summary:</h3>
              <p><strong>Customer:</strong> ${name}</p>
              <p><strong>Property:</strong> ${address || 'Not provided'}</p>
              <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
              <p><strong>Services Requested:</strong> ${serviceTypes || 'Not specified'}</p>
              <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #e0e7ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #5b21b6;"><strong>Timeline:</strong> We typically prepare custom quotes within 24-48 hours. You'll receive a detailed proposal via email.</p>
            </div>
            
            <p style="color: #4b5563;">We appreciate your interest in our services and look forward to providing you with a comprehensive quote!</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 5px 0;">Best regards,</p>
              <p style="color: #7c3aed; font-weight: bold; margin: 5px 0;">Aaron</p>
              <p style="color: #7c3aed; font-weight: bold; margin: 5px 0;">A-Aaron's Solar</p>
              <p style="color: #6b7280; margin: 5px 0;">Phone: 1-321-720-1500</p>
              <p style="color: #6b7280; margin: 5px 0;">Email: a.a.ronshomeimprovement321@gmail.com</p>
            </div>
          </div>
        </div>
      `;
    } else {
      confirmationSubject = 'Thank you for contacting A-Aaron\'s Solar';
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Your Inquiry</h1>
          </div>
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${name},</p>
            <p style="color: #4b5563;">Thank you for reaching out to A-Aaron's Solar! We've received your message and will get back to you shortly.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Submission Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Address:</strong> ${address || 'Not provided'}</p>
              <div style="margin-top: 15px;">
                <p><strong>Message:</strong></p>
                <p style="background-color: #f8fafc; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${message || 'No message provided'}</p>
              </div>
            </div>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;"><strong>Response Time:</strong> We typically respond to messages within 24 hours.</p>
            </div>
            
            <p style="color: #4b5563;">We look forward to helping you with your solar maintenance needs!</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 5px 0;">Best regards,</p>
              <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">Aaron</p>
              <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">A-Aaron's Solar</p>
              <p style="color: #6b7280; margin: 5px 0;">Phone: 1-321-720-1500</p>
              <p style="color: #6b7280; margin: 5px 0;">Email: a.a.ronshomeimprovement321@gmail.com</p>
            </div>
          </div>
        </div>
      `;
    }

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