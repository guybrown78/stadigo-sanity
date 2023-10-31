

import stadigoFanImage from '@/images/stadigo-service-fan-enhancement.png'
import stadigoSafety from '@/images/stadigo-service-safety.png'
import stadigoDigital from '@/images/stadigo-service-digital-transformation.png'
import stadigoCompetent from '@/images/stadigo-service-competency-assurance.png'

import ServiceTileImage from "@/components/services/ServiceTileImage";

export default function ServiceImages(){
	return (
		<div className="mt-0 mb-4 lg:mt-40 xl:mt-0 flex justify-center gap-8 md:gap-20 lg:gap-12 xl:gap-24 md:justify-end pr-0 md:pr-8 lg:pl-0">

			<div className="ml-auto w-44 flex-none space-y-4 lg:space-y-24 xl:space-y-32 pt-18 sm:ml-0 lg:pt-72 xl:pt-72">
				<ServiceTileImage 
					image={stadigoDigital}
					alt="Stadigo service: Digital Transformation"
				/>

				<ServiceTileImage 
					image={stadigoSafety}
					alt="Stadigo service: Safety and Efficiency"
				/>
			</div>

			<div className="mr-auto w-44 flex-none space-y-4 lg:space-y-24 xl:space-y-32 sm:mr-0 pt-8 lg:pt-36 xl:pt-52">
				<ServiceTileImage 
					image={stadigoCompetent}
					alt="Stadigo service: Competency Assurance"
				/>
				<ServiceTileImage 
					image={stadigoFanImage}
					alt="Stadigo service: Fan Experience Enhancement"
				/>
			</div>

		</div>
	)
}