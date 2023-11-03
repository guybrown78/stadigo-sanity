
'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/libs/storageHelper';
import { useState, useEffect } from 'react';
import { Button } from './Button';
import clsx from 'clsx'

export default function CookieBanner(){

	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect (() => {
			const storedCookieConsent = getLocalStorage("cookie_consent", null)
			setCookieConsent(storedCookieConsent)
	}, [setCookieConsent])


	useEffect(() => {
			const newValue = cookieConsent ? 'granted' : 'denied'
			window.gtag("consent", 'update', {
					'analytics_storage': newValue
			});
			setLocalStorage("cookie_consent", cookieConsent)

	}, [cookieConsent]);

	return (
		<>

			<div className={clsx(
				cookieConsent != null ? "hidden" : "block",
				"pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50"
			)}>
				<div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-900/10">
					<p className="text-base leading-6 text-slate-900">
						We use cookies to enhance your browsing experience and analyse our traffic. By clicking <span className='font-semibold'>Accept All</span>, you consent to our use of cookies. See our{' '}
						<Link href="/policies/cookie-policy" className="font-semibold text-green-600">cookie policy</Link> for more information on cookies.
					</p>
					<div className="mt-4 flex items-center gap-x-5">
						<Button color='green' onClick={() => setCookieConsent(true)}>Accept All</Button>
						<Button variant='outline' color='slate' onClick={() => setCookieConsent(false)}>Reject All</Button>
					</div>
				</div>
			</div>	

		</>
			
	)}


	