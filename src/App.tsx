import { BrowserRouter, Route, Routes } from "react-router-dom"
import LOginAdmin from "./pages/loginAdmin"
import Daftar from "./pages/daftar"
import LandingPage from "./pages/landingPage"
import MainTable from "./pages/MainTable"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOginAdmin />} />
        <Route path="Daftar" element={<Daftar />} />
        <Route path="LandingPage" element={<LandingPage />} />
        <Route path="/dashboard/:sessionId" element={<MainTable />} />
      </Routes>
    </BrowserRouter>
  )
}
