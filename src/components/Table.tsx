import DummySiswa from "../../privateData/DummySiswa.json";
import Td from "./TableRow";
import edit from "../assets/svg/edit.svg";
import Delete from "../assets/svg/delete.svg";
// import Popup from "./CustomPopup";

import { useState } from "react";
import type { TableProps } from "../typs/type";

export default function Table({ onEdit, onDelete }:TableProps ) {
    // const [editData, setEditData] = useState<boolean>(false); 
    // const [deleteData, setDeleteData] = useState<boolean>(false); 
    function handleNoPendaftaran(id:number): string {
        // const text = "REG";
        const currentDate = new Date();
        const year = currentDate.getFullYear();

        return `REG-${year}-${String(id).padStart(3, "0")}`;
    }
    
    const headerList = ["No", "No Pendaftaran", "Nama Lengkap", "Tanggal Lahir", "Jurusan", "Kota Asal", "Jenis Kelamin", "Sekolah Asal", "No Telpon", "Alamat", "Aksi"]

    return (
        <div className="rounded-md overflow-hidden border border-rpl-blue-400">
            <table className="table-auto w-full ">
                <thead className="bg-[#70B3FF]">
                    <tr className="w-[53px] h-[53px] px-3 py-2.5">
                        {headerList.map((item, i) => (
                            <th key={i} className="border-2 border-rpl-blue-400 text-white">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {DummySiswa.map((item, i) => (
                        <tr key={item.id} className={i % 2 === 0 ? "row-even" : "row-odd"}>
                            <Td>{item.id}</Td>
                            <Td>{handleNoPendaftaran(item.id)}</Td>
                            <Td>{item.namaLengkap}</Td>
                            <Td>{item.tanggalLahir}</Td>
                            <Td>{item.jurusan}</Td>
                            <Td>{item.kotaAsal}</Td>
                            <Td>{item.jenisKelamin}</Td>
                            <Td>{item.sekolahAsal}</Td>
                            <Td>{item.noTelp}</Td>
                            <Td>{item.alamat}</Td>
                            <td className="px-3 py-2.5 border-2 border-rpl-blue-400">
                                <div className="flex flex-row shrink-0 w-full justify-between">
                                    <img onClick={() => onEdit(true)} src={edit} alt="" />
                                    <img onClick={() => onDelete(true)} src={Delete} alt="" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}