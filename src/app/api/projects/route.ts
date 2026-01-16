import { NextRequest, NextResponse } from 'next/server'

// Mock project data
const projects = [
  { id: '1', name: 'Marketing Campaign', status: 'active', progress: 75, members: 4, createdAt: '2024-01-15' },
  { id: '2', name: 'Product Launch', status: 'review', progress: 90, members: 6, createdAt: '2024-02-01' },
  { id: '3', name: 'Website Redesign', status: 'active', progress: 45, members: 3, createdAt: '2024-02-15' },
  { id: '4', name: 'Mobile App', status: 'planning', progress: 20, members: 5, createdAt: '2024-03-01' },
  { id: '5', name: 'API Integration', status: 'active', progress: 60, members: 2, createdAt: '2024-03-10' },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    let filteredProjects = projects

    // Filter by status
    if (status && status !== 'all') {
      filteredProjects = filteredProjects.filter((p) => p.status === status)
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase()
      filteredProjects = filteredProjects.filter((p) =>
        p.name.toLowerCase().includes(searchLower)
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length,
    })
  } catch (error) {
    console.error('Projects fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Project name is required' },
        { status: 400 }
      )
    }

    // Create new project
    const newProject = {
      id: Math.random().toString(36).substring(7),
      name: name.trim(),
      description: description?.trim() || null,
      status: 'planning',
      progress: 0,
      members: 1,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
      data: newProject,
    }, { status: 201 })
  } catch (error) {
    console.error('Project creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
