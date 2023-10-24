import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import { Subscribe } from "@/components/modals/Subscribe";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default async function Header() {
	// get all pages
	const pages = await getPages();
	return (
		<header className="py-10">
			<Container>
				<nav className="relative z-10 flex justify-between">
					<div className="flex items-center md:gap-x-8 lg:gap-x-12">
						<Link href="/" className="w-28" aria-label="Home">
							<Logo />
						</Link>
						<div className="hidden md:flex md:gap-x-4 lg:gap-x-6">
              <NavLink href="/#solutions">Solutions</NavLink>
              <NavLink href="/#services">Services</NavLink>
							<NavLink href="/#about">About</NavLink>
              <NavLink href="/#benefits">Benefits</NavLink>
            </div>
					</div>
					<div className="flex items-center gap-x-3 lg:gap-x-8">
            <div className="hidden md:block">
							<Button 
								href="/stadigo-pioneer-programe" 
								variant="outline" 
								color="slate"
							><span className="hidden lg:inline">Join our&nbsp;</span>Pioneer Programe</Button>
            </div>
						<Subscribe />
            <div className="-mr-1 md:hidden">
              {/* <MobileNavigation /> */}
            </div>
          </div>
				</nav>
			</Container>
			
		</header>
	)
}