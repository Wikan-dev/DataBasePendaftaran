import { BrowserRouter, Route, Routes } from "react-router-dom"
import LOginAdmin from "./pages/loginAdmin"
import Daftar from "./pages/daftar"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOginAdmin />} />
        <Route path="Daftar" element={<Daftar />} />
      </Routes>
    </BrowserRouter>
  )
}
