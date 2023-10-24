"use client"
import { usePathname, useRouter } from 'next/navigation'
// import useAnimatedRouter from "@/hooks/useAnimatedRouter";

import Link from "next/link";
import { MouseEventHandler } from 'react';

type Props = {
	href:string,
	children:React.ReactNode
}


export default function NavLink({ href, children }:Props) {

	// const { animatedRoute } = useAnimatedRouter();
	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = (event:any) => {
		event.preventDefault();
		if (pathname === "/" && href.includes("#")) {
			window.location.hash = ''
			window.location.hash = href.replace("/", "")
		}else{
			router.push(`${href}`)
		}
	}

	return (
		<Link 
			href={href}
			onClick={(e:any) => handleAnchor(e)}
			className="inline-block rounded-lg px-1 lg:px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
		>
			{ children }
		</Link>
	)
}