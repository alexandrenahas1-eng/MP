# MP SaaS

A modern, fully functional SaaS (Software as a Service) website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Landing Page** - Hero section, features showcase, testimonials, and CTAs
- **Pricing Page** - Tiered pricing plans with comparison table and FAQs
- **Features Page** - Detailed feature breakdown with benefits
- **About Page** - Company story, values, team, and timeline
- **Contact Page** - Contact form with validation
- **Authentication** - Login and signup pages with form validation
- **Dashboard** - Analytics dashboard with stats, charts, and project management
- **API Routes** - RESTful API endpoints for all functionality

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Utilities:** clsx for class management

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mp-saas.git
   cd mp-saas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/             # API routes
│   ├── dashboard/       # Protected dashboard
│   ├── login/           # Authentication
│   ├── signup/          # Registration
│   ├── pricing/         # Pricing page
│   ├── features/        # Features page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   └── page.tsx         # Home page
├── components/          # Reusable components
├── lib/                 # Utility functions
└── types/               # TypeScript types
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/features` | Features showcase |
| `/pricing` | Pricing plans |
| `/about` | About the company |
| `/contact` | Contact form |
| `/login` | User login |
| `/signup` | User registration |
| `/dashboard` | User dashboard |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | Authenticate user |
| `/api/auth/signup` | POST | Register new user |
| `/api/contact` | POST | Submit contact form |
| `/api/users` | GET | List users |
| `/api/analytics` | GET | Get analytics data |
| `/api/projects` | GET/POST | Manage projects |

## Customization

### Styling

- Edit `tailwind.config.ts` to customize colors, fonts, and animations
- Modify `src/app/globals.css` for global styles and component classes

### Content

- Update page content directly in the respective page files
- Modify constants in `src/lib/constants.ts`

### Components

- Add new components to `src/components/`
- Follow the existing patterns for consistency

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the application:
```bash
npm run build
```

The output will be in the `.next` directory.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Add additional environment variables as needed for:
- Database connections
- Authentication providers
- Payment processing
- Email services

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact us at hello@mpsaas.com.
