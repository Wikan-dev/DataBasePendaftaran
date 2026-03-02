import type { ButtonRpl } from "../typs/type"
import privateData from "../../privateData/LoginAdmin.json"
import PaperPlane from "../assets/svg/PaperPlane.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonRpl({ email, password, setConfirm }: ButtonRpl) {
    const Navigate = useNavigate()
    const handleLogin = () => {
        if (!email || !password) {
            alert("username & password harus di isi")
            return
        }
    }
    
    function generateSessionId() {
        return Math.random().toString(36).substring(2, 10);
    }

    useEffect(() => {
        const user = privateData.find(
            (data: { username: string; password: string }) =>
                data.username === email && data.password === password
        )
        
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                if (user) {
                    // setConfirm(true);
                    const sessionId = generateSessionId();
                    localStorage.setItem('sessionId', sessionId);
                    Navigate(`/dashboard/${sessionId}`);

                    console.log("User tervalidasi:", user)
                } else {
                    alert("Username atau password salah")
                    return;
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [email, password, setConfirm])

    return (
        <div>
            <button className="bg-rpl-blue-300 flex flex-row px-3.5 py-2 rounded-md" onClick={handleLogin}><span className="font-semibold text-white">Kirim</span> <img src={PaperPlane} alt="" /></button>
        </div>
    )
}