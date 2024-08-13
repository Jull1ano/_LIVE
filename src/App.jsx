import './style.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { UIUX } from './Pages/UIUX'
import { Graphic } from './Pages/Graphic'
import { Motion } from './Pages/Motion'
import { Render } from './Pages/Render'
import { Layout } from './Layout'

function App() {
 
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/UIUX" element={<UIUX/>}/>
          <Route path="/Graphic" element={<Graphic/>}/>
          <Route path="/Motion" element={<Motion/>}/>
          <Route path="/Render" element={<Render/>}/>
        </Route>
      </Routes>
    </HashRouter>    
  )
}

export default App
