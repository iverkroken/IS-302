**Status**: Active Development | **Last Updated**: August 2026

# IS-310 - Prosjektgjennomføring

Nettside for emnet IS-310 ved Universitetet i Agder.
Gruppen presenterer seg selv.

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

## 3. Sidestruktur

| Rute          | Komponent         | Innhold                                      |
|---------------|-------------------|----------------------------------------------|
| `/`           | `Home.jsx`        | Hero-seksjon med intro og call-to-action      |
| `/om-oss`     | `OmOss.jsx`       | Introduksjonsvideo og tidligere prosjekter    |
| `/team`       | `Team.jsx`        | Oversikt over gruppemedlemmer                 |

---

## 4. Arkitektur

```
src/
├── components/
│   ├── Navbar.jsx          # Fast navigasjonsbar med glass-blur og mobil-drawer
│   ├── Footer.jsx          # Footer med nav-lenker og brand
│   └── TeamCard.jsx        # Kort for hvert gruppemedlem
│
├── pages/
│   ├── Home.jsx            # Landingsside med GSAP-animert hero
│   ├── OmOss.jsx           # Om oss — video + prosjektkort
│   └── Team.jsx            # 5-kolonne grid med teamkort
│
├── data/
│   ├── teamMembers.js      # Array med info om alle 5 gruppemedlemmer
│   ├── projects.js         # Array med tidligere prosjekter (Om oss-siden)
│   └── navLinks.js         # Navigasjonslenker brukt i Navbar
│
├── hooks/
│   └── useReveal.js        # GSAP scroll-trigger hook for entrance-animasjoner
│
└── index.css               # Design tokens, reset og globale utilities
```

**Dataflyt (statisk nettside):**
1. Bruker navigerer mellom de aktive sidene i appen
2. React Router rendrer tilsvarende komponenter
3. Innholdet hentes fra statiske datafiler eller JSX-komponenter
4. UI-komponenter renderes uten server-side lagring

---

## 5. Designsystem

| Token            | Verdi          | Bruk                                 |
|------------------|----------------|--------------------------------------|
| `--ink`          | `#0a0a0a`      | Sidebakgrunn                         |
| `--ash`          | `#1c1c1e`      | Kortbakgrunn                         |
| `--accent`       | `#e8ff47`      | Lime-aksent — knapper, aktive lenker |
| `--snow`         | `#f5f5f7`      | Overskrifter                         |
| `--silver`       | `#8e8e93`      | Sekundærtekst                        |
| `--font-heading` | Syne           | Alle overskrifter                    |
| `--font-body`    | DM Sans        | Brødtekst og UI                      |
| `--font-mono`    | JetBrains Mono | Tags, labels, kode                   |

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

*Universitetet i Agder — IS-310, 2026*