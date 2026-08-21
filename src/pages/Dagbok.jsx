import { useState, useEffect } from 'react'
import { diaryEntries as defaultEntries } from '../data/diaryEntries'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Dagbok.css'

const STORAGE_KEY = 'is302-dagbok'

function loadEntries() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return defaultEntries
}

export default function Dagbok() {
  const headRef = useReveal()
  const [entries, setEntries]     = useState(loadEntries)
  const [showForm, setShowForm]   = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [saved, setSaved]         = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    setSaved(true)
    const t = setTimeout(() => setSaved(false), 1500)
    return () => clearTimeout(t)
  }, [entries])

  function addEntry(data) {
    setEntries(prev => [{ ...data, id: Date.now() }, ...prev])
    setShowForm(false)
  }

  function updateEntry(id, data) {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, ...data } : e))
    setEditingId(null)
  }

  function deleteEntry(id) {
    setEntries(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Logg</p>
          <h1 className="page__title">Dagbok</h1>
        </div>

        <div className="diary-toolbar">
          {!showForm && (
            <button className="diary-btn diary-btn--add" onClick={() => setShowForm(true)}>
              + Nytt innlegg
            </button>
          )}
          {saved && <span className="diary-saved mono">Lagret</span>}
        </div>

        {showForm && (
          <EntryForm
            onSubmit={addEntry}
            onCancel={() => setShowForm(false)}
            submitLabel="Legg til"
          />
        )}

        <div className="diary-list">
          {entries.length === 0 && (
            <p className="diary-empty mono">Ingen innlegg ennå. Trykk «Nytt innlegg» for å starte.</p>
          )}
          {entries.map(entry =>
            editingId === entry.id
              ? (
                <EntryForm
                  key={entry.id}
                  initial={entry}
                  onSubmit={data => updateEntry(entry.id, data)}
                  onCancel={() => setEditingId(null)}
                  submitLabel="Lagre"
                />
              )
              : (
                <DagbokEntry
                  key={entry.id}
                  entry={entry}
                  onEdit={() => setEditingId(entry.id)}
                  onDelete={() => deleteEntry(entry.id)}
                />
              )
          )}
        </div>
      </div>
    </div>
  )
}

function DagbokEntry({ entry, onEdit, onDelete }) {
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
      <div className="diary-entry__actions">
        <button className="diary-btn diary-btn--edit" onClick={onEdit}>Rediger</button>
        <button className="diary-btn diary-btn--delete" onClick={onDelete}>Slett</button>
      </div>
    </article>
  )
}

function EntryForm({ initial = {}, onSubmit, onCancel, submitLabel }) {
  const [form, setForm] = useState({
    week:    initial.week    ?? '',
    date:    initial.date    ?? '',
    title:   initial.title   ?? '',
    content: initial.content ?? '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) return
    onSubmit(form)
  }

  return (
    <form className="diary-form" onSubmit={handleSubmit}>
      <div className="diary-form__row">
        <input
          className="diary-form__input"
          name="week"
          placeholder="Uke (f.eks. Uke 34)"
          value={form.week}
          onChange={handleChange}
        />
        <input
          className="diary-form__input"
          name="date"
          placeholder="Periode (f.eks. August 2026)"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <input
        className="diary-form__input"
        name="title"
        placeholder="Tittel"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="diary-form__textarea"
        name="content"
        placeholder="Skriv innholdet her..."
        value={form.content}
        onChange={handleChange}
        required
        rows={6}
      />
      <div className="diary-form__actions">
        <button type="submit" className="diary-btn diary-btn--submit">{submitLabel}</button>
        <button type="button" className="diary-btn diary-btn--cancel" onClick={onCancel}>Avbryt</button>
      </div>
    </form>
  )
}
