
import { Container } from "@/components/Container";
import { FaSquareXTwitter,FaLinkedin } from "react-icons/fa6"

export default function FooterBasement() {
	return (
		<div className="mt-4 border-t border-slate-200/50 bg-slate-200/50" >
			<Container>
				<div className="flex items-center justify-between py-10">
					
						<p className="text-xs text-slate-500">
							Copyright &copy; {new Date().getFullYear()} Stadigo. All&nbsp;rights&nbsp;reserved.
						</p>

						<div className="flex items-center justify-end space-x-4 text-xl">
							<a href="https://twitter.com/_stadigo_" target="_blank" className="text-slate-500 hover:text-green-600 transition"><FaSquareXTwitter /></a>
							<a href="https://linkedin.com/company/stadigo" target="_blank" className="text-slate-500 hover:text-green-600 transition"><FaLinkedin /></a>
							
						</div>
					</div>
			</Container>
		</div>
	)
}