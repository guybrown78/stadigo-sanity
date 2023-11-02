
'use client'

import { FaEnvelopeOpenText, FaSpinner, FaCheck } from 'react-icons/fa6'
import { useEffect, useRef, useState} from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import Airtable from "airtable";
import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { ModalWrapper } from '@/components/modals/ModalWrapper'
import { formDate } from '@/libs/formDate';

type Props = {
	openModal:boolean,
	onCloseModal:() => void
}

export function PioneerModal({ openModal = false, onCloseModal}:Props){


  const cancelButtonRef = useRef(null)

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
		

		const date = await formDate()


		const fields = {
			FirstName: event.target.first_name.value,
			LastName: event.target.last_name.value,
			Email: event.target.email.value,
			Phone: event.target.phone.value,
			CompanyName: event.target.company_name.value,
			JobRole: event.target.job_role.value,
			SentDate: date,
		}

		const airtableToken:string = process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN as string;
		const airtableBase:string = process.env.NEXT_PUBLIC_AIRTABLE_BASE as string;
		const base = new Airtable({apiKey: airtableToken}).base(airtableBase);


		base('pioneers').create([{
			fields
		}], (err:any, records:any) => {
			if (err) {
				setIsError(true)
				setIsLoading(false);
				return;
			}
			records.forEach(() => {
				setIsSuccess(true);
				setIsLoading(false);
			});
		});

	}

	useEffect(() => {
		if(openModal){
			setIsSuccess(false);
			setIsError(false);
			setIsLoading(false);
		}
	}, [openModal])

	useEffect(() => {
		if(isSuccess){
			// on Success
			setTimeout(() => {
				onCloseModal();
			},750)
		}
	}, [isSuccess])


	return(
		<ModalWrapper openModal={openModal} onCloseModal={() => {
			!isLoading ? onCloseModal() : null
		}} initialFocusRef={cancelButtonRef}>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<div className="mt-3 text-center sm:mt-5">
						<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-slate-900">
							Register onto our Pioneer Program
						</Dialog.Title>
						<div className="mt-2">
							<p className="text-sm text-slate-500">
							Join the <span className='font-semibold'>Stadigo Pioneer Program</span> now and help us create the stadium of the future. Together, we&apos;ll guarantee the ultimate <span className='font-semibold'>fan experience</span> and ensure <span className='font-semibold'>excellence</span> becomes the norm in sports stadiums. Let&apos;s revolutionise the industry together!
							</p>
						</div>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 text-left">

							<TextField
								type="text"
								label="First name"
								id="first_name"
								name="first_name"
								autoComplete="given-name"
								required
							/>	
							<TextField
								type="text"
								label="Last name"
								name="last_name"
								id="last_name"
								autoComplete="family-name"
								required
							/>	
							<TextField
								type="email"
								label="Email address"
								id="email"
								name="email"
								autoComplete="email"
								required
								className="col-span-full"
							/>

							<TextField
								type="tel"
								label="Phone number"
								name="phone"
								id="phone"
								autoComplete="tel"
								required
								className="col-span-full"
							/>

							<TextField
								type="text"
								label="Company/Stadium Name"
								id="company_name"
								name="company_name"
								required
							/>	
							<TextField
								type="text"
								label="Job Role"
								name="job_role"
								id="job_role"
								required
							/>	
						</div>
		
						<div className="mt-4">
							<p className="text-xs text-slate-500">
							Don&apos;t worry, we will never share your details with anyone else. You can read our <Link href="/policies/privacy-policy" onClick={onCloseModal} className='text-green-600'>Privacy Policy</Link> for all the details. You can leave the pioneer program anytime, click <span className="italic font-semibold">&quot;Unscubscribe&quot;</span> in any our pioneering program comunications
							</p>
						</div>

					</div>
				</div>

				<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">

					<Button
						type="submit"
						color='green'
						width='full'
						rounded='normal'
						className="sm:col-start-2"
						disabled={isLoading || isSuccess}
					>
						{
								!isLoading && !isSuccess &&(
									<span className='flex items-center'>
										Register
									</span>
								)
							}
							{
								isLoading && !isSuccess && (
									<span className='flex items-center'>
										Registering<span aria-hidden="true" className="ml-2"><FaSpinner className="w-5 h-5 animate-spin"/></span>
									</span>
								)
							}
							{
								!isLoading && isSuccess && (
									<span className='flex items-center'>
										Registered<span aria-hidden="true" className="ml-2"><FaCheck className="w-5 h-5"/></span>
									</span>
								)
							}
					</Button>

					<Button
						type="button"
						variant='outline'
						width='full'
						rounded='normal'
						color='slate'
						onClick={onCloseModal}
						disabled={isLoading}
						className='mt-3 sm:col-start-1 sm:mt-0'
						innerRef={cancelButtonRef}
					>
						Cancel
					</Button>

					<div className={clsx(isError ? 'block' : 'hidden',"col-span-2 mt-4")}>
						<p className='text-center text-slate-700 text-sm '><span className='font-semibold text-red-700'>Oh dear!</span> - Something went wrong when trying to register.<br />Please try again shortly.</p>
					</div>

				</div>
			</form>
		</ModalWrapper>
	)
}