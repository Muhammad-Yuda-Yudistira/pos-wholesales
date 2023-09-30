import puppeteer from "puppeteer";

const generatePDF = async () => {
    // Inisialisasi browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigasi ke halaman dengan komponen React yang ingin Anda eksport sebagai PDF
    await page.goto("http://localhost/path-to-your-component");

    // Buat file PDF
    await page.pdf({
        path: "output.pdf", // Nama file PDF yang akan disimpan
        format: "A4", // Format halaman PDF (misalnya A4)
    });

    // Tutup browser
    await browser.close();
};
