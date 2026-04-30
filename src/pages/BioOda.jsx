import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from "../components/BioCategoryWrapper.jsx";
import BioPageWrapper from '../components/BioPageWrapper'
import BioImageSection from "../components/BioImageSection.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";

export default function BioOda() {
    const navigate = useNavigate()
    const member = teamMembers.find(m => m.id === 5)

    const odaImages = [
        `${import.meta.env.BASE_URL}images/oda/IMG_0082.jpg`,
        `${import.meta.env.BASE_URL}images/oda/IMG_0868 (2).jpg`,
        `${import.meta.env.BASE_URL}images/oda/IMG_1396 (1).jpg`,
    ]

    if (!member) {
        return <div>Teammedlem ikke funnet</div>
    }

    return (
        <div className="page">
            <div className="container">
                <BioPageWrapper>
                    <button className="btn-back" onClick={() => navigate('/team')}>
                        ← Tilbake til teamet
                    </button>

                    <BioHeader member={member} />

                    <div className="bio-content">
                        <BioCategoryWrapper>
                            <BioImageSection
                                title="Om meg"
                                image={`${import.meta.env.BASE_URL}images/oda/IMG_0082.jpg`}
                            >
                                <p>
                                    Jeg er på utveksling i Sør-Korea i mitt fjerde semester, hvor jeg får oppleve både et nytt skolesystem og en annerledes kultur.
                                    Oppholdet har gitt meg muligheten til å smake ny mat, reise rundt i landet og utfordre meg selv i nye omgivelser.
                                    Å reise alene har gjort meg mer selvstendig og trygg på egne valg.
                                </p>

                                <p>
                                    Jeg er en aktiv person med interesse for trening, særlig styrketrening og løping.
                                    Jeg motiveres av å sette meg mål og jobbe målrettet mot dem.
                                    I tillegg liker jeg å spille golf med venner og familie.
                                    Jeg er også glad i å lage og prøve ny mat.
                                </p>

                                <p>
                                    Samtidig er jeg opptatt av å ta vare på menneskene rundt meg – venner og familie er en viktig del av livet mitt.
                                    Jeg er eventyrlysten og trives med å utforske nye steder.
                                    Utvekslingsoppholdet i Sør-Korea har derfor vært både lærerikt og utviklende.
                                </p>
                            </BioImageSection>

                            <BioImageSection title="Bilder">
                                <p>
                                    Litt bilder fra oppholdet i Korea
                                </p>
                                <ImageCarousel images={odaImages} title="Oda" />
                            </BioImageSection>
                            <br />
                        </BioCategoryWrapper>
                    </div>
                </BioPageWrapper>
            </div>
        </div>
    )
}