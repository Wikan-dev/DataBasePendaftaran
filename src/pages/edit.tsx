import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function EditSiswa() {
    const { id } = useParams(); // Mengambil ID dari URL (misal: /edit-siswa/5)
    const navigate = useNavigate();

    // State untuk menampung data form
    const [formData, setFormData] = useState({
        nama_lengkap: '',
        no_hp: '',
        alamat: '',
        // Data di bawah ini cuma untuk ditampilkan (tidak bisa diedit)
        no_pendaftaran: '',
        jurusan: '',
        asal_sekolah: ''
    });

    const [loading, setLoading] = useState(true);
    const [pesanError, setPesanError] = useState('');

    // 1. AMBIL DATA LAMA SAAT HALAMAN DIBUKA
    useEffect(() => {
        // Tambahkan pengamanan cek login (opsional)
        if (!localStorage.getItem('admin_token')) {
            alert('Lu belum login bro!');
            navigate('/login');
            return;
        }

        fetch(`http://localhost:8000/api/siswa/${id}`)
            .then(response => response.json())
            .then(hasil => {
                if (hasil.data) {
                    setFormData(hasil.data); // Isi form dengan data dari database
                } else {
                    setPesanError('Data siswa tidak ditemukan!');
                }
            })
            .catch(err => {
                console.error(err);
                setPesanError('Gagal mengambil data dari server.');
            })
            .finally(() => setLoading(false));
    }, [id, navigate]);

    // Fungsi menangani ketikan user
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 2. KIRIM DATA BARU SAAT DISIMPAN
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        fetch(`http://localhost:8000/api/siswa/${id}`, {
            method: 'PUT', // Pakai PUT karena kita mau Update data
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                nama_lengkap: formData.nama_lengkap,
                no_hp: formData.no_hp,
                alamat: formData.alamat
            })
        })
        .then(async (response) => {
            if (response.ok) {
                alert('Data berhasil diubah!');
                navigate('/dashboard'); // Balik ke tabel
            } else {
                const data = await response.json();
                setPesanError(data.message || 'Gagal menyimpan perubahan.');
            }
        })
        .catch(err => console.error(err));
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold">Sedang memuat data...</div>;
    }

    return (
        <div className="bg-slate-50 p-10 font-sans min-h-screen">
            <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                
                {pesanError && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4 font-medium">{pesanError}</div>
                )}

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-800">Edit Profil Siswa</h2>
                    <p className="text-slate-500 text-sm">No. Pendaftaran: <span className="font-mono font-bold text-indigo-600">{formData.no_pendaftaran}</span></p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                        <input type="text" name="nama_lengkap" value={formData.nama_lengkap} onChange={handleChange} required
                            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">No. HP / WhatsApp</label>
                        <input type="text" name="no_hp" value={formData.no_hp} onChange={handleChange} required
                            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Alamat Domisili</label>
                        <textarea name="alamat" rows={4} value={formData.alamat} onChange={handleChange} required
                            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"></textarea>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-200">
                        <p className="text-xs text-slate-400 uppercase font-bold mb-1">Data Permanen</p>
                        <p className="text-sm text-slate-600 mb-1">Jurusan: <strong className="text-slate-800">{formData.jurusan}</strong></p>
                        <p className="text-sm text-slate-600">Asal Sekolah: <strong className="text-slate-800">{formData.asal_sekolah}</strong></p>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
                            Simpan Perubahan
                        </button>
                        <Link to="/dashboard" className="flex-1 bg-slate-100 text-slate-600 font-bold py-3 rounded-xl hover:bg-slate-200 text-center transition flex items-center justify-center">
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}