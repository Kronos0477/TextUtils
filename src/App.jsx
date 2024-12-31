import { useState } from 'react'
import './App.css'
import Nav from './assets/nav';
import Alert from './assets/alert';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import About from './assets/about';
import Page from './assets/page';
function App() {
 
const [dark_mode, setdark_mode] = useState(false)
const [alert, setalert] = useState(null);
const enable = () => {
  if(dark_mode){
    setdark_mode(false)
    setalert("Light Mode Enabled")
    setTimeout(() => {
      setalert(null)
    }, 1500);
    document.body.style.backgroundColor = "white"
}else{
  setdark_mode(true)
  setalert('Dark Mode Enabled')
  setTimeout(() => {
    setalert(null)
  }, 1500);
  document.body.style.backgroundColor = "black"
}
}
const alert_func=(text)=>{
  setalert(text)
  setTimeout(() => {
    setalert(null)
  }, 1500);
}
  return (
    <>
    <Router>

  <Nav enablemode={enable} dark_mode={dark_mode} />
<Alert alert={alert}/>
<Routes>
  <Route path='/' element={ <Page dark_mode={dark_mode} alert_func={alert_func}/>}/>
 
 < Route path='/about' element={  <About dark_mode={dark_mode}/>}/>
</Routes>
 
    </Router>
 
    </>
  )
}

export default App
