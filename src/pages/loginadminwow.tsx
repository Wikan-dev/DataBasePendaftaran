import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-indigo-600">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Administrator</h2>
                
                {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm text-center font-medium">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition">
                        {loading ? 'Mengecek...' : 'Masuk Dashboard'}
                    </button>
                </form>
            </div>
        </div>
    );
}