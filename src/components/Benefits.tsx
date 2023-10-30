import { Container } from "./Container";


export default function Benefits(){

	const benefits = [
		{
			title: "Cost Efficiency",
			id:"cost-efficiency",
			subTitle: "Budget Optimisation",
			description: "Streamline your stadium's financial resources, ensuring efficient operations and profitability.",
			icon: "",
		},
		{
			title: "Sustainability",
			id:"sustainability",
			subTitle: "Reduced Environmental Impact",
			description: "Stadigo incorporates sustainable practices to minimise your stadium's ecological footprint, aligning with a greener and more sustainable future.",
			icon: "",
		},
		{
			title: "Competency Enhancement",
			id:"competency-enhancement",
			subTitle: "Building Fan Confidence",
			description: "Strengthen fan trust by equipping your staff with targeted training. Elevate their skills for consistent, exceptional performance.",
			icon: "",
		},
		{
			title: "Memorable Fan Experiences",
			id:"memorable-fan-experiences",
			subTitle: "Creating Ultimate Moments",
			description: "Craft unforgettable fan experiences that foster repeat patronage and positive word-of-mouth promotion.",
			icon: "",
		},
		{
			title: "Data-Driven Decision-Making",
			id:"data-driven-decision-making",
			subTitle: "Informed Choices",
			description: "Leverage data and insights from Stadigo to make informed decisions, continually improving operations and enhancing the overall fan experience.",
			icon: "",
		},
		{
			title: "Safety and Security Assurance",
			id:"safety-and-security-assurance",
			subTitle: "Prioritising Fan Well-Being",
			description: "Ensure your stadium meets compliance standards, enhancing safety and security for both fans and staff, establishing your venue as a trusted and secure destination.",
			icon: "",
		}
	]
	return (
		<section
			id="benefits"
      aria-label="Benefits of Choosing Stadigo"
      className="bg-white py-20 sm:py-32"
    >
			<Container>
				<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Discover the benefits of Stadigo</h2>

				<p className="mt-6 text-lg leading-8 text-slate-700">Stadigo goes beyond mere stadium management; it&apos;s a transformative tool that enhances how stadiums operate. Our innovative SaaS platform empowers stadium performance and fan experiences through competency assurance. Explore the benefits of Stadigo:</p>

				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base text-slate-600 leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">

				{benefits.map((benefit) => (
						<div key={benefit.id} className=''>
							<dt className="font-semibold text-green-600">{benefit.title}</dt>
							<dd className="mt-1 ">
								<span className='italic text-slate-700'>{benefit.subTitle}:</span> {benefit.description}
							</dd>
						</div>
					))}

					{/* <div className=''>
						<dt className="font-semibold text-green-700">Cost Efficiency</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Budget Optimisation:</span> Streamline your stadium&apos;s financial resources, ensuring efficient operations and profitability.
						</dd>
					</div> */}

					{/* <div className=''>
						<dt className="font-semibold text-green-700">Sustainability</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Reduced Environmental Impact:</span> Stadigo incorporates sustainable practices to minimise your stadium&apos;s ecological footprint, aligning with a greener and more sustainable future.
						</dd>
					</div>

					<div className=''>
						<dt className="font-semibold text-green-700">Competency Enhancement</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Building Fan Confidence:</span> Strengthen fan trust by equipping your staff with targeted training. Elevate their skills for consistent, exceptional performance.
						</dd>
					</div>

					<div className=''>
						<dt className="font-semibold text-green-700">Memorable Fan Experiences</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Creating Ultimate Moments:</span> Craft unforgettable fan experiences that foster repeat patronage and positive word-of-mouth promotion.
						</dd>
					</div>

					<div className=''>
						<dt className="font-semibold text-green-700">Data-Driven Decision-Making</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Informed Choices: </span>Leverage data and insights from Stadigo to make informed decisions, continually improving operations and enhancing the overall fan experience.
						</dd>
					</div>

					<div className=''>
						<dt className="font-semibold text-green-700">Safety and Security Assurance</dt>
						<dd className="mt-1 ">
							<span className='italic text-green-700'>Prioritising Fan Well-Being:</span> Ensure your stadium meets compliance standards, enhancing safety and security for both fans and staff, establishing your venue as a trusted and secure destination.
						</dd>
					</div> */}


				</dl>


			</Container>
		</section>
		
	)
}
