import nodemailer from 'nodemailer';

// Create Gmail transporter only if credentials are provided
let transporter: nodemailer.Transporter | null = null;

if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Verify transporter configuration
  transporter.verify((error: any, success: any) => {
    if (error) {
      console.error('Email configuration error:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
} else {
  console.log('Email credentials not provided - email functionality disabled');
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}

export async function sendContactNotification(formData: ContactFormData): Promise<boolean> {
  if (!transporter) {
    console.log('Email not configured - contact notification not sent');
    return false;
  }
  
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748; border-bottom: 2px solid #4299e7; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #2d3748; margin-top: 0;">Project Details</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.details || 'No additional details provided.'}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ebf8ff; border-left: 4px solid #4299e7;">
            <p style="margin: 0; color: #2b6cb0;">
              <strong>Next Steps:</strong> Reply to this email to respond directly to the client, or contact them at ${formData.email}
            </p>
          </div>
          
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096;">
            <p>This message was sent from your CreativeStudio website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact form notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return false;
  }
}

export async function sendContactConfirmation(formData: ContactFormData): Promise<boolean> {
  if (!transporter) {
    console.log('Email not configured - contact confirmation not sent');
    return false;
  }
  
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting CreativeStudio - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <header style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4299e7;">
            <h1 style="color: #2d3748; margin: 0;">CreativeStudio</h1>
            <p style="color: #718096; margin: 5px 0 0 0;">Digital Agency</p>
          </header>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #2d3748;">Thank You, ${formData.firstName}!</h2>
            
            <p style="color: #4a5568; line-height: 1.6;">
              We've received your message and are excited about the possibility of working together on your project.
            </p>
            
            <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4a5568; line-height: 1.8;">
                <li>Our team will review your project requirements</li>
                <li>We'll prepare a customized proposal for your needs</li>
                <li>You can expect to hear from us within 24 hours</li>
                <li>We'll schedule a call to discuss your vision in detail</li>
              </ul>
            </div>
            
            <div style="background-color: #ebf8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #4299e7;">
              <h3 style="color: #2b6cb0; margin-top: 0;">Your Submission Summary</h3>
              <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
              <p><strong>Contact Email:</strong> ${formData.email}</p>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6; margin-top: 30px;">
              In the meantime, feel free to check out our portfolio and recent work on our website. 
              If you have any urgent questions, don't hesitate to reply to this email.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #4a5568;">Best regards,<br><strong>The CreativeStudio Team</strong></p>
            </div>
          </div>
          
          <footer style="background-color: #2d3748; color: #e2e8f0; text-align: center; padding: 20px;">
            <p style="margin: 0;">CreativeStudio Digital Agency</p>
            <p style="margin: 5px 0 0 0; color: #a0aec0;">hello@creativestudio.com | +1 (555) 123-4567</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact confirmation sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    return false;
  }
}

export async function sendNewsletterConfirmation(email: string): Promise<boolean> {
  if (!transporter) {
    console.log('Email not configured - newsletter confirmation not sent');
    return false;
  }
  
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to CreativeStudio Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <header style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4299e7;">
            <h1 style="color: #2d3748; margin: 0;">CreativeStudio</h1>
            <p style="color: #718096; margin: 5px 0 0 0;">Digital Agency Newsletter</p>
          </header>
          
          <div style="padding: 30px 20px; text-align: center;">
            <h2 style="color: #2d3748;">Welcome to Our Newsletter! 🎉</h2>
            
            <p style="color: #4a5568; line-height: 1.6; font-size: 18px;">
              Thank you for subscribing to the CreativeStudio newsletter.
            </p>
            
            <div style="background-color: #f7fafc; padding: 25px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">What to expect:</h3>
              <ul style="color: #4a5568; line-height: 1.8; text-align: left; display: inline-block;">
                <li>Latest design trends and insights</li>
                <li>Behind-the-scenes project showcases</li>
                <li>Exclusive tips from our creative team</li>
                <li>Special offers and early access to new services</li>
              </ul>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6;">
              We'll send you valuable content monthly, and you can unsubscribe at any time.
            </p>
          </div>
          
          <footer style="background-color: #2d3748; color: #e2e8f0; text-align: center; padding: 20px;">
            <p style="margin: 0;">CreativeStudio Digital Agency</p>
            <p style="margin: 5px 0 0 0; color: #a0aec0;">hello@creativestudio.com</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Newsletter confirmation sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    return false;
  }
}