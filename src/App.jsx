import './App.css';
import { useRef, useState } from 'react';
import { DownloadVIdeo } from './Controller';
import Loading from './Components/Loading';
import Video from './Components/Video';

function App() {
  const inputRef = useRef();
  const labelMes = useRef();
  const Button = useRef();

  let [buttonDisable, SetDisableButton] = useState(false)
  const [Content,SetContent] = useState('')

  const LabelDefault = () => {
    labelMes.current.innerHTML = "Perlu memasukkan url instagram*"
    labelMes.current.classList.remove('label-alert')
  }
  const Submited = (e) => {
    e.preventDefault()
    SetDisableButton(true)
    Button.current.classList.add('button-disable')
    SetContent(<Loading/>)
    DownloadVIdeo(inputRef).then(result => {
      console.log(result)
      SetDisableButton(false)
      Button.current.classList.remove('button-disable')
      if (!result.data) {
        SetContent('  ')
        labelMes.current.innerHTML = "URL instagram tidak tepat"
        labelMes.current.classList.add('label-alert')
        setTimeout(() => {
          LabelDefault()
        }, 5000)
      } else {
        labelMes.current.innerHTML = "Download melalui tombol di bawah"
        labelMes.current.classList.remove('label-alert')
        SetContent(<Video data={result}/>)
      }
    })

  }
  return (
    <>
      <div className="container-form">
        <h1>Download Video Dari Instagram </h1>
        <form action="/" onSubmit={Submited}>
          <div className="link-con">
            <div className="input-con">
              <label ref={labelMes} htmlFor="link">Perlu memasukkan url instagram*</label>
              <input ref={inputRef} type="text" name="link" placeholder='Masukan URL Instagram' required />
            </div>
            <div className="button-con">
              <button disabled={buttonDisable} ref={Button}>UNDUH</button>
            </div>
          </div>
        </form>
        <div className="container">
         {Content}
        </div>
      </div>

    </>
  );
}

export default App;
