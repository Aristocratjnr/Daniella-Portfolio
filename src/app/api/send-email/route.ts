import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const { to_email, from_email, from_name, contact, message } = await request.json();

    // Validate the request data
    if (!to_email || !from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }


    console.log('Email would be sent to:', to_email);
    console.log('From:', `${from_name} <${from_email}>`);
    console.log('Contact:', contact || 'Not provided');
    console.log('Message:', message);

    // Return success response
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        // Include the email details in the response for testing
        emailDetails: {
          to: to_email,
          from: from_email,
          name: from_name,
          contact: contact || 'Not provided',
          message: message
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
