import { forwardRef } from 'react'

/**
 * Button — primary UI action component.
 * Supports "primary", "secondary", and "ghost" variants.
 */
const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary:
      'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-sm hover:shadow-md',
    secondary:
      'bg-white text-navy-900 ring-1 ring-navy-200 hover:bg-navy-50 hover:ring-navy-300 active:bg-navy-100',
    ghost:
      'text-navy-600 hover:text-navy-900 hover:bg-navy-50 active:bg-navy-100',
  }

  const sizes = {
    sm: 'px-3.5 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  }

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
