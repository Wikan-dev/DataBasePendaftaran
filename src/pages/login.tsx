import bg from "../assets/png/BackgroundSsekolah.png";
import mc from "../assets/png/Orang1Cowo.png";
import ButtonCancel from "../components/ButtonCancel";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaperPlane from "../assets/svg/PaperPlane.svg";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(async (response) => {
            const data = await response.json();
            
            if (response.ok) {
                // LOGIN SUKSES! 
                // Simpan "Kunci Sakti" (Token) ke brankas browser (localStorage)
                localStorage.setItem('admin_token', data.token);
                
                // Lempar ke halaman Dashboard
                navigate('/dashboard');
            } else {
                // LOGIN GAGAL!
                setError(data.message);
            }
        })
        .catch(() => setError('Gagal terhubung ke server backend!'))
        .finally(() => setLoading(false));
    };
    return (
        <div className="flex" >
            {/* Foto Kiri */}
            <div className="h-screen flex w-1/2">
                <img src={mc} alt="Orang 1 Cowo" className="absolute h-screen " />
                <img src={bg} alt="Background Sekolah" className="w-full" />
            </div>

            <div className="w-1/2 px-10 flex flex-col justify-center pb-30">
                <div className="pb-3 border-b text-rpl-blue border-rpl-blue">
                    <h1 className="font-bold text-[40px] text-center">Login</h1>
                    <p className="font-medium text-[20px] text-center">Login untuk mengakses data</p>
                </div>
                <div>
                    <form onSubmit={handleLogin}>
                        {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm text-center font-medium">{error}</div>}
                        <div className="flex gap-8 flex-col mt-11">
                            <div className='flex flex-col gap-1.5'>
                                <label className="font-semibold text-rpl-blue">Email</label>
                                <input placeholder="admin@gmail.com" className="border-4 border-rpl-blue py-3 px-4 rounded-2xl w-full focus:outline-0" value={email} onChange={(e) => setEmail(e.target.value)} required type='email'/>
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <label className="font-semibold text-rpl-blue">Password</label>
                                <input placeholder='••••••••' className="border-4 border-rpl-blue py-3 px-4 rounded-2xl w-full focus:outline-0" value={password} onChange={(e) => setPassword(e.target.value)} required type="password"/>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse gap-6 mt-16">
                            <div>
                                <button className="bg-rpl-blue flex flex-row px-3.5 py-2 rounded-md" onClick={handleLogin}><span className="font-semibold text-white">Kirim</span> <img src={PaperPlane} alt="" /></button>
                            </div>
                            <ButtonCancel />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}