import { Container } from "@/components/Container";
import { FaCircleCheck, FaLock, FaHubspot, FaStar } from "react-icons/fa6"
import ServiceImages from "@/components/services/ServiceImages";

export default function Services(){

	const features = [
		{
			name: 'Competency Assurance.',
			id: 'competency-assurance',
			subTitle: 'Unleash competency excellence',
			description:
				'Empower your stadium staff with targeted training to ensure they excel in their roles. Stadigo guarantees that your team is equipped with the skills needed for seamless stadium operations and an exceptional fan experience.',
			icon: FaCircleCheck,
		},
		{
			name: 'Digital Transformation.',
			id: 'digital-transformation',
			subTitle: 'Improve stadium operations',
			description: 'Experience a revolutionary shift in stadium management with Stadigo\'s digital transformation. Streamline your operations, synchronize with existing teams and policies, and bring efficiency to a whole new level.',
			icon: FaHubspot,
		},
		{
			name: 'Fan Experience Enhancement.',
			id: 'fan-experience-enhancement',
			subTitle: 'Creating unforgettable moments',
			description: 'Stadigo is dedicated to creating unforgettable moments for fans. Our digital solutions, mobile apps, and data analytics elevate the fan experience, making every visit to your stadium a memorable one.',
			icon: FaStar,
		},
		{
			name: 'Safety and Efficiency.',
			id: 'safety-and-efficieny',
			subTitle: 'Ensuring seamless stadium operations',
			description: 'Safety and efficiency are at the core of Stadigo\'s offerings. We guarantee the safety of fans and staff while ensuring seamless stadium operations. Our customization, support, and digital innovation enhance efficiency to unprecedented levels.',
			icon: FaLock,
		},
	]


	return (
		<section
			id="services"
      aria-label="Stadigo Digital Services for Stadium Excellence"
      className="bg-white overflow-hidden py-24 sm:py-32"
    >
			<Container>
				

      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Elevate your stadium experience</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Services</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
								At Stadigo, we&apos;re on a mission to revolutionise the way sports stadiums and arenas operate. Our commitment to excellence, fan satisfaction, and operational efficiency has led us to offer a range of core services that are designed to transform your stadium experience. From enhancing staff competency to digitising operations and ensuring fan delight, explore our key services that are the backbone of stadium excellence.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.id} className="relative pl-9" id={feature.id}>
                    <dt className="inline font-semibold text-slate-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
											<span className="ml-2 italic font-medium">{feature.subTitle}:</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0 h-full">
            <div className="relative isolate overflow-hidden bg-green-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none h-full">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
								<ServiceImages />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>


			</Container>
		</section>
		
	)
}