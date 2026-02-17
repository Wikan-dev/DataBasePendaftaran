import type { AdminInput } from "../typs/type"
import EmailIcon from "../assets/svg/emailIcon.svg"
import { useState } from "react"

const [username, setUsername] = useState<string>("")
const [pass, setPass] = useState<string>("")

function handleLogin() {
    if (username === "wikan") {
        console.log("Login berhasil")
    } else {
        console.log("Login gagal")
    }
}

function handlePassword() {
    if (pass === "123") {
        console.log("Login berhasil")
    } else {
        console.log("Login gagal")
    }
}

export default function InputAdmin({ adminInput }: { adminInput: AdminInput }) {
    if (adminInput.inputType === "email") {
        handleLogin()
    } else {
        handlePassword()
    }

    return (
        <div className="relative">
            <input type="text" placeholder={adminInput.placeholder} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <img src={EmailIcon} alt="Email Icon" className="absolute right-3 top-2.5" />
        </div>
    )
}