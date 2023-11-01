
'use client'

import { FaEnvelopeOpenText, FaSpinner, FaCheck } from 'react-icons/fa6'
import { useEffect, useRef, useState} from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { ModalWrapper } from '@/components/modals/ModalWrapper'
import { formDate } from '@/libs/formDate';

type Props = {
	openModal:boolean,
	onCloseModal:() => void
}

export function SubscribeModal({ openModal = false, onCloseModal}:Props){


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

		console.log("date", date)

		const fields = {
			FirstName: event.target.first_name.value,
			Email: event.target.email.value,
			SentDate: date,
		}

		console.log("fields", fields)

		setTimeout(() => {
			// 
			setIsError(true)
			setIsLoading(false);
			// 
		},1500)

	}

	useEffect(() => {
		if(openModal){
			console.log("open modal")
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
			<form
				onSubmit={(e) => handleSubmit(e)}
			>
				<div>
					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
						<FaEnvelopeOpenText className="h-6 w-6 text-green-600" aria-hidden="true" />
					</div>
					<div className="mt-3 text-center sm:mt-5">
						<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-slate-900">
							Subscribe to our Newsletter
						</Dialog.Title>
						<div className="mt-2">
							<p className="text-sm text-slate-500">
							Join the Stadigo Newsletter and gain the edge in stadium excellence. Get <span className='font-semibold'>exclusive insights</span>, <span className='font-semibold'>expert tips</span>, <span className='font-semibold'>early access</span> to updates, and <span className='font-semibold'>connect</span> with a community of stadium professionals. Elevate your Stadium&apos;s performance today – <span className='font-semibold'>subscribe now</span>.
							</p>
						</div>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 text-left">

							<TextField
								className="col-span-full"
								label="Your first name"
								id="first_name"
								name="first_name"
								type="text"
								autoComplete="given-name"
								required
							/>	

							<TextField
								className="col-span-full"
								label="Email address"
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>

						</div>
		
						<div className="mt-4">
							<p className="text-xs text-slate-500">
							Don&apos;t worry, we will never share your details with anyone else. You can read our <Link href="/policies/privacy-policy" onClick={onCloseModal} className='text-green-600'>Privacy Policy</Link> for all the details. To stop recieving our newsletters, click <span className="italic font-semibold">&quot;Unscubscribe&quot;</span> in any our newsletters
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
										Subscribe
									</span>
								)
							}
							{
								isLoading && !isSuccess && (
									<span className='flex items-center'>
										Subscribing<span aria-hidden="true" className="ml-2"><FaSpinner className="w-5 h-5 animate-spin"/></span>
									</span>
								)
							}
							{
								!isLoading && isSuccess && (
									<span className='flex items-center'>
										Subscribed<span aria-hidden="true" className="ml-2"><FaCheck className="w-5 h-5"/></span>
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
						<p className='text-center text-slate-700 text-sm '><span className='font-semibold text-red-700'>Oh dear!</span> - Something went wrong when trying to subscribe.<br />Please try again shortly.</p>
					</div>

				</div>
			</form>
		</ModalWrapper>
	)
}