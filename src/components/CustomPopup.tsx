import type { PopUp } from "../typs/type"
import logout from "../assets/svg/logout.svg"
import save from "../assets/svg/save.svg"
import warning from "../assets/svg/warning.svg"

export default function Popup({ type, onClose }: PopUp) {
    const popupConfig: Record<PopUp["type"], { title: string; desc: string; icon: string; buttonText: string }> = {
        logout: {
            title: "Log Out?",
            desc: "Yakin ingin Log Out dari halaman ini?",
            icon: logout,
            buttonText: "Log Out"
        },
        save: {
            title: "Simpan Perubahan?",
            desc: "Yakin untuk memperbarui data ini?",
            icon: save,
            buttonText: "Simpan"
        },
        hapus: {
            title: "Hapus Data?",
            desc: "Yakin ingin menghapus data ini?",
            icon: warning,
            buttonText: "Hapus"
        },

    }

    const config = popupConfig[type];

    return (
        <div className="w-screen h-screen bg-black/50 absolute top-0 left-0">
            <div className="bg-white rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 w-fit flex justify-center flex-col">
                <img src={config.icon} alt="" className="mx-auto" />
                <h1 className="text-center font-bold text-2xl">
                    {config.title}
                </h1>
                <p className="text-center">{config.desc}</p>
                <div className="flex gap-3.5 mt-5">
                    <button onClick={onClose} className="bg-rpl-red text-white px-9 py-1 rounded-md">Batal</button>
                    <button onClick={onClose} className="bg-rpl-blue-300 text-white px-9 py-1 rounded-md">{config.buttonText}</button>
                </div>
            </div>
        </div>
    )
} 