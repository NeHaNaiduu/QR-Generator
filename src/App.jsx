import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[text,setText]=useState("")
  const[word,setWord]=useState("")
  const[code,setCode]=useState("")

  useEffect(()=>{
    setCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}`)
  },[word])

  const handleClick=(e)=>{
    e.preventDefault();
    setWord(text);
  }

 
  return (
    <>
      <h1>QR-Code Generator</h1>
      <form onSubmit={handleClick}>
        <input 
        type="text"
        placeholder='Enter to encode'
        onChange={e=>{setText(e.target.value)}} />
        <button type='submit'>Generate</button>
      </form>
      <div className='qrcode'>
        <img src={code} alt="" />
        <a href={code} download="QRCode">
          <button>Download</button>
        </a>
      </div>
    </>
  )
}

export default App
