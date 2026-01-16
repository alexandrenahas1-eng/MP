import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Validate name
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
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

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Check if email already exists
    // 2. Hash the password
    // 3. Store the user in the database
    // 4. Send a verification email
    // 5. Generate a JWT or session token

    // Simulate user creation
    const user = {
      id: Math.random().toString(36).substring(7),
      name: name.trim(),
      email: email.toLowerCase(),
      role: 'user',
      plan: 'starter',
      createdAt: new Date().toISOString(),
    }

    // Simulate token generation
    const token = Buffer.from(JSON.stringify({ userId: user.id, exp: Date.now() + 86400000 })).toString('base64')

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user,
      token,
    }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
