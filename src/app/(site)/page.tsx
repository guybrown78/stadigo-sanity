import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Solutions from "@/components/Solutions"
import Services from "@/components/Services"
import LatestInsights from "@/components/insights/LatestInsights"
import About from "@/components/About"
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
