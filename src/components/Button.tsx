import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode, MouseEventHandler } from 'react'

// type Props = {
// 	color?:string,
// 	variant?:string,
// 	href?:string,
// 	className?:string,
// 	children:ReactNode,
// 	width?:string,
// 	rounded?:string,
// 	onClick?: MouseEventHandler<HTMLElement>,
// 	innerRef?:any
// }
const baseStyles:any = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 transition',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}
const widthStyles:any = {
  normal:
    '',
  full:
    'w-full',
}
const roundedStyles:any = {
	small:
		'rounded-sm',
  normal:
    'rounded-md',
  full:
    'rounded-full',
}
const variantStyles:any = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    white:
      'bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-slate active:text-slate-700 focus-visible:outline-white',
		green:
      'bg-green-600 text-white hover:bg-green-500 active:bg-green-500 active:text-slate-50 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-400 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
		green:
      'ring-green-600 text-green-600 hover:ring-green-400 active:ring-green-400 active:text-green-400 focus-visible:outline-white hover:bg-green-50/50',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
	width = 'normal',
	rounded = 'full',
  className,
  href,
	innerRef = null,
  ...props
}:any) {
  className = clsx(
    baseStyles[variant],
		widthStyles[width],
		roundedStyles[rounded],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} ref={innerRef} {...props} />
  ) : (
    <button className={className} ref={innerRef} {...props} />
  )
}
