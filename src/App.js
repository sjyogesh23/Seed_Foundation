import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { AboutUs } from "./Components/AboutUs/AboutUs"
import { Initiative } from "./Components/Initiative/Initiative"
import { Home } from "./Components/Home/Home"
import { Footer } from './Components/Footer/Footer';
import { Navibar } from './Components/Navibar/Navibar';
import { ForgotPassword } from './Components/Sign/ForgotPassword';
import { SignIn } from './Components/Sign/SignIn';
import { SignUp } from './Components/Sign/SignUp';
import { Activity } from './Components/Activity/Activity';
import { Team } from './Components/Team/Team';
import { Contact } from './Components/Contact/Contact';
import { Profile } from './Components/Profile/Profile';
import { NotFound } from './Components/NotFound/NotFound';
import { SignPage } from './Components/Sign/SignPage';
import { OTP_Signup} from './Components/Sign/OTP_Signup'
import ProtectedRoute from './ProtectedRoute'


function App() {
 const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    // const storedUserData = localStorage.getItem('userData');
    // if (storedUserData) {
    //   setUserData(JSON.parse(storedUserData));
    // }
    Aos.init();
  }, []);
  
  // const useAuth = () => {
  //   const user = { loggedIn: userData };
  //   console.log('User', user)
  //   return user && user.loggedIn;
  // }

  // const ProtectedRoutes = () => {
  //   const isAuth = useAuth();
  //   return isAuth ? <Outlet /> : <Navigate to="/SignIn" replace/>;
  // }
  
  return (
    <div className="App">
      <Navibar/> 
      {/* useAuth={useAuth()} */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/about' element={<AboutUs />} />

          <Route path='/Activity' element={<Activity />} />
          <Route path='/Activities' element={<Activity />} />

          <Route path='/Team' element={<Team />} />
          <Route path='/Initiative' element={<Initiative />} />
          <Route path='/Initiatives' element={<Initiative />} />

          <Route path='/Contact' element={<Contact />} />
          <Route path='/ContactUs' element={<Contact />} />

          <Route path='/SignIn' element={<SignIn setUserData={setUserData}/>} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/VerifyEmail' element={<OTP_Signup />} />
          
          <Route path='/Sign' element={<SignPage />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='*' element={<NotFound />} />

          {/* <Route element={<ProtectedRoutes />}> */}
          {/* <ProtectedRoutes path='/Profile' element={<Profile setUserData={setUserData} userData={userData} />} /> */}
          {/* <ProtectedRoute path="/Profile" element={<Profile />} /> */}
          {/* </Route>  */}

          
        </Routes>
      </BrowserRouter>
      <div className="total_footer">
        <Footer/>
        {/* useAuth={useAuth()} */}
      </div>
    </div>
  );
}

export default App;
