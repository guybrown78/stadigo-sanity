import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Stadigo - Revolutionising Stadium Excellence and Competency Assurance",
  description: "Elevate stadium performance with Stadigo's digital solutions. Empower staff, ensure competency assurance, and enhance fan safety for the ultimate experience",
	keywords: "Stadium excellence, Competency assurance, Fan safety, Stadium management, Digital solutions, Empower staff, Sports stadium performance, Fan experience, Safety assurance, Revolutionize stadium operations, Excellence in sports arenas, Stadium software, Digital transformation, Fan engagement, Targeted training, Sports venue competence, Innovative stadium solutions, Staff training, Stadium innovation, Stadium technology"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
			lang="en" 
			className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
		>
			<GoogleAnalytics GA_MEASUREMENT_ID='G-Q1JDSZ3HFZ'/>
      <body className="flex h-full flex-col">
				<Header />
				<main>
					{children}
				</main>
				<Footer />
				<CookieBanner />
			</body>
    </html>
  )
}