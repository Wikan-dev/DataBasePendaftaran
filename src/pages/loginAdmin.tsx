import bg from "../assets/png/BackgroundSsekolah.png";
import mc from "../assets/png/Orang1Cowo.png";
import InputAdmin from "../components/InputAdmin";
import ButtonRpl from "../components/ButtonRpl";
import ButtonCancel from "../components/ButtonCancel";
import Popup from "../components/CustomPopup";

import { useState } from "react";

export default function LOginAdmin() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<boolean>(false);

    return (
        <div className="flex" >
            {confirm && <Popup onClose={() => setConfirm(false)} type={"hapus"} />}

            <div className="h-screen flex w-1/2">
                <img src={mc} alt="Orang 1 Cowo" className="absolute h-screen " />
                <img src={bg} alt="Background Sekolah" className="w-full" />
            </div>

            <div className="w-1/2 px-10 flex flex-col justify-center pb-30">
                <div className="pb-3 border-b text-rpl-blue-500 border-rpl-blue-500">
                    <h1 className="font-bold text-[40px] text-center">Login</h1>
                    <p className="font-medium text-[20px] text-center">Login untuk mengakses data</p>
                </div>
                <div>
                    <div>
                        <div className="flex gap-8 flex-col mt-11">
                            <InputAdmin value={email} onChange={setEmail} inputType="email" />
                            <InputAdmin value={password} onChange={setPassword} inputType="password" />
                        </div>
                        <div className="flex flex-row-reverse gap-6 mt-16">
                            <ButtonRpl email={email} password={password} setConfirm={setConfirm} />
                            <ButtonCancel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}