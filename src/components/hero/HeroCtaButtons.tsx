'use client'

import Link from "next/link";
import { Subscribe } from "../modals/Subscribe";

export default function HeroCtaButtons(){

	const handleAnchor = (event:any, href:string) => {
		event.preventDefault();
		window.location.hash = ''
		window.location.hash = href
	}

	return (
		<div className="mt-10 flex items-center justify-center gap-x-6">
			<Subscribe />
			<Link href="/#solutions" onClick={(e) => handleAnchor(e, "#solutions")} className="text-sm font-semibold leading-6 text-slate-900">
				Discover our solutions <span aria-hidden="true">→</span>
			</Link>
		</div>
	)
}