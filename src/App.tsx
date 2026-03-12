import { BrowserRouter, Route, Routes } from "react-router-dom"
import LOginAdmin from "./pages/loginAdmin"
import Daftar from "./pages/daftar"
import LandingPage from "./pages/landingPage"
import MainTable from "./pages/MainTable"
import Berhasil from "./pages/landingPage2"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<LOginAdmin />} />
        <Route path="Daftar" element={<Daftar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/:sessionId" element={<MainTable />} />
        <Route path="/berhasil" element={<Berhasil />} />
      </Routes>
    </BrowserRouter>
  )
}
