
import { FaLocationArrow, FaEnvelope } from 'react-icons/fa6'
import { Button } from './Button'
import { TextAreaField, TextField } from './Fields'


export default function Contact() {
  return (
		<section
			id="contact"
      aria-label="Get in Touch with Stadigo"
			className="relative isolate bg-emerald-950"
    >
			
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">

						<div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 lg:mr-0 lg:max-w-lg">
							<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
								<div
									className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
									aria-hidden="true"
								>
									<div
										className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#BADC8B] to-[#8DC63F] opacity-20"
										style={{
											clipPath:
												'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
										}}
									/>
								</div>
							</div>

							{/* <Container> */}
								<h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
								<p className="mt-6 text-lg leading-8 text-slate-300">
									Ready to revolutionise stadium excellence with Stadigo? We&apos;re here to assist you every step of the way. Let&apos;s start the conversation and make excellence the standard in your stadium.
								</p>
								<dl className="mt-10 space-y-4 text-base leading-7 text-slate-300">
									<div className="flex gap-x-4">
										<dt className="flex-none">
											<span className="sr-only">Address</span>
											<FaLocationArrow className="h-7 w-6 text-slate-200" aria-hidden="true" />
										</dt>
										<dd>
											Teesside,
											<br />
											United Kingdom
										</dd>
									</div>

									<div className="flex gap-x-4">
										<dt className="flex-none">
											<span className="sr-only">Email</span>
											<FaEnvelope className="h-7 w-6 text-slate-200" aria-hidden="true" />
										</dt>
										<dd>
											<a className="hover:text-white" href="mailto:info@stadigo.com">
												info@stadigo.com
											</a>
										</dd>
									</div>
								</dl>
							{/* </Container> */}
						</div>
					</div>
					{/* <Container> */}
					<form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
						<div className="mx-auto max-w-xl lg:max-w-lg lg:ml-0">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>

										<TextField 
											type="text"
											label="First name"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											theme="dark"
										/>

								</div>
								<div>
									<TextField 
										type="text"
										label="Last name"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										theme="dark"
									/>

								</div>
								<div className="sm:col-span-2">
									<TextField 
										type="email"
										label="Email"
										name="email"
										id="email"
										autoComplete="email"
										theme="dark"
									/>

								</div>
								<div className="sm:col-span-2">
									<TextField 
										type="tel"
										label="Phone number"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										theme="dark"
									/>

								</div>
								<div className="sm:col-span-2">
									<TextAreaField 
										name="message"
										label="Message"
										id="message"
										rows={4}
										theme="dark"
									/>

								</div>
							</div>
							<div className="mt-8 flex justify-end">
								<Button
									type="submit"
									color="green"
									rounded="normal"
								>
									Send message
								</Button>

							</div>
						</div>
					</form>
					{/* </Container> */}
				</div>
			{/* </Container> */}
			</section>
  
  )
}
