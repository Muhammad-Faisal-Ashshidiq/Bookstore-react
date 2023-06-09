import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
    { _id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5},
  ]); 

  function storeData(inputBook){
    console.log(inputBook);
    alert("Data berhasil ditambahkan");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku bookList={books} storeData={storeData} editBook={setBooks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
