import './style.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import { UIUX } from './Pages/UIUX'
import { Graphic } from './Pages/Graphic'
import { Motion } from './Pages/Motion'
import { Render } from './Pages/Render'
import ScrollToTop, { Layout } from './Layout'
import { LayoutArt } from './LayoutArt'
import { Feb } from './Articles/a-feb'
import { Sma } from './Articles/a-sma'
import { Lion } from './Articles/a-lion'
import { Raf } from './Articles/a-raf'
import { Vds } from './Articles/a-vds'
import { Reg } from './Articles/a-reg'
import { Pan } from './Articles/a-pan'
import { Tech } from './Articles/a-tech'
import { Vdp } from './Articles/a-vdp'
import { Cus } from './Articles/a-cus'
import { Env } from './Articles/a-env'
import { Sin } from './Articles/a-sin'
import { Rec } from './Articles/a-rec'
import { Cub } from './Articles/a-cub'
import { Liv } from './Articles/a-liv'
import { Ent } from './Articles/a-ent'
import { Net } from './Articles/a-net'
import { Adr } from './Articles/a-adr'
import { Vmz } from './Articles/a-vmz'
import { Eas } from './Articles/a-eas'
import { Te } from './Articles/b-te'
import { Ma } from './Articles/b-ma'
import { Pu } from './Articles/b-pu'
import { Vq } from './Articles/b-vq'
import { Am } from './Articles/b-am'
import { Vi } from './Articles/b-vi'
import { Ow } from './Articles/b-ow'
import { Bo } from './Articles/b-bo'
import { Cu } from './Articles/b-cu'
import { In } from './Articles/b-in'
import { Vo } from './Articles/b-vo'
import { Ac } from './Articles/b-ac'
import { Fi } from './Articles/b-fi'
import { Mi } from './Articles/b-mi'
import { To } from './Articles/b-to'
import { Sm } from './Articles/b-sm'
import { Me } from './Articles/b-me'
import { Ha } from './Articles/b-ha'
import { Op } from './Articles/c-op'
import { Mo } from './Articles/c-mo'
import { Sc } from './Articles/c-sc'
import { Gr } from './Articles/c-gr'
import { Ro } from './Articles/c-ro'
import { Ki } from './Articles/c-ki'
import { Ing } from './Articles/c-in'
import { Bot } from './Articles/c-bo'
import { Mod } from './Articles/c-mod'
import { Co } from './Articles/c-co'
import { Do } from './Articles/c-do'
import { En } from './Articles/c-en'
import { Wi } from './Articles/c-wi'
import { LayoutHuge } from './LayoutHuge'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { About } from './Components/About';
import { LayoutAbout } from './LayoutAbout';


function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/UIUX" element={<UIUX />} />
          <Route path="/Graphic" element={<Graphic />} />
          <Route path="/Motion" element={<Motion />} />
          <Route path="/Render" element={<Render />} />
        </Route>
        <Route element={<LayoutAbout />}>
          <Route path="/About" element={<About />} />
        </Route>
        <Route element={<LayoutArt />}>
          <Route path="/Feb" element={<Feb />} />
          <Route path="/Sma" element={<Sma />} />
          <Route path="/Lion" element={<Lion />} />
          <Route path="/Raf" element={<Raf />} />
          <Route path="/Vds" element={<Vds />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Pan" element={<Pan />} />
          <Route path="/Vdp" element={<Vdp />} />
          <Route path="/Cus" element={<Cus />} />
          <Route path="/Env" element={<Env />} />
          <Route path="/Sin" element={<Sin />} />
          <Route path="/Rec" element={<Rec />} />
          <Route path="/Cub" element={<Cub />} />
          <Route path="/Liv" element={<Liv />} />
          <Route path="/Ent" element={<Ent />} />
          <Route path="/Net" element={<Net />} />
          <Route path="/Adr" element={<Adr />} />
          <Route path="/Vmz" element={<Vmz />} />
          <Route path="/Eas" element={<Eas />} />
          <Route path="/Te" element={<Te />} />
          <Route path="/Ma" element={<Ma />} />
          <Route path="/Pu" element={<Pu />} />
          <Route path="/Vq" element={<Vq />} />
          <Route path="/Am" element={<Am />} />
          <Route path="/Vi" element={<Vi />} />
          <Route path="/Ow" element={<Ow />} />
          <Route path="/Bo" element={<Bo />} />
          <Route path="/Cu" element={<Cu />} />
          <Route path="/In" element={<In />} />
          <Route path="/Vo" element={<Vo />} />
          <Route path="/Ac" element={<Ac />} />
          <Route path="/Fi" element={<Fi />} />
          <Route path="/Mi" element={<Mi />} />
          <Route path="/To" element={<To />} />
          <Route path="/Sm" element={<Sm />} />
          <Route path="/Me" element={<Me />} />
          <Route path="/Ha" element={<Ha />} />
        </Route>
        <Route element={<LayoutHuge />}>
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Op" element={<Op />} />
          <Route path="/Sc" element={<Sc />} />
          <Route path="/Mo" element={<Mo />} />
          <Route path="/Gr" element={<Gr />} />
          <Route path="/Ro" element={<Ro />} />
          <Route path="/Ki" element={<Ki />} />
          <Route path="/Ing" element={<Ing />} />
          <Route path="/Bot" element={<Bot />} />
          <Route path="/Mod" element={<Mod />} />
          <Route path="/Co" element={<Co />} />
          <Route path="/Do" element={<Do />} />
          <Route path="/En" element={<En />} />
          <Route path="/Wi" element={<Wi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
