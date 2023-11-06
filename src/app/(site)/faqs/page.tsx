import { Container } from "@/components/Container";
import { getFaqs } from "@/sanity/sanity-utils";



export const metadata = {
  title: "Stadigo's Frequently Asked Questions - Stadigo Stadium Excellence and Competency Assurance",
  description: "Find answers to your questions about Stadigo, stadium competence assurance, fan safety, and more. Explore our FAQ section for in-depth information.",
	keywords: "Frequently Asked Questions, FAQ, Stadigo, Stadium excellence, Competency assurance, Fan safety, Stadium management, Digital solutions, Empower staff, Sports stadium performance, Fan experience, Safety assurance, Stadium operations, Excellence in sports arenas, Stadium software, Digital transformation, Fan engagement, Targeted training, Sports venue competence, Innovative stadium solutions, Staff training, Stadium innovation, Stadium technology"
}


export default async function FaqPage(){
	const faqs =  await getFaqs();

	return (
		<Container>
		<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
		<h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900">Frequently asked questions</h2>
		<p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
			Have a different question and can’t find the answer you’re looking for? Reach out to our support team at{' '}
			<a href="mailto:info@stadigo.com" className="font-semibold text-green-600 hover:text-green-500">
				info@stadigo.com
			</a>{' '}
			and we’ll get back to you as soon as we can.
		</p>
		<div className="mt-20">
			<dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
				{faqs.map((faq) => (
					<div key={faq._id}>
						<dt className="text-base font-semibold leading-7 text-slate-900">{faq.question}</dt>
						<dd className="mt-2 text-base leading-7 text-slate-600">{faq.answer}</dd>
					</div>
				))}
			</dl>
		</div>
	</div>
		</Container>


	)
}