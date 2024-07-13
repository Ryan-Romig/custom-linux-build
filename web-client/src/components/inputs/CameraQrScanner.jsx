import { useEffect, useRef } from 'react'
import { QrReader } from 'react-qr-reader'
import {QrScanner} from '@yudiel/react-qr-scanner';
const CameraQrScanner = ({ onScan }) => {
    const qrRef=useRef(null)
    const handleOnResult = (result) => {
      onScan(result)
    }
    return    <QrScanner
    onDecode={handleOnResult}
    ref={qrRef}
    />

}
export default CameraQrScanner