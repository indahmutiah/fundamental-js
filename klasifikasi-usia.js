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
console.log("-------------------------------------------------");

// Function Untuk Case Menghitung Usia dengan Inputan

let inputUsia = [];
let totalInput = 10;

process.stdout.write(
  "Hi! Kita Mau List usia nih. Yuk list usia disekitar kamu!\n"
);
process.stdout.write("Masukkan Usia : ");
process.stdin.on("data", function (usia) {
  inputUsia.push(parseInt(usia.toString().trim()));

  if (inputUsia.length < totalInput) {
    process.stdout.write(`Masukkan Lagi ke-${inputUsia.length + 1} : `);
  } else {
    console.log("\nHasil Klasifikasi:");
    let jumlahKategori = {
      "anak-anak": 0,
      remaja: 0,
      dewasa: 0,
      lansia: 0,
    };
    for (let i = 0; i < inputUsia.length; i++) {
      let kategori = klasifikasi(inputUsia[i]);
      if (kategori !== "usia tidak valid") {
        jumlahKategori[kategori]++;
      }
    }
    console.log("anak-anak :", jumlahKategori["anak-anak"]);
    console.log("remaja :", jumlahKategori["remaja"]);
    console.log("dewasa :", jumlahKategori["dewasa"]);
    console.log("lansia :", jumlahKategori["lansia"]);

    process.exit();
  }
});
