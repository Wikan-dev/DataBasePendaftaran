import { BrowserRouter, Route, Routes } from "react-router-dom"
import Daftar from "./pages/tambah"
import Home from "./pages/home"
import Berhasil from "./pages/berhasil"
import Login from "./pages/login"
import { useEffect } from "react";
import MainTable from "./pages/MainTable";
import Edit from "./pages/edit";

export default function App() {
  useEffect(() => {
    fetch('http://localhost:8000/api/test') // Sesuaikan sama URL endpoint API Laravel-mu
      .then((response) => response.json())
      .then((data) => {
        console.log("🔥 STATUS KONEKSI: BERHASIL!");
        console.log("Isi datanya:", data);
      })
      .catch((error) => {
        console.log("❌ STATUS KONEKSI: GAGAL!");
        console.error(error);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard">
          <Route index element={<MainTable />} />              
          {/* <Route path="daftar" element={<Daftar />} />       
          <Route path="edit/:id" element={<EditSiswa />} /> */}
        </Route>
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/berhasil" element={<Berhasil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
