import bg from "../assets/png/landingPage.png"
import orangs from "../assets/png/orangrame.png"
import calendar from "../assets/png/Calendar.png"
import keyboard from "../assets/png/keyboard.png"
import ArrowUp from "../assets/svg/ArrowUp.svg"
import { useState, useEffect } from "react"

export default function landingPage() {
    const [currentTime, setCurrentTime] = useState("");
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }).replace(":", ".");
            setCurrentTime(timeString);
        }
        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className="relative w-full overflow-hidden">
            <img src={bg} alt="bg" className="relative w-full h-auto block" />
            <div className="absolute inset-0 flex flex-col items-center pt-[5%] text-center">
                <div className="flex flex-col gap-10 items-center text-center">
                    <h1 className="text-rpl-blue-500 font-bold text-5xl">Pendaftaran Peserta Didik Baru <span className="bg-[#E2F2FF] rounded-sm px-2 py-1 shadow-xl/25 shadow-[#042D7C4D]">2026/2027</span></h1>
                    <h1 className="text-rpl-blue-500 font-bold text-5xl"><span className="bg-[#E2F2FF] rounded-sm px-2 py-1 shadow-xl/25 shadow-[#042D7C4D]">SMK TI Bali Global Denpasar</span> Telah Dibuka!</h1>
                    <h1 className="text-rpl-blue-300 font-bold text-5xl/15 w-[70%] mx-auto">Lengkapi formulir pendaftaran dan segeralah menjadi bagian dari kami</h1>
                    <button className="bg-[#004EDF] w-90 h-15 rounded-xl text-white font-bold text-4xl border-[#FFFFFF] border-2">Daftar Sekarang!</button>
                    <div className="relative bg-[#FFD600] px-5 py-1 mr-170 rounded-full shadow-lg inline-flex items-center justify-center transform -rotate-12 mt-[-4vh]">
                        <span className="text-black font-bold text-sm">
                            {currentTime || "00.00 AM"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-24 w-full z-20 flex justify-center gap-105">
                <img src={calendar} alt="calendar" className="w-[30%] h-auto object-contain" />
                <img src={keyboard} alt="keyboard" className="w-[30%] h-auto object-contain" />
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 flex justify-center">
                <img src={orangs} alt="orang" className="w-[50%] h-auto object-contain" />
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 flex justify-end p-5">
                <button className="bg-white w-30 h-10 rounded-xl text-rpl-blue-500 font-bold text-2xl flex-row flex px-5 py-1">login <img src={ArrowUp} alt="arrow" className="w-5 h-5 mt-2" /></button>
            </div>
        </div>
    )
}
