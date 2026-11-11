const express = require('express');
const app = express();

const namaTim = 'Kelompok 8';

const anggota = [
  { nama: 'Rizqi Achmad Rifsya', nim: '20250040185' },
  { nama: 'Rizki Harpan Maulana', nim: '20250040141' },
  { nama: 'Salwa Alawiah', nim: '20250040096' },
  { nama: 'Siti Salwa Fitriani', nim: '20250040195' },
];

// Route /
app.get('/', (req, res) => {
  res.send('Selamat datang di server kelompok ' + namaTim);
});

// Route /team/:nama
app.get('/team/:nama', (req, res) => {
  res.send('Hai, saya ' + req.params.nama + ' dari kelompok ' + namaTim);
});

// Route /info -> JSON data anggota
app.get('/info', (req, res) => {
  res.json({ kelompok: namaTim, anggota: anggota });
});

// Redirect /data -> /info
app.get('/data', (req, res) => {
  res.redirect('/info');
});

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));