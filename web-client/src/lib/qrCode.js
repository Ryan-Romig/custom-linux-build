import QRCode from "qrcode";
export const generateQrCode = (input) => {
    var b64 = null;
    QRCode.toDataURL(input, { width: 300 }, (err, result) => {
      if (err) {
        console.error(err);
      }
      b64 = result
    });
    return b64;
  }
