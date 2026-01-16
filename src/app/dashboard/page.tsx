'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Zap,
  LayoutDashboard,
  Users,
  FolderOpen,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  UserPlus,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'

const stats = [
  {
    name: 'Total Revenue',
    value: '$48,294',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    name: 'Active Users',
    value: '2,420',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    name: 'Conversion Rate',
    value: '3.24%',
    change: '-0.4%',
    trend: 'down',
    icon: Activity,
    color: 'bg-purple-500',
  },
  {
    name: 'New Signups',
    value: '184',
    change: '+24.5%',
    trend: 'up',
    icon: UserPlus,
    color: 'bg-orange-500',
  },
]

const recentActivity = [
  { id: 1, user: 'Sarah Chen', action: 'created a new project', time: '2 minutes ago', avatar: 'S' },
  { id: 2, user: 'Marcus Johnson', action: 'upgraded to Professional', time: '15 minutes ago', avatar: 'M' },
  { id: 3, user: 'Emily Rodriguez', action: 'invited 3 team members', time: '1 hour ago', avatar: 'E' },
  { id: 4, user: 'David Kim', action: 'completed onboarding', time: '2 hours ago', avatar: 'D' },
  { id: 5, user: 'Lisa Wang', action: 'exported analytics report', time: '3 hours ago', avatar: 'L' },
]

const projects = [
  { id: 1, name: 'Marketing Campaign', status: 'Active', progress: 75, members: 4 },
  { id: 2, name: 'Product Launch', status: 'In Review', progress: 90, members: 6 },
  { id: 3, name: 'Website Redesign', status: 'Active', progress: 45, members: 3 },
  { id: 4, name: 'Mobile App', status: 'Planning', progress: 20, members: 5 },
]

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', active: true },
  { name: 'Projects', icon: FolderOpen, href: '/dashboard/projects', active: false },
  { name: 'Team', icon: Users, href: '/dashboard/team', active: false },
  { name: 'Analytics', icon: BarChart3, href: '/dashboard/analytics', active: false },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings', active: false },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">MP SaaS</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="mt-6 px-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                link.active
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-400 mb-2">Storage Used</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
            <p className="text-sm text-gray-400">68 GB of 100 GB</p>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
                  J
                </div>
                <div className="hidden md:block">
                  <p className="font-semibold text-gray-900 text-sm">John Doe</p>
                  <p className="text-gray-500 text-xs">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, John! Here&apos;s what&apos;s happening.</p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.name}</p>
              </div>
            ))}
          </div>

          {/* Charts & Activity */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              {/* Chart Placeholder */}
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary-500 rounded-t-lg transition-all hover:bg-primary-600"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-gray-500">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>{' '}
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1">
                View all activity
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
                <Link href="/dashboard/projects" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  View all
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Project</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Progress</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Team</th>
                    <th className="text-right py-3 px-6 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <p className="font-medium text-gray-900">{project.name}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : project.status === 'In Review'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-500 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex -space-x-2">
                          {[...Array(Math.min(project.members, 3))].map((_, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                          {project.members > 3 && (
                            <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                              +{project.members - 3}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
