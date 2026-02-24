import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TambahSiswa() {
    const navigate = useNavigate();
    
    // 1. Cek apakah user sudah mendaftar di session ini
    const [sudahDaftar, setSudahDaftar] = useState(false);
    
    useEffect(() => {
        // Cek sessionStorage saat halaman pertama kali dibuka
        if (sessionStorage.getItem('status_pendaftaran') === 'sukses') {
            setSudahDaftar(true);
        }
    }, []);

    // 2. State untuk menampung isian form
    const [formData, setFormData] = useState({
        jurusan: 'RPL',
        nama_lengkap: '',
        tempat_tanggal_lahir: '',
        jenis_kelamin: 'Laki-laki',
        alamat: '',
        asal_sekolah: '',
        no_hp: ''
    });

    const [loading, setLoading] = useState(false);
    const [pesanError, setPesanError] = useState('');

    // 3. Fungsi untuk menangani perubahan input ketikan user
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 4. Fungsi untuk mengirim data ke Laravel saat tombol Submit diklik
    const handleSubmit = (e: any) => {
        e.preventDefault(); // Mencegah halaman refresh
        setLoading(true);
        setPesanError('');

        fetch('http://localhost:8000/api/siswa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(async (response) => {
            const data = await response.json();
            if (response.ok) {
                // Berhasil! Simpan jejak di sessionStorage
                sessionStorage.setItem('status_pendaftaran', 'sukses');
                
                // HAPUS alert() dan setSudahDaftar()
                
                // KITA GANTI JADI REDIRECT:
                // Lempar user ke halaman '/berhasil' dan bawa data nomor pendaftarannya
                navigate('/berhasil', { 
                    state: { 
                        noPendaftaran: data.data.no_pendaftaran,
                        namaSiswa: formData.nama_lengkap
                    } 
                });
            } else {
                // Kalau ada validasi error dari Laravel
                setPesanError(data.message || 'Terjadi kesalahan saat menyimpan data.');
            }
        })
        .catch(err => {
            console.error(err);
            setPesanError('Gagal terhubung ke server. Pastikan backend Laravel menyala.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    // TAMPILAN JIKA SUDAH MENDAFTAR (Mencegah Double Submit)
    if (sudahDaftar) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Anda Sudah Mendaftar!</h2>
                    <p className="text-gray-500 mb-6">Sistem mendeteksi Anda telah mengirimkan formulir pendaftaran pada sesi ini.</p>
                    <Link to="/" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700">Kembali ke Home</Link>
                </div>
            </div>
        );
    }

    // TAMPILAN FORM NORMAL
    return (
        <div className="bg-gray-100 font-sans antialiased min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Kembali ke Halaman Utama
                </Link>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-indigo-600 p-6">
                        <h2 className="text-2xl font-bold text-white">Form Pendaftaran Siswa</h2>
                        <p className="text-indigo-100 text-sm">Silakan lengkapi data calon siswa dengan benar.</p>
                    </div>
                    
                    {pesanError && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4 rounded">
                            <p>{pesanError}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">No. Pendaftaran</label>
                                {/* Di React API, No Pendaftaran lebih baik digenerate otomatis di Backend saat Submit */}
                                <input type="text" value="Dibuat Otomatis oleh Sistem" readOnly 
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-400 font-mono focus:outline-none cursor-not-allowed" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Jurusan Pilihan</label>
                                <select name="jurusan" value={formData.jurusan} onChange={handleChange} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none appearance-none">
                                    <option value="RPL">Rekayasa Perangkat Lunak (RPL)</option>
                                    <option value="DKV">Desain Komunikasi Visual (DKV)</option>
                                    <option value="TKJ">Teknik Komputer Jaringan (TKJ)</option>
                                    <option value="BD">Bisnis Digital (BD)</option>
                                    <option value="AN">Animasi (AN)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                            <input type="text" name="nama_lengkap" value={formData.nama_lengkap} onChange={handleChange} required placeholder="Masukkan nama sesuai ijazah"
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none placeholder:text-gray-300" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Tempat, Tanggal Lahir</label>
                                <input type="text" name="tempat_tanggal_lahir" value={formData.tempat_tanggal_lahir} onChange={handleChange} placeholder="Contoh: Bali, 01-01-2008" required 
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Jenis Kelamin</label>
                                <div className="flex gap-6 mt-3">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="jenis_kelamin" value="Laki-laki" 
                                            checked={formData.jenis_kelamin === 'Laki-laki'} onChange={handleChange}
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                        <span className="ml-2 text-gray-700">Laki-laki</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="jenis_kelamin" value="Perempuan" 
                                            checked={formData.jenis_kelamin === 'Perempuan'} onChange={handleChange}
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                        <span className="ml-2 text-gray-700">Perempuan</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Lengkap</label>
                            <textarea name="alamat" value={formData.alamat} onChange={handleChange} rows={3} required placeholder="Jl. Nama Jalan No. 123..."
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Asal Sekolah</label>
                                <input type="text" name="asal_sekolah" value={formData.asal_sekolah} onChange={handleChange} required placeholder="SMP Negeri 1..."
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">No. HP / WhatsApp</label>
                                <input type="text" name="no_hp" value={formData.no_hp} onChange={handleChange} required placeholder="08123456789"
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:border-indigo-500 focus:outline-none" />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className={`w-full text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg flex justify-center items-center ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'}`}>
                            {loading ? 'Menyimpan...' : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    Simpan Data Pendaftaran
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}