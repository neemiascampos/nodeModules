import qrCode from './assets/qr-code.png'

function App() {
  return (
      <main>
        <div>
          <img src={qrCode} alt="Imagem do QR Code" />
          <br/><strong>Improve your front-end skills by building projects </strong>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </main>
  )
}

export default App
