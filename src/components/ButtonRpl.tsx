import type { ButtonRpl } from "../typs/type"

export default function ButtonRpl({ username, password }: ButtonRpl) {
    const handleLogin = () => {
        if (!username || !password) {
            alert("username & password harus di isi")
            return
        }

        console.log(username, password)
    }
    return (
        <div>
            <button onClick={handleLogin}>kirim</button>
        </div>
    )
}