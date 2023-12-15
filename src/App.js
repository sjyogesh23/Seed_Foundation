import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {AboutUs} from "./Components/AboutUs/AboutUs"
import {Initiative} from "./Components/Initiative"
import {Home} from "./Components/Home"
import {Videos} from "./Components/Training/Videos/Videos"
import {Articals} from "./Components/Training/Articals"
import {Podcast} from "./Components/Training/Podcast"
import {Internship} from "./Components/Training/Internship"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Footer } from './Components/Footer/Footer';
import { Navibar } from './Components/Navibar/Navibar';
import { SignUp } from './Components/SignUp';

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div className="App">
      <Navibar/>
      <SignUp/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Initiative' element={<Initiative/>}/>
          <Route path='/Training/Videos' element={<Videos/>}/>
          <Route path='/Training/Articals' element={<Articals/>}/>
          <Route path='/Training/Podcast' element={<Podcast/>}/>
          <Route path='/Training/Internship' element={<Internship/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>  
  );
}

export default App;