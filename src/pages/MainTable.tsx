import arrowLeft from "../assets/svg/arrowLeft.svg"
import Table from "../components/Table"

export default function MainTable() {
    return (
        <div className="p-16">
            <div>
                <div className="flex gap-3.5">
                    <img src={arrowLeft} alt="back" />
                    <h1 className="font-bold text-3xl text-[#003EB1]">Data Calon Siswa Baru</h1>
                </div>
                <p className="text-2xl text-[#003EB1]">Berikut adalah data calon siswa baru yang telah terdaftar</p>
            </div>

            <Table>
            </Table>

        </div>
    )
}