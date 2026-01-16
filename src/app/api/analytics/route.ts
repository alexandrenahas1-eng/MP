import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would:
    // 1. Verify the authentication token
    // 2. Query your analytics database or service
    // 3. Aggregate data based on the requested time range

    const { searchParams } = new URL(request.url)
    const range = searchParams.get('range') || '7d'

    // Generate mock analytics data based on the range
    const getRangeMultiplier = (r: string) => {
      switch (r) {
        case '24h': return 0.1
        case '7d': return 1
        case '30d': return 4
        case '90d': return 12
        default: return 1
      }
    }

    const multiplier = getRangeMultiplier(range)

    const analytics = {
      overview: {
        totalRevenue: Math.round(48294 * multiplier),
        revenueChange: 12.5,
        activeUsers: Math.round(2420 * multiplier),
        usersChange: 8.2,
        conversionRate: 3.24,
        conversionChange: -0.4,
        newSignups: Math.round(184 * multiplier),
        signupsChange: 24.5,
      },
      revenueByDay: Array.from({ length: range === '24h' ? 24 : range === '7d' ? 7 : range === '30d' ? 30 : 90 }, (_, i) => ({
        date: new Date(Date.now() - (i * (range === '24h' ? 3600000 : 86400000))).toISOString(),
        revenue: Math.round(Math.random() * 5000 + 1000),
        orders: Math.round(Math.random() * 50 + 10),
      })).reverse(),
      usersByPlan: [
        { plan: 'Starter', count: Math.round(1200 * multiplier), percentage: 49.6 },
        { plan: 'Professional', count: Math.round(980 * multiplier), percentage: 40.5 },
        { plan: 'Enterprise', count: Math.round(240 * multiplier), percentage: 9.9 },
      ],
      topPages: [
        { path: '/dashboard', views: Math.round(15420 * multiplier), uniqueVisitors: Math.round(8930 * multiplier) },
        { path: '/pricing', views: Math.round(12300 * multiplier), uniqueVisitors: Math.round(9200 * multiplier) },
        { path: '/features', views: Math.round(8500 * multiplier), uniqueVisitors: Math.round(6100 * multiplier) },
        { path: '/signup', views: Math.round(6200 * multiplier), uniqueVisitors: Math.round(5800 * multiplier) },
        { path: '/login', views: Math.round(4100 * multiplier), uniqueVisitors: Math.round(3200 * multiplier) },
      ],
      recentActivity: [
        { id: '1', user: 'Sarah Chen', action: 'created a new project', timestamp: new Date(Date.now() - 120000).toISOString() },
        { id: '2', user: 'Marcus Johnson', action: 'upgraded to Professional', timestamp: new Date(Date.now() - 900000).toISOString() },
        { id: '3', user: 'Emily Rodriguez', action: 'invited 3 team members', timestamp: new Date(Date.now() - 3600000).toISOString() },
        { id: '4', user: 'David Kim', action: 'completed onboarding', timestamp: new Date(Date.now() - 7200000).toISOString() },
      ],
    }

    return NextResponse.json({
      success: true,
      data: analytics,
      range,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Analytics fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
