import { createElement } from 'react'

function Card({ children, className = '', hover = false, as = 'article', ...props }) {
  const cardClasses = [
    'rounded-lg border border-border bg-surface p-6 shadow-subtle',
    hover ? 'transition duration-200 hover:-translate-y-1 hover:shadow-card' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(as, { ...props, className: cardClasses }, children)
}

export default Card
