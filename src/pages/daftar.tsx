import person from "../assets/png/OrangCewe1.png"
import backgroundSekolah from "../assets/png/BackgroundSsekolah.png"
import { motion } from "framer-motion"
import ButtonRpl from "../components/ButtonRpl"
import ButtonCancel from "../components/ButtonCancel"
import { useState } from "react"
import { label } from "framer-motion/client"


export default function Daftar() {
    const [selectedGender, setSelectedGender] = useState<string>("");
    const option = [
        { id: 'Laki-Laki', label: 'Laki-Laki' },
        { id: 'Perempuan', label: 'Perempuan' }
    ]
    return (
        <div className="w-full h-screen bg-white">
            <div className="h-screen flex w-1/2">
                <img src={backgroundSekolah} alt="backgroundSekolah" className="w-full" />
                <img src={person} alt="person" className="absolute h-screen" />
            </div>
            <div className="h-screen w-1/2 absolute right-0 top-0 absolute">
                <div className="w-full flex flex-col items-center mt-10 gap-5">
                    <div className="border-b-1 border-black w-[80%] flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-[#042D7C]">Form Pendaftaran</h1>
                        <p className="text-m font-sm text-[#042D7C] mb-5">Silakan lengkapi data calon siswa dengan benar!</p>
                    </div>
                    <div className="w-[80%] flex flex-col gap-5">
                        <div className="flex flex-row gap-2">
                            <div className="w-full">
                                <label htmlFor="namaLengkap" className="text-[#005695] font-medium text-lg">Nama Lengkap</label>
                                <input type="text" id="namaLengkap" placeholder="Ketik" className="w-full border border-[#004EDF] h-9 focus:outline-none border-2 rounded-xl px-3 py-2" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="w-full">
                                <label htmlFor="TanggalLahir" className="text-[#005695] font-medium text-lg">Tanggal Lahir</label>
                                <input type="date" id="TanggalLahir" className="w-full border border-[#004EDF] focus:outline-none h-9 border-2 rounded-xl px-3 py-2" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="jurusan" className="text-[#005695] font-medium text-lg">Jurusan</label>
                                <select id="jurusan" className="text-m w-full border border-[#004EDF] focus:outline-none h-9 border-2 rounded-xl px-3">
                                    <option value="">Pilih Jurusan</option>
                                    <option value="RPL">RPL</option>
                                    <option value="TKJ">TKJ</option>
                                    <option value="DKV">DKV</option>
                                    <option value="Animasi">Animasi</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="w-full">
                                <label htmlFor="KotaAsal" className="text-[#005695] font-medium text-lg">Kota Asal</label>
                                <input type="text" id="KotaAsal" placeholder="Ketik" className="w-full border border-[#004EDF] h-9 focus:outline-none border-2 rounded-xl px-3 py-2" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="jenisKelamin" className="text-[#005695] font-medium text-xl">Jenis Kelamin</label>
                                <div className="flex gap-20 mt-2">
                                    {option.map((option) => (
                                        <label key={option.id} className="flex items-center gap-2">
                                            <input className="hidden" type="radio" name="jenisKelamin" value={option.id} checked={selectedGender === option.id} onChange={(e) => setSelectedGender(e.target.value)} />
                                            <div className={`w-5 h-5 rounded-full border-2 border-[#004EDF] flex items-center justify-center ${selectedGender === option.id}`}>
                                                {selectedGender === option.id && <div className="w-3 h-3 rounded-full bg-[#004EDF]"></div>}
                                            </div>
                                            {option.label}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="w-1/2">
                                <label htmlFor="No Telepon" className="text-[#005695] font-medium text-lg">No Telepon</label>
                                <input type="number" id="No Telepon" placeholder="Ketik" className="w-full border border-[#004EDF] h-9 focus:outline-none border-2 rounded-xl px-3 py-2" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="w-full">
                                <label htmlFor="Alamat" className="text-[#005695] font-medium text-lg">Alamat</label>
                                <textarea id="Alamat" placeholder="Ketik" className="w-full h-30 border border-[#004EDF] focus:outline-none border-2 rounded-xl px-3 py-2 resize-none" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5">
                            <div className="w-full flex justify-end gap-5">
                                {/*
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-red-500 w-1/4 cursor-pointer h-10 rounded-xl text-white font-bold text-sm flex items-center justify-center">Batal</motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#004EDF] w-1/4 cursor-pointer h-10 rounded-xl text-white font-bold text-sm flex items-center justify-center">Kirim</motion.div>
                                */}
                                <ButtonCancel>Batal</ButtonCancel>
                                <ButtonRpl>Kirim</ButtonRpl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}