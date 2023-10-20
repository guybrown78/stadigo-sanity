
import { Container } from "@/components/Container";

export default function FooterBasement() {
	return (
		<div className="mt-4 border-t border-slate-200/50 bg-slate-200/50" >
			<Container>
				<div className="flex flex-col items-center py-10 px-6	lg:px-8">
					
						<p className="mt-6 text-center text-xs mdtext-sm text-slate-500 sm:mt-0">
							Copyright &copy; {new Date().getFullYear()} Stadigo. All&nbsp;rights&nbsp;reserved.
						</p>
					
					</div>
			</Container>
		</div>
	)
}