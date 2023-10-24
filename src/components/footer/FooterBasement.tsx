
import { Container } from "@/components/Container";
import { 
	FaXTwitter,
	FaLinkedinIn,
} from "react-icons/fa6"

export default function FooterBasement() {
	return (
		<div className="mt-4 border-t border-slate-200/50 bg-emerald-950" >
			<Container>
				<div className="flex items-center justify-between py-10">
					
						<p className="text-xs text-slate-300">
							Copyright &copy; {new Date().getFullYear()} Stadigo. All&nbsp;rights&nbsp;reserved.
						</p>

						<div className="flex items-center justify-end space-x-4 text-xl">
							<a href="https://twitter.com/_stadigo_" target="_blank" className="text-slate-300 hover:text-green-600 transition"><FaXTwitter /></a>
							<a href="https://linkedin.com/company/stadigo" target="_blank" className="text-slate-300 hover:text-green-600 transition"><FaLinkedinIn /></a>
							
						</div>
					</div>
			</Container>
		</div>
	)
}