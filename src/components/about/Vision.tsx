import { Container } from "@/components/Container";
import stadigoSharedVisionImage from '@/images/stadigo-shared-vision.png'
import Image from "next/image";

export default function Vision(){

	return (

		<Container className="py-24">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				
				<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-600 lg:max-w-none lg:grid-cols-2">
					<div className="hidden lg:flex justify-center items-end">
						<Image 
							src={stadigoSharedVisionImage}
							alt="Stadigo shared vision"
							width={680}
							height={500}
							className="w-auto max-h[450px] object-cover"
						/>
					</div>
					<div>
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<p className="text-base font-semibold leading-7 text-green-600">Setting the bar high</p>
							<h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Stadigo&apos;s Vision</h2>
						</div>

						<div className="mt-10 max-w-xl lg:max-w-none ">
							<div className="text-xl leading-9 text-slate-600 border-l border-green-600 pl-4 md:pl-10">
								<p>
									&ldquo;Empowering Excellence, Elevating Experiences: Stadigo&apos;s vision is to lead the way in redefining competency assurance in sports stadiums, creating a seamless digital environment where excellence is the standard, and every fan&apos;s experience is elevated to new heights.&rdquo;
								</p>
							</div>
						</div>


					</div>
				</div>

			</div>

		</Container>


			// <Container className="overflow-hidden pb-10 pt-10 sm:pt-12 lg:pt-14">

			// 	<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-600 lg:max-w-none lg:grid-cols-2">

			// 		<div className="hidden lg:block -ml-12 p-12 lg:max-w-xl">
			// 			<Image 
			// 				src={stadigoSharedVisionImage}
			// 				alt="Stadigo shared vision"
			// 				width={680}
			// 				height={500}
			// 				className=" object-cover"
			// 			/>
			// 		</div>


			// 		<div className="mx-auto">
			// 			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			// 				<p className="text-base font-semibold leading-7 text-green-600">Setting the bar high</p>
			// 				<h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Stadigo&apos;s Vision</h2>
			// 			</div>

			// 			<div className="mt-10 max-w-xl lg:max-w-none ">
			// 				<div className="text-xl leading-9 text-slate-600 border-l border-green-600 pl-4 md:pl-10">
			// 					<p>
			// 						&ldquo;Empowering Excellence, Elevating Experiences: Stadigo&apos;s vision is to lead the way in redefining competency assurance in sports stadiums, creating a seamless digital environment where excellence is the standard, and every fan&apos;s experience is elevated to new heights.&rdquo;
			// 					</p>
			// 				</div>
			// 			</div>
		

			// 		</div>

			// 	</div>

			
			
			// </Container>


	)
}