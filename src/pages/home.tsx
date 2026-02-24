import { Link } from 'react-router-dom';

export default function Home() {
    return (
        // Tag <body> kita ganti jadi <div> biasa, tapi class-nya tetep sama
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen font-sans text-slate-800 selection:bg-indigo-500 selection:text-white">
            
            <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
                
                {/* Efek Lingkaran Blur di Belakang */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

                <div className="text-center mb-12 relative z-10 max-w-2xl">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                        Tahun Ajaran 2026/2027
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-4 text-slate-900 tracking-tight">
                        PPDB <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Online</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                        Selamat datang di portal pendaftaran siswa baru. Silakan pilih menu di bawah ini untuk melanjutkan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
                    
                    {/* Kartu 1: Siswa Baru */}
                    <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Siswa Baru</h3>
                        <p className="text-slate-500 mb-8">Belum terdaftar? Isi formulir pendaftaran secara online di sini. Cepat dan mudah.</p>
                        
                        {/* PENGGANTI href="{{ route('siswa.create') }}" */}
                        <Link to="/daftar" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-200">
                            Daftar Sekarang &rarr;
                        </Link>
                    </div>

                    {/* Kartu 2: Administrator */}
                    <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Administrator</h3>
                        <p className="text-slate-500 mb-8">Login khusus Staff TU / Admin untuk melihat dan mengelola data pendaftar masuk.</p>
                        
                        {/* PENGGANTI href="{{ route('dashboard') }}" */}
                        <Link to="/dashboard" className="block w-full text-center bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 font-bold py-3 rounded-xl transition-all">
                            Masuk Dashboard
                        </Link>
                    </div>

                </div>

                {/* PENGGANTI {{ date('Y') }} */}
                <div className="mt-12 text-slate-400 text-sm font-medium z-10">
                    &copy; {new Date().getFullYear()} SMK Coding Bali &bull; Dibuat dengan React & Laravel
                </div>

            </div>
        </div>
    );
}