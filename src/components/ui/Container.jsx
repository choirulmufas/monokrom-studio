import { createElement } from 'react'

function Container({ children, as = 'div', className = '', ...props }) {
  return createElement(
    as,
    {
      ...props,
      className: ['container-custom', className].filter(Boolean).join(' '),
    },
    children,
  )
}

export default Container
