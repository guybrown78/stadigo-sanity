import { Container } from "./Container";


export default function Hero(){
	return (
		<Container className="pb-16 pt-20 text-center lg:pt-32 h-[calc(100vh-116px)] overflow-hidden">
			<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-600 sm:text-7xl">
        Empowering exellence{' '}
        <span className="relative whitespace-nowrap text-green-600">
          <span className="relative">Stadium Perfomance</span>
        </span>{' '}
      </h1>
		</Container>
	)
}