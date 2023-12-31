'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'


type Props = {
	title:string,
	anchor:string
}


export default function FooterNavLink({ title, anchor }:Props) {

	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = (event:any, href:string) => {
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
			href={anchor}
			onClick={(e) => handleAnchor(e, anchor)}
			className="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
			replace={true}
			passHref={true}
		>
			{ title }
		</Link>
	)
}