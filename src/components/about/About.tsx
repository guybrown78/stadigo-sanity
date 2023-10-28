import CheckedBackground from "@/components/CheckedBackground";
import { Container } from "@/components/Container";
import BluredBackground from "@/components/BluredBackground";
import AboutTileImage from "@/components/about/AboutTileImage";

import aboutTileImage1 from '@/images/stadigo-about-image-1.avif';
import stadigoPioneerImage from '@/images/stadigo-pioneer.png';
import stadigoImprovementImage from '@/images/stadigo-stadium-continuous-improvement.png';
import stadigoIntegrityImage from '@/images/stadigo-stadium-integrity.png';
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
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Champions of Stadium Excellence.
								</h1>
								<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									At Stadigo, we&apos;re the driving force behind stadium excellence. Our journey is defined by innovation and a commitment to setting new standards in stadium operations. Explore how we&apos;re reshaping the stadium experience.
								</p>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<AboutTileImage 
										image={stadigoImprovementImage}
										alt=""
									/>
								</div>

								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<AboutTileImage 
										image={stadigoPioneerImage}
										alt=""
									/>
									<AboutTileImage 
										image={stadigoIntegrityImage}
										alt=""
									/>
								</div>

								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<AboutTileImage 
										image={stadigoImprovementImage}
										alt=""
									/>
									<AboutTileImage 
										image={stadigoIntegrityImage}
										alt=""
									/>
								</div>

							</div>
						</div>
					</Container>
					<CompanyInsight />
					<Vision />
				</div>

			</div>
			
		</section>
		
	)
}