// "use client"

// import useAnimatedRouter from "@/hooks/useAnimatedRouter";

import Link from "next/link";

type Props = {
	slug:string,
	children:React.ReactNode
}


export default function NavLink({ slug, children }:Props) {

	// const { animatedRoute } = useAnimatedRouter();

	return (
		<Link 
			href={`/${slug}`}
			// onClick={() => {        
      //   animatedRoute(`/${slug}`);
      // }}
      // passHref  
			className="hover:underline"
		>
			{ children }
		</Link>
	)
}