**Status**: Active Development | **Last Updated**: April 2026

# IS-302 — Praksisdokumentasjon

Nettside for dokumentasjon av praksisemnet IS-302 ved Universitetet i Agder.
Gruppen presenterer seg selv, oppgaven, fremdrift og refleksjoner gjennom en interaktiv SPA.

## 1. Demo

https://github.com/user-attachments/assets/0fac8732-d98b-4527-8358-e825c3c265c4

> [!IMPORTANT]
> <details>
> <summary style="font-size: 14px; font-weight: bold">Live-side</summary>
>
> [Gruppeside](https://iverkroken.github.io/IS-302/)
>
> </details>

---

## 2. Technical Stack

### Frontend
| Component        | Version  | Usage                                              |
|------------------|----------|----------------------------------------------------|
| React            | ^18.x    | UI-bibliotek med komponentbasert arkitektur        |
| Vite             | ^6.x     | Byggeverktøy og dev-server med HMR                 |
| React Router v6  | ^6.x     | Klientside routing mellom sider                    |
| GSAP 3           | ^3.x     | Scroll-trigget animasjoner og side-transitions     |
| TypeScript       | —        | Ikke i bruk, prosjektet bruker JSX                 |

### Datalagring
| Komponent      | Usage                                                    |
|----------------|----------------------------------------------------------|
| localStorage   | CRUD-lagring for Dagbok, Status 1/2 og Refleksjon        |

---

## 3. Sidestruktur

| Rute          | Komponent         | Innhold                                      |
|---------------|-------------------|----------------------------------------------|
| `/`           | `Home.jsx`        | Hero-seksjon med intro og call-to-action      |
| `/om-oss`     | `OmOss.jsx`       | Introduksjonsvideo og tidligere prosjekter    |
| `/oppgave`    | `Oppgave.jsx`     | Beskrivelse av praksisoppgaven                |
| `/team`       | `Team.jsx`        | Oversikt over gruppemedlemmer                 |
| `/status-1`   | `Status1.jsx`     | Redigerbar statusrapport 1 (localStorage)     |
| `/status-2`   | `Status2.jsx`     | Redigerbar statusrapport 2 (localStorage)     |
| `/dagbok`     | `Dagbok.jsx`      | Ukelogg med add/edit/delete (localStorage)    |
| `/refleksjon` | `Refleksjon.jsx`  | Redigerbare refleksjonsnotater (localStorage) |

---

## 4. Arkitektur

```
src/
├── components/
│   ├── Navbar.jsx          # Fast navigasjonsbar med glass-blur og mobil-drawer
│   ├── Footer.jsx          # Footer med nav-lenker og brand
│   ├── TeamCard.jsx        # Kort for hvert gruppemedlem
│   └── EditablePage.jsx    # Gjenbrukbar CRUD-komponent (Status, Refleksjon)
│
├── pages/
│   ├── Home.jsx            # Landingsside med GSAP-animert hero
│   ├── OmOss.jsx           # Om oss — video + prosjektkort
│   ├── Oppgave.jsx         # Praksisoppgave
│   ├── Team.jsx            # 5-kolonne grid med teamkort
│   ├── Dagbok.jsx          # Fullstendig CRUD-dagbok med localStorage
│   ├── Status1.jsx         # Bruker EditablePage, key: status1Entries
│   ├── Status2.jsx         # Bruker EditablePage, key: status2Entries
│   └── Refleksjon.jsx      # Bruker EditablePage, key: reflectionEntries
│
├── data/
│   ├── teamMembers.js      # Array med info om alle 5 gruppemedlemmer
│   ├── projects.js         # Array med tidligere prosjekter (Om oss-siden)
│   ├── navLinks.js         # Navigasjonslenker brukt i Navbar
│   └── diaryEntries.js     # Standard-oppføringer for Dagbok
│
├── hooks/
│   └── useReveal.js        # GSAP scroll-trigger hook for entrance-animasjoner
│
└── index.css               # Design tokens, reset og globale utilities
```

**Dataflyt (CRUD-sider):**
1. Bruker åpner Status/Dagbok/Refleksjon
2. `EditablePage` / `Dagbok` leser fra `localStorage` ved oppstart
3. Add/edit/delete oppdaterer React-state
4. `useEffect` synkroniserer state til `localStorage` automatisk
5. "Lagret"-flash bekrefter vellykket lagring

---

## 5. Designsystem

| Token          | Verdi       | Bruk                              |
|----------------|-------------|-----------------------------------|
| `--ink`        | `#0a0a0a`   | Sidebakgrunn                      |
| `--ash`        | `#1c1c1e`   | Kortbakgrunn                      |
| `--accent`     | `#e8ff47`   | Lime-aksent — knapper, aktive lenker |
| `--snow`       | `#f5f5f7`   | Overskrifter                      |
| `--silver`     | `#8e8e93`   | Sekundærtekst                     |
| `--font-heading` | Syne      | Alle overskrifter                 |
| `--font-body`  | DM Sans     | Brødtekst og UI                   |
| `--font-mono`  | JetBrains Mono | Tags, labels, kode              |

---

## 6. Oppsett

### Klon repository

```bash
git clone https://github.com/iverkroken/IS-302.git
cd IS-302
```

### Installer avhengigheter

```bash
npm install
```

### Start dev-server

```bash
npm run dev
```

Åpnes på f.eks:`http://localhost:5173` (eller neste ledige port).

### Bygg for produksjon

```bash
npm run build
```

---

## 7. Gruppemedlemmer

| Navn                  | LinkedIn |
|-----------------------|----------|
| Iver Kroken           | [linkedin.com/in/iver-kroken](https://www.linkedin.com/in/iver-kroken/) |
| Tobias Olsen Nodland  | [linkedin.com/in/tobias-olsen-nodland](https://www.linkedin.com/in/tobias-olsen-nodland-44b03a3a0/) |
| Sivert Svanes Sæstad  | [linkedin.com/in/sivert-svanes-sæstad](https://www.linkedin.com/in/sivert-svanes-s%C3%A6stad-615aa1262/) |
| Eira Bitnes Vikestøl  | [linkedin.com/in/eira-bitnes-vikestøl](https://www.linkedin.com/in/eira-bitnes-vikst%C3%B8l-185136355/) |
| Oda Elise Aanestad    | [linkedin.com/in/oda-elise-aanestad](https://www.linkedin.com/in/oda-elise-aanestad-857206351/) |

---

*Universitetet i Agder — IS-302 Praksis, 2026*