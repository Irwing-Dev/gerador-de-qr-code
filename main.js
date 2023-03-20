const textQr = document.querySelector("#textQr");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        genQRCode();
    }
});

function genQRCode() {
    if (!textQr.value) return;
    
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textQr.value}`;
    qrcode.style.padding = '0.2em'
}