const args = process.argv.slice(2); // Komut satırından girilen parametreleri al
const yaricap = parseFloat(args[0]); // İlk parametreyi al ve sayıya çevir

if (isNaN(yaricap) || yaricap <= 0) {
    console.log("Lütfen geçerli bir yarıçap girin.");
} else {
    const alan = Math.PI * Math.pow(yaricap, 2); // π * r² hesapla
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan.toFixed(2)}`);
}
