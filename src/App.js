import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {AboutUs} from "./Components/AboutUs/AboutUs"
import {Initiative} from "./Components/Initiative/Initiative"
import {Home} from "./Components/Home"
import {Articals} from "./Components/Training/Articals/Articals"
import { Podcast } from './Components/Training/Podcast/Podcast';
import {Internship} from "./Components/Training/Internship/Internship"
import { Footer } from './Components/Footer/Footer';
import { Navibar } from './Components/Navibar/Navibar';
import { EachVideo } from './Components/Training/Videos/EachVideo';
import { Videos } from './Components/Training/Videos/Videos';
import SignIn from './Components/Training/Sign/SignIn';
import SignUp from './Components/Training/Sign/SignUp';
import { EachInitiative } from './Components/Initiative/EachInitiative';
import { ForgotPassword } from './Components/Training/Sign/ForgotPassword';

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div className="App">
      <Navibar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Initiative' element={<Initiative/>}/>
          <Route path='/Training/Videos' element={<Videos/>}/>
          <Route path='/Training/Articals' element={<Articals/>}/>
          <Route path='/Training/Podcast' element={<Podcast/>}/>
          <Route path='/Training/Internship' element={<Internship/>}/>
          <Route path='/EachVideo' element={<EachVideo/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/EachInitiative' element={<EachInitiative/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>  
  );
}

export default App;