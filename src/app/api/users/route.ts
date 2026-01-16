import { NextRequest, NextResponse } from 'next/server'

// Mock user data
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', plan: 'enterprise', createdAt: '2024-01-15' },
  { id: '2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'user', plan: 'professional', createdAt: '2024-02-20' },
  { id: '3', name: 'Marcus Johnson', email: 'marcus@example.com', role: 'user', plan: 'professional', createdAt: '2024-03-10' },
  { id: '4', name: 'Emily Rodriguez', email: 'emily@example.com', role: 'user', plan: 'starter', createdAt: '2024-04-05' },
]

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would:
    // 1. Verify the authentication token
    // 2. Check user permissions
    // 3. Query the database with pagination and filters

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    // Filter users by search term
    let filteredUsers = users
    if (search) {
      const searchLower = search.toLowerCase()
      filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
      )
    }

    // Paginate results
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      data: paginatedUsers,
      pagination: {
        page,
        limit,
        total: filteredUsers.length,
        totalPages: Math.ceil(filteredUsers.length / limit),
      },
    })
  } catch (error) {
    console.error('Users fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
