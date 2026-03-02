import type { PopUp } from "../typs/type"
import logout from "../assets/svg/logout.svg"
import save from "../assets/svg/save.svg"
import warning from "../assets/svg/warning.svg"

export default function Popup({ type, onClose }: PopUp) {
    const popupConfig = {
        logout: {
            title: "Log Out?",
            deskc: "Yakin ingin Log Out dari halaman ini?",
            icon: logout
        },
        save: {
            title: "Simpan Perubahan?",
            deskc: "Yakin untuk memperbarui data ini?",
            icon: save
        },
        warning: {
            title: "Hapus Data?",
            deskc: "Yakin ingin menghapus data ini?",
            icon: warning
        },
    }

    const config = popupConfig[type]

    return (
        <div className="bg-red-500">
            <h1 className="">
                {config.title}
                {config.desc}
                <img src={config.icon} alt="" />
            </h1>
            <button onClick={onClose}>
                Batal
            </button>
        </div>
    )
} 