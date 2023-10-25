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
          {/* <Button href="/#book-demo" onClick={(e) => handleAnchor(e, '#book-demo')} color="white" className="mt-10">
            Book a demo
          </Button> */}
        </div>
			</Container>
		</section>
		
	)
}