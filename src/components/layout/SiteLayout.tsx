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


export default function SiteLayout({
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
