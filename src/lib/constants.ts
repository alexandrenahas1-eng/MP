// Application constants

export const APP_NAME = 'MP SaaS'
export const APP_DESCRIPTION = 'The all-in-one platform to streamline your workflow, boost productivity, and scale your business.'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
  },
  USERS: '/api/users',
  PROJECTS: '/api/projects',
  ANALYTICS: '/api/analytics',
  CONTACT: '/api/contact',
} as const

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
] as const

// Pricing plans
export const PRICING_PLANS = {
  STARTER: 'starter',
  PROFESSIONAL: 'professional',
  ENTERPRISE: 'enterprise',
} as const

// Status options for projects
export const PROJECT_STATUS = {
  PLANNING: 'planning',
  ACTIVE: 'active',
  REVIEW: 'review',
  COMPLETED: 'completed',
  ARCHIVED: 'archived',
} as const

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const

// Date formats
export const DATE_FORMATS = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  WITH_TIME: 'MMM d, yyyy h:mm a',
  ISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const

// Validation rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  MESSAGE_MIN_LENGTH: 10,
} as const

// Social links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/mpsaas',
  GITHUB: 'https://github.com/mpsaas',
  LINKEDIN: 'https://linkedin.com/company/mpsaas',
} as const

// Contact info
export const CONTACT_INFO = {
  EMAIL: 'hello@mpsaas.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: 'San Francisco, CA',
} as const

// Feature flags (for future use)
export const FEATURE_FLAGS = {
  DARK_MODE: false,
  BETA_FEATURES: false,
  ANALYTICS_V2: false,
} as const
