import React, { useState } from 'react'
import QRCode from 'qrcode'





const QRCodeGenerator = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [qrCodeData, setQRCodeData] = useState('')

  const handleGenerateQRCode = () => {
    const data = `${username}:${password}`
    QRCode.toDataURL(data, (err, url) => {
      if (err) {
        console.error('Erro ao gerar o código QR:', err)
      } else {
        setQRCodeData(url)

        setTimeout(() => {
          setQRCodeData('')
        }, 60000)
      }
    })
  }

  return (
    <div>
    
      <button type="button" onClick={handleGenerateQRCode}>Gerar Código QR</button>
      {qrCodeData && <img src={qrCodeData} alt="Código QR"/>}
    </div>
  )
}

export default QRCodeGenerator
