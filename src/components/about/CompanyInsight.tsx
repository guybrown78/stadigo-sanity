import { Container } from "@/components/Container";

export default function CompanyInsight(){

	return (
		<Container className="">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<p className="text-base font-semibold leading-7 text-salvify-primary">Work better</p>
				<h2 className="font-display text-3xl tracking-tight text-salvify-secondary sm:text-4xl">An insight into Salvify</h2>
				<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
					<div>
						<p>
							At Stadigo, our mission is simple yet profound – <span className='font-semibold'>to redefine how sports stadiums and arenas operate.</span> We&apos;re driven by an unwavering passion for stadium excellence and the ultimate fan experience.
						
						</p>
						<p className="mt-8">
							Our journey is marked by a commitment to integrity, innovation, and continuous improvement. We&apos;re dedicated to setting a new standard for stadium management, focusing on competency assurance to make excellence the norm.
						
						</p>
					</div>
					<div>
						<p>
							Stadigo embodies a digitalised future where clarity, precision, and efficiency are paramount. We empower stadium staff with targeted training, unlocking their full potential and ensuring exceptional fan experiences.
					
						</p>
						<p className="mt-8">
							Join us in this transformative journey towards stadium excellence. Together, we will create a new era in stadium management, where every fan experience is guaranteed to be unforgettable. <span className='font-semibold'>Welcome to Stadigo.</span>
						</p>
					</div>
				</div>

			</div>

		</Container>
	)
}