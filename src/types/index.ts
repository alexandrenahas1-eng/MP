// User types
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  plan: 'starter' | 'professional' | 'enterprise'
  avatar?: string
  createdAt: string
  updatedAt?: string
}

// Authentication types
export interface AuthResponse {
  success: boolean
  message: string
  user: User
  token: string
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupData {
  name: string
  email: string
  password: string
  agreeToTerms: boolean
}

// Project types
export interface Project {
  id: string
  name: string
  description?: string
  status: 'planning' | 'active' | 'review' | 'completed' | 'archived'
  progress: number
  members: number
  createdAt: string
  updatedAt?: string
}

// Analytics types
export interface AnalyticsOverview {
  totalRevenue: number
  revenueChange: number
  activeUsers: number
  usersChange: number
  conversionRate: number
  conversionChange: number
  newSignups: number
  signupsChange: number
}

export interface RevenueDataPoint {
  date: string
  revenue: number
  orders: number
}

export interface PlanDistribution {
  plan: string
  count: number
  percentage: number
}

export interface PageStats {
  path: string
  views: number
  uniqueVisitors: number
}

export interface ActivityLog {
  id: string
  user: string
  action: string
  timestamp: string
}

export interface AnalyticsData {
  overview: AnalyticsOverview
  revenueByDay: RevenueDataPoint[]
  usersByPlan: PlanDistribution[]
  topPages: PageStats[]
  recentActivity: ActivityLog[]
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Pricing types
export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  popular: boolean
  features: PlanFeature[]
  cta: string
  ctaLink: string
}

export interface PlanFeature {
  name: string
  included: boolean
}

// Navigation types
export interface NavLink {
  href: string
  label: string
  active?: boolean
}

export interface SidebarLink extends NavLink {
  icon: React.ComponentType<{ className?: string }>
}

// Notification types
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}

// Settings types
export interface UserSettings {
  notifications: {
    email: boolean
    push: boolean
    marketing: boolean
  }
  theme: 'light' | 'dark' | 'system'
  language: string
  timezone: string
}
