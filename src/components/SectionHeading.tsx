import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  note?: ReactNode
}

export function SectionHeading({ index, label, title, note }: SectionHeadingProps) {
  return (
    <Reveal>
      <header className="section-heading">
        <div className="section-heading__meta">
          <span className="eyebrow">
            <span className="eyebrow__index">{index}</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            {label}
          </span>
        </div>
        <h2 className="section-heading__title">{title}</h2>
        {note ? <p className="section-heading__note">{note}</p> : <span aria-hidden="true" />}
      </header>
    </Reveal>
  )
}
