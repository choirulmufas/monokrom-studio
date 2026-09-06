const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  outline:
    'border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
  ghost: 'bg-transparent text-navy hover:bg-background',
}

const sizeClasses = {
  sm: 'min-h-9 px-3 text-body-small',
  md: 'min-h-11 px-4 text-body',
  lg: 'min-h-[52px] px-6 text-body-large',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const classes = [
    'btn',
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        {...props}
        href={disabled ? undefined : href}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
