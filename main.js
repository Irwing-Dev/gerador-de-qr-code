const qrCodeContainer = document.getElementById('qrcode');
const generateButton = document.getElementById('generate');
const downloadButton = document.getElementById('download');
const textInput = document.getElementById('text');
const downloadContainer = document.getElementById("download-container");
const errorMessages = document.getElementById("error-msg");

let qrCode;

generateButton.addEventListener('click', () => {
    if (textInput.value == 0) {
        errorMessages.innerHTML = "Por favor, escreva algo";
        qrCodeContainer.style.display = "none";
        downloadContainer.style.display = "none";
    } else {
        errorMessages.innerHTML = "";
        const text = textInput.value;
    
        // Remove o QR code anterior
        qrCodeContainer.innerHTML = '';
    
        // Gera o novo QR code
        qrCode = new QRCode(qrCodeContainer, {
            text: text,
            width: 256,
            height: 256,
        });
        qrCodeContainer.style.display = "flex";
        downloadContainer.style.display = "flex";
    }
});

downloadButton.addEventListener('click', () => {
    let qrImage;
    if (qrCodeContainer.querySelector('img')) {
        qrImage = qrCodeContainer.querySelector('img').src;
    } else if (qrCodeContainer.querySelector('canvas')) {
        qrImage = qrCodeContainer.querySelector('canvas').toDataURL();
    }

    if (qrImage) {
        fetch(qrImage)
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'qrcode.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            })
            .catch(() => alert('[ERROR] Erro ao baixar o QR Code!'));
    }
});