import Image from "next/image"




type Props = {
	image:any,
	alt:string
}


export default function ServiceTileImage({image, alt}:Props){

	return (

		<div className="relative">
			<Image 
				src={image}
				alt={alt}
				width={176}
				height={264}
				className="aspect-[2/3] w-full rounded-xl object-cover bg-green-600/5 shadow-lg"
			/>
				<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-green-600/10" />
			</div>

	
	)
}

