
import {
	FaSitemap,
	FaHandHoldingMedical,
	FaHandsHoldingCircle,
	FaUserLock,
	FaUsersLine,
	FaRegThumbsUp,
} from "react-icons/fa6"

import stadigoPioneerImage from '@/images/stadigo-pioneer.png';
import Image from 'next/image'
import { PioneerRegister } from "@/components/modals/PioneerRegister";

export default function StadogpPioneerProgram(){
	return(
		<div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-slate-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">Stadigo Pioneer Program</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Shaping the Future of Stadium Excellence</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
								Stadigo is on a mission to transform the stadium and arena industry, making excellence the standard and the ultimate fan experience a guarantee. To achieve this, we require pioneers who understand the intricacies of the industry from the ground up.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden w-full lg:max-w-xl">
					<Image 
						src={stadigoPioneerImage}
						alt="Stadigo Pionner illustration"
						className="object-cover"
					/>
					<PioneerRegister />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
              <p>
								Join the Stadigo Pioneer Program today and be at the forefront of revolutionising the stadium industry! We invite experienced industry professionals like you to become the driving force behind Stadigo&apos;s journey towards excellence. Here&apos;s why you should be a part of this exclusive program:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                <li className="flex gap-x-3">
                  <FaSitemap className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900">Shape the Roadmap:</strong> As a Stadigo Pioneer, you&apos;ll have the unique opportunity to influence the development of our platform. Share your insights, industry pain points, and ideas to ensure Stadigo aligns perfectly with your needs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaHandsHoldingCircle className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900">Be the Change:</strong> Your experience is invaluable. By sharing your knowledge, you contribute to creating solutions for the challenges you&apos;ve faced throughout your career. Be a part of the transformation and watch your industry evolve.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaUserLock className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900">Exclusive Access:</strong> Stadigo Pioneers get early access to our latest features and updates, giving you a competitive advantage in delivering an exceptional fan experience.
                  </span>
                </li>

								<li className="flex gap-x-3">
                  <FaUsersLine className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900">Networking:</strong> Connect with other industry professionals who share your passion for excellence. Collaborate, exchange ideas, and build a strong network within the Stadigo community.
                  </span>
                </li>


								<li className="flex gap-x-3">
                  <FaRegThumbsUp className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900">Recognition:</strong> Your contributions won&apos;t go unnoticed. We&apos;ll acknowledge your expertise and dedication, giving you the recognition you deserve.
                  </span>	
                </li>


              </ul>
              <p className="mt-8">
								Join the Stadigo Pioneer Program now and help us create the stadium of the future. Together, we&apos;ll guarantee the ultimate fan experience and ensure excellence becomes the norm in sports stadiums. Let&apos;s revolutionise the industry together!
              </p>

							<div className="lg:hidden mt-8">
								<PioneerRegister />
							</div>
							
							
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">Your Time, Your Convenience – Stadigo Understands</h2>
              <p className="mt-6">
								Your time is valuable, and Stadigo respects that. Our Pioneer Program is designed to be flexible, adapting to your schedule and preferences. We&apos;ve streamlined the process to make the most of your time, ensuring that your valuable insights directly contribute to shaping the future of the stadium industry. Your contributions are acknowledged, and we&apos;re committed to making your participation efficient and meaningful. Join us in revolutionising the industry, at your convenience, and be part of something exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}