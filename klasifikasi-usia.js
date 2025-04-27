function klasifikasi(usia) {
  switch (true) {
    case usia >= 0 && usia <= 12:
      return "anak-anak";
    case usia >= 13 && usia <= 17:
      return "remaja";
    case usia >= 18 && usia <= 59:
      return "dewasa";
    case usia >= 60:
      return "lansia";
    default:
      return "Bukan usia yang valid";
  }
}

const daftarUsia = [
  2, 8, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

let jumlahKategori = {
  "anak-anak": 0,
  remaja: 0,
  dewasa: 0,
  lansia: 0,
};

for (let i = 0; i < daftarUsia.length; i++) {
  let kategori = klasifikasi(daftarUsia[i]);
  if (kategori !== "usia tidak valid") {
    jumlahKategori[kategori]++;
  }
}

console.log("anak-anak :", jumlahKategori["anak-anak"]);
console.log("remaja :", jumlahKategori["remaja"]);
console.log("dewasa :", jumlahKategori["dewasa"]);
console.log("lansia :", jumlahKategori["lansia"]);
