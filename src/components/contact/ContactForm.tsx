
'use client'

import { FaSpinner, FaCheck } from 'react-icons/fa6'
import { Button } from '@/components/Button'
import { TextAreaField, TextField } from '@/components/Fields'
import { formDate } from '@/libs/formDate';
import { useState } from "react";


export default function ContactForm() {

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	// Handles the submit event on form submit.
  const handleSubmit = async (event:any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

		setIsSuccess(false)
		setIsError(false)
		setIsLoading(true);

		// const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

		const date = await formDate()

		console.log("date", date)

		const fields = {
			FirstName: event.target.first_name.value,
			LastName: event.target.last_name.value,
			Email: event.target.email.value,
			Phone: event.target.phone.value,
			Message: event.target.message.value,
			SentDate: date,
		}

		console.log("fields", fields)

		setTimeout(() => {
			setIsError(true)
			setIsLoading(false);
		},1500)
		// base('WebsiteContactForm').create([
		// 	{
		// 		fields
		// 	},

		// ], function(err, records) {
		// 	if (err) {
		// 		console.error(err);
		// 		setIsError(true)
		// 		// setIsLoading(false);

		// 		return;
		// 	}
		// 	records.forEach(function (record) {
		// 		console.log(record.getId());
		// 		setIsSuccess(true);
		// 		setIsLoading(false);
		// 	});
		// });
		
  }


	return(
		<form 
			className="px-6 pb-20 pt-20 sm:pb-32 lg:px-8 lg:py-48"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="mx-auto max-w-xl lg:max-w-lg lg:ml-0">
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>

							<TextField 
								type="text"
								label="First name"
								name="first_name"
								id="first_name"
								autoComplete="given-name"
								theme="dark"
								required
							/>

					</div>
					<div>
						<TextField 
							type="text"
							label="Last name"
							name="last_name"
							id="last_name"
							autoComplete="family-name"
							theme="dark"
							required
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
							required
						/>

					</div>
					<div className="sm:col-span-2">
						<TextField 
							type="tel"
							label="Phone number"
							name="phone"
							id="phone"
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
							required
						/>

					</div>
				</div>
				<div className="mt-8 flex justify-end">
					<Button
						type="submit"
						color="green"
						rounded="normal"
					>
						
						{
								!isLoading && !isSuccess &&(
									<span className='flex items-center'>
										Send message
									</span>
									// <span aria-hidden="true">&rarr;</span>
								)
							}
							{
								isLoading && !isSuccess && (
									<span className='flex items-center'>
										Sending message<span aria-hidden="true" className="ml-2"><FaSpinner className="w-5 h-5 animate-spin"/></span>
									</span>
								)
							}
							{
								!isLoading && isSuccess && (
									<span className='flex items-center'>
										Message Sent<span aria-hidden="true" className="ml-2"><FaCheck className="w-5 h-5"/></span>
									</span>
								)
							}
					</Button>

				</div>
				{
					!isSuccess && !isError && (
						<p className='text-right text-sm mt-4'>&nbsp;</p>
					)
				}
				{
					isSuccess && (
						<p className='text-right text-slate-300 text-sm mt-4'><span className='font-semibold'>Thank you</span> - We have received your message and we&apos;ll be in touch shortly.</p>
					)
				}
				{
					isError && (
						<p className='text-right text-slate-300 text-sm mt-4'><span className='font-semibold'>Oh dear!</span> - Something went wrong when trying to send your message.<br />Please try again shortly.</p>
					)
				}
			</div>
		</form>

	)
}