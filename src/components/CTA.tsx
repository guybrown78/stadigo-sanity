import { Button } from "./Button";
import { Container } from "./Container";
import { Subscribe } from "./modals/Subscribe";


export default function CallToAction(){
	return (
		<section
			id="call-to-action"
      aria-label="Ready to Take Action with Stadigo"
			className="elative overflow-hidden bg-emerald-950 py-32"
    >
			{/* Set a background image */}
			{/* 
			 <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
			*/}
			<Container>
				<div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Your journey starts here
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
					Explore our Pioneer Program or stay informed – It&apos;s your first step toward stadium excellence!
          </p>
					<div className="flex justify-center space-x-6 mt-4">
						<Button 
							href="/stadigo-pioneer-program" 
							variant="outline" 
							color="white"
						>
								<span className="hidden lg:inline">Join our&nbsp;</span>Pioneer Program
						</Button>
						<Subscribe />
					</div>
        </div>
			</Container>
		</section>
		
	)
}