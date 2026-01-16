import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Heart, Globe, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'Everything we build starts with our customers. Their success is our success.',
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'We believe powerful tools should be simple to use. Complexity is the enemy of execution.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'We believe in open communication, honest pricing, and no hidden surprises.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re building tools that empower teams around the world to do their best work.',
  },
]

const team = [
  { name: 'Alex Thompson', role: 'CEO & Co-founder', image: 'A' },
  { name: 'Sarah Chen', role: 'CTO & Co-founder', image: 'S' },
  { name: 'Marcus Johnson', role: 'VP of Engineering', image: 'M' },
  { name: 'Emily Rodriguez', role: 'VP of Product', image: 'E' },
  { name: 'David Kim', role: 'VP of Design', image: 'D' },
  { name: 'Lisa Wang', role: 'VP of Marketing', image: 'L' },
]

const milestones = [
  { year: '2020', event: 'Company founded with a vision to simplify work' },
  { year: '2021', event: 'Launched v1.0 and acquired first 1,000 customers' },
  { year: '2022', event: 'Raised Series A, expanded to 50 team members' },
  { year: '2023', event: 'Reached 10,000+ customers across 80 countries' },
  { year: '2024', event: 'Launched Enterprise tier and mobile apps' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of Work
          </h1>
          <p className="text-xl text-gray-600">
            We&apos;re on a mission to help teams work smarter, not harder.
            MP SaaS is the platform that brings your work together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  MP SaaS was born from frustration. Our founders, Alex and Sarah, were tired of
                  juggling dozens of tools just to get their work done. They believed there had
                  to be a better way.
                </p>
                <p>
                  In 2020, they set out to build the all-in-one platform they wished they had.
                  Today, MP SaaS powers over 10,000 teams worldwide, from startups to Fortune 500
                  companies.
                </p>
                <p>
                  Our team is distributed across 15 countries, united by a common mission: to
                  make work simpler, more productive, and dare we say—enjoyable.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary-600">10K+</div>
                    <div className="text-gray-600">Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">80+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">50+</div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind the product.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones along the way.</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-lg font-semibold text-primary-600">{milestone.year}</div>
                  <div className="text-gray-700">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            We&apos;re always looking for talented people to join our mission.
            Check out our open positions.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
