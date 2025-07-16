# Email Setup Guide

## Overview

This project now includes fully functional email capabilities for both the contact form and callback request form. The email system is implemented using Netlify Functions and Nodemailer.

## Features

- ✅ Contact form with validation
- ✅ Callback request form with validation
- ✅ Automatic email sending to business owner
- ✅ Confirmation emails sent to customers
- ✅ Proper error handling and user feedback
- ✅ Loading states and success messages
- ✅ Form validation with error highlighting

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root and add the following variables:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@aaronssolar.com
CONTACT_EMAIL=a.a.ronshomeimprovement321@gmail.com
```

### 2. Gmail Setup (Recommended)

1. Enable 2-factor authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail"
4. Use this app password as your `SMTP_PASS` value

### 3. Netlify Production Setup

In your Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add all the environment variables from above
3. Deploy your site

## Email Templates

### Contact Form Email
- **To Business**: Professional notification with all form details
- **To Customer**: Confirmation email with submission details

### Callback Request Email
- **To Business**: Callback request with preferred time
- **To Customer**: Confirmation that callback was requested

## File Structure

```
netlify/
  functions/
    send-email.js          # Serverless function for email handling

src/
  hooks/
    useFormSubmission.ts   # Custom hook for form handling
  components/
    ContactForm.tsx        # Updated contact form component
    CallbackForm.tsx       # Updated callback form component
    ui/
      FormFeedback.tsx     # Success/error feedback component
```

## Usage

### Contact Form
```tsx
import ContactForm from '@/components/ContactForm';

// Use in your page
<ContactForm />
```

### Callback Form
```tsx
import { CallbackForm } from '@/components/CallbackForm';

// Use with callback handling
<CallbackForm
  onCancel={() => setShowCallbackForm(false)}
  onSubmit={(data) => console.log('Callback requested:', data)}
/>
```

## Form Validation

Both forms include comprehensive validation:

- **Name**: Required field
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number format
- **Message**: Required (contact form only)
- **Address**: Optional (contact form only)

## Error Handling

The system includes robust error handling:
- Network errors
- Server errors
- Validation errors
- SMTP configuration errors

## Testing

1. **Local Development**: Use `.env.local` with test email credentials
2. **Production**: Use production email credentials in Netlify environment variables

## Troubleshooting

### Common Issues

1. **"Authentication failed"**: Check your Gmail app password
2. **"Network error"**: Verify Netlify functions are deployed
3. **"Form not submitting"**: Check browser console for JavaScript errors

### Debug Steps

1. Check Netlify function logs in dashboard
2. Verify environment variables are set correctly
3. Test with different email providers if needed

## Alternative Email Services

While this setup uses Gmail, you can easily switch to other providers:

**SendGrid**:
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**Mailgun**:
```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

## Security Notes

- Never commit environment variables to version control
- Use app passwords instead of regular passwords
- Consider using dedicated email services for production
- Monitor email sending limits and quotas

## Support

If you encounter issues:
1. Check this documentation
2. Review Netlify function logs
3. Verify email service configuration
4. Test with minimal email settings first