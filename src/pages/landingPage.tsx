import bg from "../assets/png/landingPage.png"
import orangs from "../assets/png/orangrame.png"

export default function landingPage() {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-screen flex justify-center items-center">
                <img src={bg} alt="bg" className="w-full h-full object-cover" />
                <img src={orangs} alt="orang" className="absolute bottom-0 w-[50%]" />
            </div>
            <div className="w-full h-screen absolute top-0">
                <div className="w-full h-screen flex justify-center">
                    <h1 className="text-[#003EB1] font-bold text-5xl mt-20">Pendaftaran Peserta Didik Baru <span className="bg-[#E2F2FF] rounded-sm px-2 py-1">2026/2027</span></h1>
                </div>
            </div>
        </div>
    )
}
