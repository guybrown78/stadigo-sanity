import { Dialog } from '@headlessui/react'
import { Button } from '@/components/Button'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import Link from 'next/link'
import { TextField } from '../Fields'
import { ModalWrapper } from './ModalWrapper'
import { useRef } from 'react'

type Props = {
	openModal:boolean,
	onCloseModal:() => void
}

export function PioneerModal({ openModal = false, onCloseModal}:Props){


  const cancelButtonRef = useRef(null)

	// Handles the submit event on form submit.
  const handleSubmit = async (event:any) => {
		// Stop the form from submitting and refreshing the page.
    event.preventDefault()

		// console.log("handleSubmit")
	}
	return(
		<ModalWrapper openModal={openModal} onCloseModal={onCloseModal} initialFocusRef={cancelButtonRef}>
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
								id="firstName"
								name="firstName"
								autoComplete="given-name"
								required
							/>	
							<TextField
								type="text"
								label="Family name"
								name="lastName"
								id="lastName"
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
								name="phoneNumber"
								id="phoneNumber"
								autoComplete="tel"
								required
								className="col-span-full"
							/>

							<TextField
								type="text"
								label="Company/Stadium Name"
								id="companyName"
								name="companyName"
								required
							/>	
							<TextField
								type="text"
								label="Job Role"
								name="jobRole"
								id="jobRole"
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
					>
						Register
					</Button>

					<Button
						type="button"
						variant='outline'
						width='full'
						rounded='normal'
						color='slate'
						onClick={onCloseModal}
						className='mt-3 sm:col-start-1 sm:mt-0'
						innerRef={cancelButtonRef}
					>
						Cancel
					</Button>
				</div>
			</form>
		</ModalWrapper>
	)
}