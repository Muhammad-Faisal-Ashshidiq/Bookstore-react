// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';

function App() {
  const [books,] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
    { _id: 1, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5},
    
  ]); 

  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path="/" exact element={<Beranda/>} />
    <ManajemenBuku bookList={books} />
    {/* <Route path="/manajemen-buku" exact element={<ManajemenBuku/>} /> */}

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
