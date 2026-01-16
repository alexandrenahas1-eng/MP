import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
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

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Query your database for the user
    // 2. Verify the password hash
    // 3. Generate a JWT or session token
    // 4. Return the token to the client

    // Simulate successful login
    const user = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'admin',
      createdAt: new Date().toISOString(),
    }

    // Simulate token generation
    const token = Buffer.from(JSON.stringify({ userId: user.id, exp: Date.now() + 86400000 })).toString('base64')

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user,
      token,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
