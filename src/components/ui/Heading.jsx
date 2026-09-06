import { createElement } from 'react'

const alignmentClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
}

function Heading({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
  className = '',
}) {
  const headingClasses = [
    'flex max-w-3xl flex-col gap-4',
    alignmentClasses[align] ?? alignmentClasses.left,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={headingClasses}>
      {eyebrow ? (
        <p className="type-caption uppercase tracking-normal text-primary">{eyebrow}</p>
      ) : null}
      {createElement(as, { className: 'type-h2 text-navy' }, title)}
      {description ? (
        <p className="type-body text-text-secondary">{description}</p>
      ) : null}
    </div>
  )
}

export default Heading
