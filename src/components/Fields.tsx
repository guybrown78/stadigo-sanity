import clsx from 'clsx'
// import { ReactNode } from 'react'

// type Props = {
// 	id:string
// 	label?:string,
// 	color?:string,
// 	type?:string,
// 	rows?:number,

// 	name?:string,
// 	// variant?:string,
// 	// width?:string,
// 	// rounded?:string,

// 	// innerRef?:any

// 	className?:string,
// 	children:ReactNode,
// }

const formClasses =
  '  '
const labelBaseStyles:string = 'mb-3 block text-sm font-medium';

const baseStyles:string = 'block w-full appearance-none border px-3 py-2 sm:text-sm';

const roundedStyles:any = {
	small:
		'rounded-sm',
  normal:
    'rounded-md',
  full:
    'rounded-full',
}

const themeStyles:any = {
  // solid: {
    dark:
			'border-slate-200 bg-transparent text-slate-200 placeholder-slate-400 focus:border-green-500 focus:bg-transparent focus:outline-none focus:ring-green-500',
    light:
      'border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-green-500',
		green:
      '',
}
const labelThemeStyles:any = {
	dark:
		'text-slate-200',
	light:
		'text-slate-700',
	green:
		'',
}
function Label({ 
	id, 
	children,
	theme = 'light'
}:any) {
  return (
    <label
      htmlFor={id}
      className={
				clsx(
					labelBaseStyles,
					labelThemeStyles[theme]
				)
			}
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
	theme = 'light',
	rounded = 'normal',
  ...props
}:any) {
  return (
    <div className={className}>
      {label && <Label id={id} theme={theme}>{label}</Label>}
      <input 
				id={id} 
				type={type} 
				className={clsx(
					baseStyles, 
					roundedStyles[rounded], 
					themeStyles[theme],
				)} 
				{...props} 
			/>
    </div>
  )
}

export function SelectField({ 
	id, 
	label, 
	className = '', 
	theme = 'light',
	rounded = 'normal',
	...props 
}:any) {
  return (
    <div className={className}>
      {label && <Label id={id} theme={theme}>{label}</Label>}
      <select 
				id={id} 
				className={clsx(
					baseStyles, 
					roundedStyles[rounded], 
					themeStyles[theme], 
					'pr-8'
				)} 
				{...props} 
			/>
    </div>
  )
}


export function TextAreaField({ 
	id, 
	label, 
	className = '', 
	rows = 4, 
	theme = 'light',
	rounded = 'normal',
	...props
}:any){
	return (
		<div className={className}>
      {label && <Label id={id} theme={theme}>{label}</Label>}
      <textarea
        id={id} 
				rows={rows} 
				className={clsx(
					baseStyles, 
					roundedStyles[rounded], 
					themeStyles[theme],
				)}
				{...props} 
      />
    </div>
	)
}