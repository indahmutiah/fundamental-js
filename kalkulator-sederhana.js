process.stdout.write("Hi! Silakan pilih operasi yang ingin dijalankan:\n");
process.stdout.write("1. Penjumlahan\n");
process.stdout.write("2. Pengurangan\n");
process.stdout.write("3. Perkalian\n");
process.stdout.write("4. Pembagian\n");
process.stdout.write("Masukkan pilihan operasi (1-4): ");

let input = [];
process.stdin.on("data", function (data) {
  input.push(data.toString().trim());

  if (input.length === 1) {
    process.stdout.write("Masukkan angka pertama: ");
  } else if (input.length === 2) {
    process.stdout.write("Masukkan angka kedua: ");
  } else if (input.length === 3) {
    const pilihan = input[0];
    const angka1 = parseFloat(input[1]);
    const angka2 = parseFloat(input[2]);

    let hasil;
    let namaOperasi;

    switch (pilihan) {
      case "1":
        hasil = tambah(angka1, angka2);
        namaOperasi = "Penjumlahan";
        break;
      case "2":
        hasil = kurang(angka1, angka2);
        namaOperasi = "Pengurangan";
        break;
      case "3":
        hasil = kali(angka1, angka2);
        namaOperasi = "Perkalian";
        break;
      case "4":
        hasil = bagi(angka1, angka2);
        namaOperasi = "Pembagian";
        break;
      default:
        console.log("Pilihan tidak valid.");
        process.exit();
    }

    console.log(`\nOperasi : ${namaOperasi}`);
    console.log(`Angka 1 : ${angka1}`);
    console.log(`Angka 2 : ${angka2}`);
    console.log(`Hasil   : ${hasil}`);

    process.exit();
  }
});

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: Pembagian dengan nol!";
  }
  return a / b;
}
