function generateQRCode(text) {
    let qrDiv = document.getElementById("qrCode");
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, text);
}
