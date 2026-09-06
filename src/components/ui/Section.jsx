import { createElement } from 'react'

const backgroundClasses = {
  white: 'bg-white text-text-primary',
  light: 'bg-background text-text-primary',
  navy: 'bg-navy text-white',
}

function Section({
  children,
  className = '',
  id,
  background = 'white',
  as = 'section',
  ...props
}) {
  const sectionClasses = [
    'py-16 tablet:py-20 laptop:py-24',
    backgroundClasses[background] ?? backgroundClasses.white,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(
    as,
    { ...props, id, className: sectionClasses },
    children,
  )
}

export default Section
