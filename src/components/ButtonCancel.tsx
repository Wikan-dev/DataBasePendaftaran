import { useNavigate } from "react-router-dom"

export default function ButtonCancel() {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/");
    }
    
    return (
        <div>
            <button className="bg-rpl-red flex flex-row px-3.5 py-2 rounded-md" onClick={handleCancel}><span className="font-semibold text-white">Batal</span></button>
        </div>
    )
}