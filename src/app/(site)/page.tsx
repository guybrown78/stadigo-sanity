import Contact from "@/components/contact/Contact"
import Hero from "@/components/hero/Hero"
import Solutions from "@/components/Solutions"
import Services from "@/components/services/Services"
import LatestInsights from "@/components/insights/LatestInsights"
import About from "@/components/about/About"
import Benefits from "@/components/Benefits"
import CallToAction from "@/components/CTA"

export default async function Home() {
  return (
		<>
			<Hero />
			<Solutions />
			<Services />
			<About />
			<CallToAction />
			<Benefits />
			<Contact />
			<LatestInsights />
		</>
  )
}
