
import FooterNavLink from "@/components/footer/FooterNavLink";

export default function FooterNav() {
	return (
		<div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

				{/* Solutions */}
				<div>
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
					<ul role="list" className="mt-6 space-y-4">
						
						<li>
							<FooterNavLink 
								title="Performance Validation" 
								anchor="../#performance-validation" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Skill Enhancement" 
								anchor="../#skill-enhancement" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Stadium Digital Integration" 
								anchor="../#digital-integration" 
							/>
						</li>
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Services</h3>
					<ul role="list" className="mt-6 space-y-4">
						
						<li>
							<FooterNavLink 
								title="Competency Assurance" 
								anchor="../#competency-assurance" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Digital Transformation" 
								anchor="../#digital-transformation" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Fan Experience Enhancement" 
								anchor="../#fan-experience-enhancement" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Safety and Efficieny" 
								anchor="../#safetyand-efficieny" 
							/>
						</li>
					</ul>

				</div>

				{/* About */}
				<div>
					<h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
					<ul role="list" className="mt-6 space-y-4">
										
							<li>
								<FooterNavLink 
									title="Company Details" 
									anchor="../#company-details" 
								/>
							</li>
							<li>
								<FooterNavLink 
									title="Vision Statement" 
									anchor="../#vision-statement" 
								/>
							</li>

							<li>
								<FooterNavLink 
									title="Benefits" 
									anchor="../#benefits" 
								/>
							</li>

							<li>
								<FooterNavLink 
									title="Stadigo Insights" 
									anchor="/insights" 
								/>
							</li>
					
					</ul>
				</div>

				{/* Contact */}
				{/* className="col-span-2 md:col-span-1" */}
				<div>
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
					<ul role="list" className="mt-6 space-y-4">
						
						<li>
							<FooterNavLink 
								title="Frequently Asked Questions" 
								anchor="../#faqs" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Newsletter Subscription" 
								anchor="../#newsletter-subscription" 
							/>
						</li>
						<li>
							<FooterNavLink 
								title="Pioneer Program" 
								anchor="../#pioneer-program" 
							/>
						</li>
						<li>
							<a href="mailto:info@stadigo.com" className="text-sm leading-4 text-slate-600 hover:text-slate-900 hover:underline">
								info@stadigo.com
							</a>
						</li>

					</ul>
				</div>



			</div>
		</div>
	)
}