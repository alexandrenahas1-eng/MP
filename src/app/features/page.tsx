import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Clock,
  Globe,
  Layers,
  GitBranch,
  Database,
  Smartphone,
  Cloud,
  Lock,
  RefreshCw,
  Headphones,
  Check,
  ArrowRight,
} from 'lucide-react'

const mainFeatures = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your business with real-time dashboards, custom reports, and AI-powered predictions.',
    benefits: ['Real-time dashboards', 'Custom report builder', 'AI predictions', 'Export to PDF/CSV'],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, real-time editing, and smart notifications.',
    benefits: ['Shared workspaces', 'Real-time collaboration', 'Smart notifications', 'Role-based access'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance, SSO, and advanced encryption to protect your data.',
    benefits: ['SOC 2 compliant', 'SSO/SAML support', 'End-to-end encryption', '2FA authentication'],
  },
  {
    icon: RefreshCw,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks with powerful workflows, triggers, and custom integrations.',
    benefits: ['Visual workflow builder', 'Custom triggers', '500+ integrations', 'API webhooks'],
  },
]

const allFeatures = [
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-second load times for all operations' },
  { icon: Globe, title: 'Global CDN', description: 'Content delivered from 50+ edge locations' },
  { icon: Layers, title: 'Multi-workspace', description: 'Organize projects across multiple spaces' },
  { icon: GitBranch, title: 'Version Control', description: 'Track changes with full history' },
  { icon: Database, title: 'Data Import/Export', description: 'Seamless data migration tools' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native iOS and Android applications' },
  { icon: Cloud, title: 'Cloud Sync', description: 'Always up-to-date across devices' },
  { icon: Lock, title: 'Privacy Controls', description: 'Fine-grained permission management' },
  { icon: Clock, title: 'Time Tracking', description: 'Built-in time tracking and timesheets' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer support' },
]

const integrations = [
  'Slack', 'Microsoft Teams', 'Google Workspace', 'Salesforce',
  'HubSpot', 'Jira', 'GitHub', 'Notion',
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Everything you need to streamline your workflow, boost productivity,
            and scale your business. All in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <feature.icon className="w-24 h-24 text-primary-500 mx-auto mb-4" />
                      <p className="text-gray-500">Feature Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              And So Much More
            </h2>
            <p className="text-xl text-gray-600">
              Discover all the features that make MP SaaS the complete solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {allFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <feature.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrates with Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Connect MP SaaS with 500+ apps you already use.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-medium transition-colors"
              >
                {integration}
              </div>
            ))}
          </div>

          <Link href="/integrations" className="text-primary-600 font-semibold hover:text-primary-700">
            View all integrations &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Start your free 14-day trial today. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
