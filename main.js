const qrCodeContainer = document.getElementById('qrcode');
const generateButton = document.getElementById('generate');
const downloadButton = document.getElementById('download');
const textInput = document.getElementById('text');
const downloadContainer = document.getElementById("download-container");
const errorsMsg = document.getElementById("error-msg");

let qrCode;

generateButton.addEventListener('click', () => {
    if (textInput.value == 0) {
        errorsMsg.innerHTML = "Por favor, digite algo"
    } else {
        errorsMsg.innerHTML = ""
        const text = textInput.value;
    
        // Remove o QR code anterior
        qrCodeContainer.innerHTML = '';
    
        // Gera o novo QR code
        qrCode = new QRCode(qrCodeContainer, {
            text: text,
            width: 256,
            height: 256,
        });

        qrCodeContainer.style.display = "flex"
        downloadContainer.style.display = "flex"
    }
});

downloadButton.addEventListener('click', () => {
    if (qrCodeContainer.querySelector('img')) {
        const qrImage = qrCodeContainer.querySelector('img').src;
        const link = document.createElement('a');
        link.href = qrImage;
        link.download = 'qrcode.png';
        link.click();
    } else if (qrCodeContainer.querySelector('canvas')) {
        const qrCanvas = qrCodeContainer.querySelector('canvas');
        const link = document.createElement('a');
        link.href = qrCanvas.toDataURL();
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert('Por favor, gere o QR Code primeiro!');
    }
});