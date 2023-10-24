'use client'

import { Popover, Transition } from '@headlessui/react'
import { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'


type Props = {
	href:string,
	children:ReactNode,
}

export default function MobileNavLink({ href, children }:Props) {

	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = () => {
		if (pathname === "/" && href.includes("#")) {
			window.location.hash = ''
			window.location.hash = href.replace("/", "")
		}else{
			router.push(`${href}`)
		}
	}

  return (
    <Popover.Button 
			onClick={() => handleAnchor()}
			className="block w-full p-2"
		>
      {children}
    </Popover.Button>
  )
}