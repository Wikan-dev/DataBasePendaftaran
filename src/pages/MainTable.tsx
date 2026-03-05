import arrowLeft from "../assets/svg/arrowLeft.svg"
import Table from "../components/Table"
import { useState } from "react";
import Popup from "../components/CustomPopup"
import { useNavigate } from "react-router-dom";

export default function MainTable() {
    const [edit, setEdit] = useState<boolean>(false);
    const [deleteData, setDeleteData] = useState<boolean>(false);
    const [logout, setLogout] = useState<boolean>(false);

    function handleLogOut() {
        // setLogout(true);
        navigate("/");
        console.log("logout");
    }
    
    const navigate = useNavigate();
    return (
        <div className="p-16 bg-rpl-bg min-h-screen flex grow flex-col">
            {deleteData && <Popup onClose={() => setDeleteData(false)} type={"hapus"} />}
            {edit && <Popup onClose={() => setEdit(false)} type={"save"} />}
            {logout && <Popup onClose={() => navigate('/')} type={"logout"} />}
            <div>
                <div className="flex gap-3.5">
                    <img onClick={() => setLogout(true)} src={arrowLeft} alt="back" />
                    <h1 className="font-bold text-3xl text-rpl-blue-500">Data Calon Siswa Baru</h1>
                </div>
                <p className="text-2xl text-rpl-blue-500 mb-6">Berikut adalah data calon siswa baru yang telah terdaftar</p>
            </div>

            <Table onEdit={setEdit} onDelete={setDeleteData} />

        </div>
    )
}