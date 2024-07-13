import JsBarcode from "jsbarcode"
export function generateBarcode(data) {
    const img = document.createElement('img');
    JsBarcode(img, data, { format: "CODE128", displayValue: true })
    return img.src
}
