import bg from "../assets/png/BackgroundSsekolah.png";
import mc from "../assets/png/Orang1Cowo.png";
import InputAdmin from "../components/InputAdmin";
import ButtonRpl from "../components/ButtonRpl";

import { useState } from "react";

export default function LOginAdmin() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
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
                        <InputAdmin value={username} onChange={setUsername} inputType="email" />
                        <InputAdmin value={password} onChange={setPassword} inputType="password" />
                        <ButtonRpl username={username} password={password} />
                    </div>
                </div>
            </div>
        </div>
    )
}