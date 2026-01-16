import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Store the contact form submission in a database
    // 2. Send an email notification to your support team
    // 3. Send an auto-reply to the user
    // 4. Integrate with CRM systems like Salesforce or HubSpot

    // Simulate storing the contact submission
    const submission = {
      id: Math.random().toString(36).substring(7),
      name: name.trim(),
      email: email.toLowerCase(),
      company: company?.trim() || null,
      subject,
      message: message.trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    console.log('Contact form submission:', submission)

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will get back to you within 24 hours.',
      submissionId: submission.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
