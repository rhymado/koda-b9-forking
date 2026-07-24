function removeDuplicates(nums) {
  // i penampung hasil angka unik
  let i = 0;
  // melakukan looping cek angka , mulai dari index ke-1 (karna index 0 sudah pasti unik)
  for (let j = 1; j < nums.length; j++) {
    // jika nilai j tidak sama dengan nilai i  // ditemukan angka unik
    if (nums[j] !== nums[i]) {
      // geser satu langkah agar setiap pengecekan
      i++;
      // salin nilai pada j ke posisi i
      nums[i] = nums[j];
    }
  }
  // kembalikan jumlah angka unik
  return i + 1;
}

module.exports = removeDuplicates;
