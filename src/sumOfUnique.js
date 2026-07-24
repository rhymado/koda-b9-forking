export const sumOfUnique = function (nums) {
  // membuat objek kosong untuk menampung key berupa num dan value berupa total num di dalam array nums
  const obj = {};
  // inisialisasi variabel result
  let result = 0;

  // loop untuk mengisi objek
  for (let i = 0; i < nums.length; i++) {
    // jika objek dengan key nums[i] belum ada maka ditambahkan dan di isi value 1
    // jika sudah ada maka objek dengan key nums[i] nilainya ditambah 1

    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }

  console.log(obj);

  // loop objek
  for (const key in obj) {
    // jika ada key di dalam objek yang value nya === 1 maka result ditambah value dari key objek tersebut
    if (obj[key] === 1) {
      result += Number(key);
    }
  }

  // return result
  return result;
};
