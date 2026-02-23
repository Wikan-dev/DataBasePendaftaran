import type { ButtonRpl } from "../typs/type"
import privateData from "../../privateData/LoginAdmin.json"
import PaperPlane from "../assets/svg/PaperPlane.svg";

export default function ButtonRpl({ username, password }: ButtonRpl) {
    const handleLogin = () => {
        if (!username || !password) {
            alert("username & password harus di isi")
            return
        }

        // Cek apakah username dan password ada di data
        const user = privateData.find(
            (data: { username: string; password: string }) =>
                data.username === username && data.password === password
        )

        if (user) {
            alert("Login berhasil!")
            console.log("User tervalidasi:", user)
        } else {
            alert("Username atau password salah")
        }
    }
    return (
        <div>
            <button className="bg-rpl-blue flex flex-row px-3.5 py-2 rounded-md" onClick={handleLogin}><span className="font-semibold text-white">Kirim</span> <img src={PaperPlane} alt="" /></button>
        </div>
    )
}