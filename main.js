const textQr = document.querySelector("#textQr");
const qrcode = document.querySelector("#qrcode");

function openNav() {
    document.getElementById("my-nav").style.width = "400px"
    document.getElementById("my-nav").style.height = "500px"
}

function closeNav() {
    document.getElementById("my-nav").style.width = "0"
    document.getElementById("my-nav").style.height = "0"
}

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