import './BioHeader.css'
import { LinkedInIcon, GitHubIcon } from './TeamCard'
import { useReveal } from '../hooks/useReveal'


export default function BioHeader({ member }) {
  const ref = useReveal()

  return (
    <div className="bio-header" ref={ref}>
      <h1 className="bio-header__title">{member.name}</h1>

      <div className="bio-header__content">
        <div className="bio-header__image-wrapper">
          <img src={member.image} alt={member.name} className="bio-header__image" />
        </div>

        <div className="bio-header__info">
          <div className="bio-header__content-top">
            <p className="bio-header__age">{member.age}</p>
            <p className="bio-header__subtitle mono">{member.subtitle}</p>
              <hr className={"bio-header-divider"}/>
            <p className="bio-header__bio">{member.bio}</p>
          </div>
          <div className="bio-header__links">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bio-header__link bio-header__link--linkedin"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bio-header__link bio-header__link--github"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
      </div>
        <hr className="bio-header-divider" />
    </div>

  )
}

