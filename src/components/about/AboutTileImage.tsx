import Image from "next/image"




type Props = {
	image:any,
	alt:string
}


export default function AboutTileImage({image, alt}:Props){

	return (

		<div className="relative">
			<Image 
				src={image}
				alt={alt}
				width={176}
				height={264}
				className="aspect-[2/3] w-full rounded-xl bg-white object-cover shadow-lg"
			/>
				{/* <img
					src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
					alt=""
					
				/> */}
				<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-500/10" />
			</div>

	
	)
}

