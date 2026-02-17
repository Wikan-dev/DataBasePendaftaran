import { BrowserRouter, Route, Routes } from "react-router-dom"
import LOginAdmin from "./pages/loginAdmin"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOginAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}
