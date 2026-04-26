import React from 'react'
import './TeamCard.css'

export const LinkedInIcon = () => (
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

export const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.79c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
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
  const { name, subtitle, age, bio, hobbies = [], image, linkedin, github } = member

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

          <div className="team-card__links">
              {linkedin && (
                  <a
                      href={linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="team-card__link team-card__link--linkedin"
                  >
                      <LinkedInIcon />
                      LinkedIn
                  </a>
              )}

              {github && (
                  <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="team-card__link team-card__link--github"
                  >
                      <GitHubIcon />
                      GitHub
                  </a>
              )}
          </div>
      </div>
    </article>
  )
}