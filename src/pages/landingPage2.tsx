import { useLocation, Link, Navigate } from 'react-router-dom';
import bg from "../assets/png/berhasill.png"

export default function berhasil() {
    // Menangkap data yang dikirim via 'navigate' dari TambahSiswa.tsx
    const location = useLocation();
    const { noPendaftaran, namaSiswa } = location.state || {};

    // Keamanan ekstra: 
    // Kalau ada user iseng ngetik URL "/berhasil" manual tanpa ngisi form, tendang balik ke Home
    // if (!noPendaftaran) {
    //     return <Navigate to="/" />;
    // }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
            <img src={bg} alt="bg" className="w-full h-screen absolute" />
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-lg w-full border-t-8 border-green-500 relative overflow-hidden">

                {/* Efek Lingkaran Latar Belakang */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

                {/* Icon Centang Sukses */}
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative z-10">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>

                <h1 className="text-3xl font-extrabold text-gray-800 mb-2 relative z-10">Pendaftaran Berhasil!</h1>
                <p className="text-gray-500 mb-8 relative z-10">
                    Terima kasih <strong>{namaSiswa}</strong>, data Anda telah masuk ke sistem kami.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100 relative z-10">
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-semibold">Nomor Pendaftaran Anda</p>
                    <p className="text-2xl font-mono font-bold text-indigo-600 bg-[#E2F2FF] py-2 rounded-lg border border-indigo-100">
                        {noPendaftaran}
                    </p>
                    <p className="text-xs text-red-500 mt-3 font-medium">
                        *Harap simpan atau screenshot nomor ini sebagai bukti pendaftaran.
                    </p>
                </div>

                <Link to="/" className="inline-block w-full bg-rpl-blue-300 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-200 relative z-10">
                    Kembali ke Halaman Utama
                </Link>
            </div>
        </div>
    );
}