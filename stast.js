// Stastistik Sederhana //
let start = 1;
let end = 20;
let jumlahAngka = 0;
let jumlahGanjil = 0;
let jumlahGenap = 0;
let angkaBesar = 0;

//perulangan //
for (let i = start; i <= end; i++) {
    // menjumlahkan angka //
    jumlahAngka += i;

    // kondisi pertama cek  jumlah genap //
    if (i % 2 === 0 ) {
        jumlahGenap += i;
    // kondisi kedua cek jumlah ganjil //
    } else {
        jumlahGanjil += i
    }

    //kondisi cek angkaa besar //
    if (i > angkaBesar) {
        angkaBesar = i
    }
} 
// memanggil //
console.log("Jumlah angka genap :", jumlahGenap); // output : 110 //
console.log("Jumlah angka ganjil :", jumlahGanjil); // output : 100 //
console.log("Angka terbesar :", angkaBesar); // output : 20 //
console.log("Jumalh semua angka", jumlahAngka); // output : 210 //