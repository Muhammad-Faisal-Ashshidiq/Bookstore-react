import React, { useState } from 'react';
import TabelBuku from "./TabelBuku";


function ManajemenBuku(bookList)
{
    console.log(bookList);

    const [formMode, setFormMode] = useState();

    function showCreateForm(){
        setFormMode("show");
    }
    function showEditForm(){
        setFormMode("show");
    }

    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Manajemen Buku</h1>
            <button className="btn btn-sm btn-info my-2" onClick={showCreateForm}>Tambah Buku</button>

        <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Judul</th>
                    <th>Pengarang</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Aksi</th>
                </tr>
            </thead>
        </table>

        {/*Input Form*/}
        {formMode === "show" && (
        <div id="form" className="card py-2 my-3 bg-secondary">
            <div className="card-body">
                <h4>Hai</h4>
                <form className="row">
                    <div className="col-6">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="Judul..." />
                    </div>
                    <div className="col-4">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang..." />
                    </div>
                    <div className="col-2">
                        <input type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-green-500" value="submit" />
                    </div>
                </form>
            </div>
        </div>
        )}
        {/* tabel data buku */}
        <TabelBuku showEdit={{showEditForm}} />
        </div>

    );
} 



export default ManajemenBuku