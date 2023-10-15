"use client"

import useAnimatedRouter from "@/hooks/useAnimatedRouter";

import Link from "next/link";


export default function Logo() {

	const { animatedRoute } = useAnimatedRouter();

	return (
		<Link 
		href="/"
			onClick={() => {        
        animatedRoute("/");
      }}
      passHref  
			className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent text-lg drop-shadow-md font-bold"
		>
			Home
		</Link>
	)
}