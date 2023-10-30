import { Container } from "./Container";
import { GiSkills } from "react-icons/gi"
import { AiOutlineCloudServer, AiOutlineRise } from "react-icons/ai"
export default function Solutions(){

	const solutions = [
		{
			title: "Performance Validation",
			subTitle: "Assuring Excellence",
			id: "performance-validation",
			description: "Our Performance Validation solution guarantees that your stadium staff is fully competent and prepared to deliver an exceptional fan experience. We prioritise safety and efficiency to create an environment where excellence is the norm.",
			href: "/performance-validation",
			cta: "Explore how we ensure a top-tier stadium performance.",
			icon: AiOutlineRise
		},
		{
			title: "Skill Enhancement",
			subTitle: "Empowering Your Team",
			id: "skill-enhancement",
			description: "Skill Enhancement empowers your stadium staff with customized training that elevates their skills and knowledge. By investing in your team's growth, we help you create a fan experience that's second to none. ",
			href: "/skill-enhancement",
			cta: "Discover how we can transform your workforce for success.",
			icon: GiSkills
		},
		{
			title: "Stadium Digital Integration",
			subTitle: "Seamless Modernization",
			id: "digital-integration",
			description: "Our Stadium Digital Integration solution digitally transforms your stadium teams and policies, providing powerful and uncluttered software. This innovation synchronises seamlessly with your existing operations, unlocking untapped potential. ",
			href: "/digital-integration",
			cta: "Explore how we bring your stadium into the digital age.",
			icon: AiOutlineCloudServer
		}
	]


	return (
		<section
			id="solutions"
      aria-label="Stadigo's Innovative Stadium Solutions"
      className="bg-emerald-950 py-24 sm:py-32"
    >
			<Container>
			
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-400">Excellence in stadium management</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Solutions for Peak Performance
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
						Explore Stadigo&apos;s primary solutions to empower your stadium team, guarantee safety, and provide a seamless digital transformation. 
						{/* We are devoted to reinventing stadium management and improving  fan experienc*/}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <solution.icon className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  {solution.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{solution.description}</p>
                  <p className="mt-6">
                    {/* <a href={solution.href} className="text-sm font-semibold leading-6 text-green-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

			</Container>
		</section>
		
	)
}