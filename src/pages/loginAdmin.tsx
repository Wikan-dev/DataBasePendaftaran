import bg from "../assets/png/BackgroundSsekolah.png";
import mc from "../assets/png/Orang1Cowo.png";
import InputAdmin from "../components/InputAdmin";

export default function LOginAdmin() {
    return (
        <div className="flex" >
            <div className="h-screen flex w-1/2">
                <img src={mc} alt="Orang 1 Cowo" className="absolute h-screen " />
                <img src={bg} alt="Background Sekolah" className="w-full" />
            </div>

            <div className="w-1/2 px-10">
                <div className="pb-3 border-b border-[#B4B4B4]">
                    <h1 className="font-bold text-[40px] text-center">Login</h1>
                    <p className="font-medium text-[20px] text-center">Login untuk mengakses data</p>
                </div>
                <div>
                    <div>
                        <InputAdmin adminInput={{
                            username: "Username",
                            password: "Password",
                            icon: "EmailIcon",
                            placeholder: "Email"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}