import bg from "../assets/png/tengkyu.png"
import people from "../assets/png/orangCewe2.png"

export default function lp2() {
    return (
        <div className="relative w-full overflow-hidden">
            <img src={bg} alt="bg" className="relative w-full h-auto block" />
            <div className="absolute inset-0 flex flex-col items-center pt-[10%] text-center">
                <div className="flex flex-col gap-3 items-center text-center">
                    <h1 className="text-white font-bold text-5xl">Pendaftaran berhasil</h1>
                    <h1 className="text-rpl-blue-500 font-bold text-5xl/17 w-[50%]">Terima kasih sudah mendaftar sebagai <span className="bg-[#E2F2FF] rounded-sm px-2 py-1 shadow-xl/25 shadow-[#042D7C4D]">calon siswa baru,</span></h1>
                    <h1 className="text-rpl-blue-300 font-bold text-5xl/15 w-[70%] mx-auto">Dan nantikan kembali informasi selanjutnya pada akun media sosial kami!</h1>
                </div>
                <img src={people} alt="people" className="absolute bottom-0" />
            </div>
        </div >
    )
}