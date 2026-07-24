//Nilai yang akan dimasukkan ke dalam function
// const action = ["bob", "calice", "bob", "calice", "steve", "ed"];

//Pembuatan fungsi untuk memeriksa most active user
function mostActiveUser(array) {
  //Inisiasi nilai awal dari nama most active user
  let name = ["~"];
  //Inisiasi nilai dari aktif user tertinggi
  let maks = 0;
  //Membuat nested for untuk mengecek berapa kali nama user yang sama muncul
  for (let i = 0; i < array.length; i++) {
    //inisiasi nilai count 0, dimana nilai ini akan diganti dengan jumlah berapa kali suatu nama keluar
    let count = 1;
    //perulangan untuk menghitung berapa kali nama user yang sama muncul
    for (let k = i + 1; k < array.length; k++) {
      //Kondisi apabila nama perulangan pertama sama dengan perulangan kedua, jika ya maka nilai count +1
      if (array[i] == array[k]) {
        count++;
      }
    }
    //Kondisi disini untuk mengecek apakah kehadairan nama dari perulangan saat ini lebih banyak dari nama yang ada di  variabel nama diatas
    //Jika nilai nama sekarang kehadirannya sama dengan nama yang ada di variabel name, maka akan di cek inisial nama siapa yang lebih kecil
    //jika kedua kondisi terpenuhi maka variabel name akan diganti nilainya menjadi nilai dari nama perulangan saat ini dan nilai dari variabel maksimal juga diganti menjadi nilai dari count saat ini
    if (count >= maks && name[0].charCodeAt(0) > array[i].charCodeAt(0)) {
      name = array[i];
      maks = count;
    }
  }
  //Output Hasil
  console.log(name);
}

export default mostActiveUser;
//Jalankan fungsi most active user
// mostActiveUser(action);
