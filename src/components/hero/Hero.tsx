import Link from "next/link";
import { Container } from "../Container";
import { Subscribe } from "../modals/Subscribe";
import HeroCtaButtons from "./HeroCtaButtons";


export default function Hero(){
	return (
		// <Container className="pb-16 pt-20 text-center lg:pt-32 h-[calc(100vh-116px)] overflow-hidden">
		// 	<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-600 sm:text-7xl">
    //     Empowering exellence{' '}
    //     <span className="relative whitespace-nowrap text-green-600">
    //       <span className="relative">Stadium Perfomance</span>
    //     </span>{' '}
    //   </h1>
		// </Container>

		<div className="relative h-[calc(100vh-116px)] isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EEF6E2] to-[#BADC8B] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
							<span className="block text-lg sm:text-xl text-green-600 tracking-normal">Empowering Exellence in</span>
							Stadium Performance
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
							Unlocking competency assurance and fan safety for a world class experience. Give your team the platform they need for excellence, ensuring every game day surpasses expectations.
            </p>
            <HeroCtaButtons />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#BADC8B] to-[#EEF6E2] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>


	)
}