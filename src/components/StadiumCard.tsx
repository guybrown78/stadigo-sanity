"use client"

import useAnimatedRouter from "@/hooks/useAnimatedRouter";

import Image from "next/image"
import Link from "next/link";

import { Project } from "@/types/Project";

type Props = {
	project:Project
}

export default function StadiumCard({ project }:Props) {

	const { animatedRoute } = useAnimatedRouter();

	return (
		<Link 
			href={`projects/${project.slug}`}
			onClick={(e) => {      
				e.preventDefault();  
        animatedRoute(`projects/${project.slug}`);
      }}
      passHref  
			className="border border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-green-500 cursor-pointer transition"
		>
			{ project.image && (
				<Image src={project.image} alt={project.name} width={300} height={150} className="object-cover rounded-lg border border-gray-500" />
			)}
			<div className="mt-2 font-extrabold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">{project.name}</div>
		</Link>
	)
}