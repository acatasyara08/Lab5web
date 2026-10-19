const inputA = prompt("Masukkan bilangan pertama:");
const inputB = prompt("Masukkan bilangan kedua:");

if (
    inputA === null || inputA.trim() === "" ||
    inputB === null || inputB.trim() === ""
) {
    console.log("Input dibatalkan atau kosong.");
} else {
    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        console.log("Masukkan bilangan yang valid.");
    } else {
        console.log("Penjumlahan:", a + b);
        console.log("Pengurangan:", a - b);
        console.log("Perkalian:", a * b);
        console.log(
            "Pembagian:",
            b !== 0 ? a / b : "Tidak dapat dibagi nol"
        );
        console.log("Modulus:", a % b);

    }
}
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}
function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log(cekGenap(8)); // true
console.log(cekGenap(7)); // false