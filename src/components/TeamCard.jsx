import React from 'react'
import './TeamCard.css'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM6.25 10h2.5v8h-2.5v-8zm4.25 0H13v1.1c.42-.73 1.32-1.35 2.75-1.35 2.62 0 3.25 1.63 3.25 3.75V18H16.5v-4c0-1-.02-2.3-1.5-2.3s-1.75 1.16-1.75 2.22V18H10.5V10z"
      fill="white"
    />
  </svg>
)

function InterestsList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="interests-list">
      <p className="interests-list__label mono">INTERESSER</p>
      <ul className="interests-list__items">
        {items.map(item => (
          <li key={item} className="interests-list__item mono">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function TeamCard({ member }) {
  const { name, subtitle, age, bio, hobbies = [], image, linkedin } = member

  return (
    <article className="team-card">
      <div className="team-card__img-wrap">
        {image
          ? <img src={image} alt={name} className="team-card__img" />
          : <div className="team-card__img-placeholder" aria-hidden="true" />
        }
      </div>

      <div className="team-card__body">
        <div className="team-card__content">
          <h3 className="team-card__name">{name}</h3>
          {subtitle && <p className="team-card__subtitle mono">{subtitle.split('\n').map((line, index, arr) => (
            <React.Fragment key={index}>
              {line}
              {index < arr.length - 1 && <br />}
            </React.Fragment>
          ))}</p>}
          {age      && <p className="team-card__age">{age}</p>}
          {bio      && <p className="team-card__bio">{bio}</p>}
          <InterestsList items={hobbies} />
        </div>

        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer" className="team-card__linkedin">
            <LinkedInIcon />
            LinkedIn
          </a>
        )}
      </div>
    </article>
  )
}
