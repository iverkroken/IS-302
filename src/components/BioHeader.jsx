import './BioHeader.css'

export default function BioHeader({ member }) {
  return (
    <div className="bio-header">
      <img src={member.image} alt={member.name} className="bio-header__image" />
      <div className="bio-header__info">
        <h1 className="bio-header__name">{member.name}</h1>
        <p className="bio-header__age">{member.age}</p>
        <p className="bio-header__subtitle">{member.subtitle}</p>
      </div>
    </div>
  )
}

