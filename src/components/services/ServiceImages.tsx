import stadigoImprovementImage from '@/images/stadigo-stadium-continuous-improvement.png';
import stadigoIntegrityImage from '@/images/stadigo-stadium-integrity.png';
import stadigoCompetencyImage from '@/images/stadigo-stadium-competency-assurance.png'
import stadigoDigitalExcellenceImage from '@/images/stadigo-stadium-digital-excellence.png'
import stadigoInnovationImage from '@/images/stadigo-stadium-innovation.png'

import ServiceTileImage from "@/components/services/ServiceTileImage";

export default function ServiceImages(){
	return (
		<div className="mt-0 mb-4 lg:mt-40 xl:mt-0 flex justify-center gap-8 md:gap-20 lg:gap-8 md:justify-end pr-0 md:pr-8 lg:pl-0">

			<div className="ml-auto w-44 flex-none space-y-4 lg:space-y-12 pt-18 sm:ml-0 lg:pt-72 xl:pt-72">
				<ServiceTileImage 
					image={stadigoDigitalExcellenceImage}
					alt="Stadigo stadium digital excellence"
				/>

				<ServiceTileImage 
					image={stadigoImprovementImage}
					alt="Stadigo stadium continuous improvement"
				/>
			</div>

			<div className="mr-auto w-44 flex-none space-y-4 lg:space-y-12 sm:mr-0 pt-8 lg:pt-36 xl:pt-52">
				<ServiceTileImage 
					image={stadigoCompetencyImage}
					alt="Stadigo stadium competency assurance"
				/>
				<ServiceTileImage 
					image={stadigoInnovationImage}
					alt="stadigo stadium innovation"
				/>
			</div>

			{/* <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
				<ServiceTileImage 
					image={stadigoImprovementImage}
					alt="Stadigo stadium continuous improvement"
				/>
				<ServiceTileImage 
					image={stadigoIntegrityImage}
					alt="Stadigo stadium integrity"
				/>
			</div> */}

		</div>
	)
}