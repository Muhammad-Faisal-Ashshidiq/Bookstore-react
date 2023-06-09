import React, { useState } from 'react';
import TabelBuku from "./TabelBuku";


function ManajemenBuku({bookList, store})
{
    const [inputBook, setInputBook] = useState();

    // ini ada fungsi input tiap label inputan: judul, pengarang, harga dan stok
    function handleJudul(e) {
        setInputBook({...inputBook, judul: e.target.value});
    }
    function handlePengarang(e) {
        setInputBook({...inputBook, pengarang: e.target.value});
    }
    function handleHarga(e) {
        setInputBook({...inputBook, harga: e.target.value});
    }
    function handleStok(e) {
        setInputBook({...inputBook, stok: e.target.value});
    }
    console.log(bookList);

    const [formMode, setFormMode] = useState();

    function showCreateForm(){
        setFormMode("show");
    }

    function showEditForm(){
        setFormMode("show");
    }

    // fungsi button supaya dapat menambahkan
    function submitAdd(e){
        e.preventDefault();
        StorageEvent(inputBook);
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
            <tbody>
            {bookList.map((book, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td>
                    <button className="btn btn-sm btn-info mr-3">Edit</button>
                    <button className="btn btn-sm btn-danger">Hapus</button>
                </td>
            </tr>
        );
    })}
</tbody>
        </table>

        {/*Input Form*/}
        {formMode === "show" && (
        <div id="form" className="card py-2 my-3 bg-secondary">
            <div className="card-body">
                <h4>Hai</h4>
                <form className="form-row" onSubmit={submitAdd}>
                    <div className="col-6">
                        <input type="text" name="judul" className="form-control mx-2" onChange={handleJudul} placeholder="Judul..." />
                    </div>
                    <div className="col-4">
                        <input type="text" name="pengarang" className="form-control mx-2" onChange={handlePengarang} placeholder="Pengarang..." />
                    </div>
                    <div className="col-4">
                        <input type="text" name="harga" className="form-control mx-2" onChange={handleHarga} placeholder="Harga..." />
                    </div>
                    <div className="col-4">
                        <input type="number" name="stok" className="form-control mx-2" onChange={handleStok} placeholder="Stok..." />
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