const variantClasses = {
  default: 'border-border bg-surface text-text-secondary',
  blue: 'border-primary bg-background text-primary',
  red: 'border-accent bg-surface text-accent',
  dark: 'border-navy bg-navy text-white',
}

function Badge({ children, variant = 'default', className = '', ...props }) {
  const badgeClasses = [
    'inline-flex items-center rounded-md border px-3 py-1.5 text-body-small font-medium',
    variantClasses[variant] ?? variantClasses.default,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span {...props} className={badgeClasses}>
      {children}
    </span>
  )
}

export default Badge
