export default function Table() {

    return (
        <div>
            <table className="table-auto border border-rpl-blue-400">
                <thead className="bg-[#70B3FF] ">
                    <tr>
                        <th>No</th>
                        <th>No Pendafaran</th>
                        <th>Nama Lengkap</th>
                        <th>Tanggal Lahir</th>
                        <th>Jurusan</th>
                        <th>Kota Asal</th>
                        <th>Jenis Kelamin</th>
                        <th>Sekolah Asal</th>
                        <th>No Telpon</th>
                        <th>Alamat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-rpl-blue-400">
                        <td className="border border-rpl-blue-400">1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}