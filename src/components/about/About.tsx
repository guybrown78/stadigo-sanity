import CheckedBackground from "@/components/CheckedBackground";
import { Container } from "@/components/Container";
import BluredBackground from "@/components/BluredBackground";
import AboutTileImage from "@/components/about/AboutTileImage";



import stadigoImprovementImage from '@/images/stadigo-stadium-continuous-improvement.png';
import stadigoIntegrityImage from '@/images/stadigo-stadium-integrity.png';
import stadigoCompetencyImage from '@/images/stadigo-stadium-competency-assurance.png'
import stadigoDigitalExcellenceImage from '@/images/stadigo-stadium-digital-excellence.png'
import stadigoInnovationImage from '@/images/stadigo-stadium-innovation.png'

import CompanyInsight from "@/components/about/CompanyInsight";
import Vision from "@/components/about/Vision";

export default function About(){
	return (
		<section
			id="about"
      aria-label="About Stadigo - Our Vision and Story"
			className="bg-white text-slate-900"
    >
			<div className="relative isolate overflow-hidden lg:overflow-visible">
				<CheckedBackground />
				<BluredBackground />	
				<div className="overflow-hidden">

					<Container className="pb-32 pt-36 sm:pt-60 lg:pt-32">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
									Champions of Stadium Excellence.
								</h1>
								<p className="relative mt-6 text-lg leading-8 text-slate-600 sm:max-w-md lg:max-w-none">
									At Stadigo, we&apos;re the driving force behind stadium excellence. Our journey is defined by innovation and a commitment to setting new standards in stadium operations. Explore how we&apos;re reshaping the stadium experience.
								</p>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<AboutTileImage 
										image={stadigoDigitalExcellenceImage}
										alt="Stadigo stadium digital excellence"
									/>
								</div>

								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<AboutTileImage 
										image={stadigoCompetencyImage}
										alt="Stadigo stadium competency assurance"
									/>
									<AboutTileImage 
										image={stadigoInnovationImage}
										alt="stadigo stadium innovation"
									/>
								</div>

								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<AboutTileImage 
										image={stadigoImprovementImage}
										alt="Stadigo stadium continuous improvement"
									/>
									<AboutTileImage 
										image={stadigoIntegrityImage}
										alt="Stadigo stadium integrity"
									/>
								</div>

							</div>
						</div>
					</Container>
					<div id="company-details">
						<CompanyInsight />
					</div>
					<div id="vision-statement">
						<Vision />
					</div>
				</div>

			</div>
			
		</section>
		
	)
}