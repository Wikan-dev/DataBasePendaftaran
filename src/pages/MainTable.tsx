import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';


export default function MainTable() {
    // 1. TAMBAHAN <any[]> DI SINI! Ini yang bikin garis merah di VS Code hilang.
    const [siswaList, setSiswaList] = useState<any[]>([]);
    const [pesanSukses, setPesanSukses] = useState('');

    const navigate = useNavigate(); // Jangan lupa import useNavigate di atas ya

    // SATPAM DASHBOARD
    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            navigate('/login');
        }
    }, []);

    // FUNGSI LOGOUT
    const handleLogout = () => {
        // Kasih konfirmasi biar nggak kepencet nggak sengaja
        if (window.confirm('Yakin mau keluar dari Dashboard?')) {
            const token = localStorage.getItem('admin_token');

            // 1. Lapor ke Laravel untuk menghancurkan token di server
            fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Bawa Kunci Sakti biar Laravel kenal
                    'Accept': 'application/json'
                }
            })
            .finally(() => {
                // 2. Apapun balasan dari server, POKOKNYA hapus Kunci di browser!
                localStorage.removeItem('admin_token');
                
                // 3. Tendang balik ke halaman login
                navigate('/login');
            });
        }
    };

    // 2. Ambil data dari API Laravel
    useEffect(() => {
        fetch('http://localhost:8000/api/siswa')
            .then(response => response.json())
            .then(hasil => {
                // Pastikan 'hasil.data' sesuai dengan format JSON dari Laravel kamu
                if (hasil.data) {
                    setSiswaList(hasil.data); 
                }
            })
            .catch(error => console.error("Gagal ambil data:", error));
    }, []);

    // 3. Fungsi Hapus Data
    const hapusSiswa = (id: number) => {
        if (window.confirm('Beneran mau hapus data ini?')) {
            fetch(`http://localhost:8000/api/siswa/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                // Cek apakah Laravel membalas dengan status sukses (200 OK)
                if (response.ok) {
                    // Kalau sukses, baru hapus dari tampilan layar
                    setSiswaList(siswaList.filter(s => s.id !== id));
                    setPesanSukses("Data beneran dihapus dari database!");
                } else {
                    alert("Waduh, gagal menghapus data di database!");
                }
            })
            .catch(err => console.error("Error koneksi:", err));
        }
    };

    return (
        <div className="bg-gray-100 font-sans antialiased p-6 md:p-10 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-800">Daftar Siswa</h1>
                        <p className="text-gray-600">Manajemen data pendaftaran siswa baru</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={handleLogout} className="px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 font-medium cursor-pointer transition duration-150 ease-in-out">
                            Logout
                        </button>
                        <Link to="/" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-all shadow-md">
                            Kembali Ke Home
                        </Link>
                        <Link to="/daftar" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all shadow-md">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                            Tambah Siswa
                        </Link>
                    </div>
                </div>

                {/* Notifikasi Sukses */}
                {pesanSukses && (
                    <div className="flex items-center p-4 mb-6 text-green-800 rounded-lg bg-green-50 border border-green-200 shadow-sm">
                        <div className="text-sm font-medium">{pesanSukses}</div>
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-4 font-semibold text-center">ID</th>
                                    <th className="px-4 py-4 font-semibold">No. Pendaftaran</th>
                                    <th className="px-4 py-4 font-semibold">Nama Lengkap</th>
                                    <th className="px-4 py-4 font-semibold">Tempat Tanggal Lahir</th>
                                    <th className="px-4 py-4 font-semibold text-center">L/P</th>
                                    <th className="px-4 py-4 font-semibold">Alamat</th>
                                    <th className="px-4 py-4 font-semibold">Asal Sekolah</th>
                                    <th className="px-4 py-4 font-semibold">No. HP</th>
                                    <th className="px-4 py-4 font-semibold">Jurusan</th>
                                    <th className="px-4 py-4 font-semibold text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {siswaList.map((s) => (
                                    <tr key={s.id} className="hover:bg-gray-50 transition-colors text-gray-800">
                                        <td className="px-4 py-4 text-center font-medium">{s.id}</td>
                                        <td className="px-4 py-4">
                                            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded">
                                                {s.no_pendaftaran}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 font-semibold">{s.nama_lengkap}</td>
                                        <td className="px-4 py-4 text-xs">{s.tempat_tanggal_lahir}</td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${s.jenis_kelamin === 'Laki-laki' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                                                {s.jenis_kelamin === 'Laki-laki' ? 'L' : 'P'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-xs truncate max-w-[150px]">{s.alamat}</td>
                                        <td className="px-4 py-4 text-xs">{s.asal_sekolah}</td>
                                        <td className="px-4 py-4 font-mono text-xs">{s.no_hp}</td>
                                        <td className="px-4 py-4">
                                            <span className="font-medium text-gray-600">{s.jurusan}</span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <a href={`/edit/${s.id}`} className="text-blue-600 hover:text-blue-800 font-bold">
                                                    Edit
                                                </a>
                                                <span className="text-gray-300">|</span>
                                                <button 
                                                    onClick={() => hapusSiswa(s.id)}
                                                    className="text-red-600 hover:text-red-800 font-bold cursor-pointer">
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}