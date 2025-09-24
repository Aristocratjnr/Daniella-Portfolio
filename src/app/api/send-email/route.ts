import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { from_email, from_name, contact, message } = await request.json();
    const to_email = process.env.EMAIL_TO || from_email;

    // Validate the request data
    if (!from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"${from_name || 'Contact Form'}" <${process.env.EMAIL_FROM}>`,
      to: to_email,
      replyTo: from_email,
      subject: `New message from ${from_name || 'Contact Form'}`,
      text: `
        You've received a new message from your website contact form.
        
        Name: ${from_name || 'Not provided'}
        Email: ${from_email}
        Contact: ${contact || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${from_name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${from_email}</p>
          ${contact ? `<p><strong>Contact:</strong> ${contact}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        emailDetails: {
          to: to_email,
          from: from_email,
          name: from_name,
          contact: contact || 'Not provided',
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
