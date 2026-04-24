import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Home        from './pages/Home'
import OmOss       from './pages/OmOss'
import Oppgave     from './pages/Oppgave'
import Team        from './pages/Team'
import Status1     from './pages/Status1'
import Status2     from './pages/Status2'
import Dagbok      from './pages/Dagbok'
import Refleksjon  from './pages/Refleksjon'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/om-oss"     element={<OmOss />} />
          <Route path="/oppgave"    element={<Oppgave />} />
          <Route path="/team"       element={<Team />} />
          <Route path="/status-1"   element={<Status1 />} />
          <Route path="/status-2"   element={<Status2 />} />
          <Route path="/dagbok"     element={<Dagbok />} />
          <Route path="/refleksjon" element={<Refleksjon />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
