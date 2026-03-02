import bg from "../assets/png/landingPage.png"
import orangs from "../assets/png/orangrame.png"

export default function landingPage() {
    return (
        <div className="w-full">
            <img src={bg} alt="bg" className="absolute w-full object-cover z-0" />
            <div className="w-full flex relative top-20">
                <div className="flex flex-col gap-10 items-center text-center">
                    <h1 className="text-[#003EB1] font-bold text-5xl">Pendaftaran Peserta Didik Baru <span className="bg-[#E2F2FF] rounded-sm px-2 py-1 shadow-xl/20 shadow-[#042D7C4D]">2026/2027</span></h1>
                    <h1 className="text-[#003EB1] font-bold text-5xl"><span className="bg-[#E2F2FF] rounded-sm px-2 py-1 shadow-xl/20 shadow-[#042D7C4D]">SMK TI Bali Global Denpasar</span> Telah Dibuka!</h1>
                    <h1 className="text-[#1783FF] font-bold text-5xl/15 w-[70%] mx-auto">Lengkapi formulir pendaftaran dan segeralah menjadi bagian dari kami</h1>
                    <button className="bg-[#004EDF] w-90 h-20 rounded-xl text-white font-bold text-4xl border-[#FFFFFF] border-2">Daftar Sekarang!</button>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2">
                <img src={orangs} alt="orang" className="w-[50%] z-10" />
            </div>
        </div>
    )
}
