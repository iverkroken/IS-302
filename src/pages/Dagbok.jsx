import { diaryEntries } from '../data/diaryEntries'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Dagbok.css'

export default function Dagbok() {
  const headRef = useReveal()

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Logg</p>
          <h1 className="page__title">Dagbok</h1>
        </div>

        <div className="diary-list">
          {diaryEntries.length === 0 && (
            <p className="diary-empty mono">Ingen innlegg tilgjengelig.</p>
          )}
          {diaryEntries.map(entry => (
            <DagbokEntry
              key={entry.id}
              entry={entry}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function DagbokEntry({ entry }) {
  const ref = useReveal({ y: 30 })
  return (
    <article className="diary-entry" ref={ref}>
      <div className="diary-entry__meta">
        <p className="mono diary-entry__week">{entry.week}</p>
        <p className="mono diary-entry__date">{entry.date}</p>
      </div>
      <div className="diary-entry__content">
        <h2 className="diary-entry__title">{entry.title}</h2>
        <p className="diary-entry__body">{entry.content}</p>
      </div>
    </article>
  )
}
