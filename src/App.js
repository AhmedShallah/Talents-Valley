import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/Sign-up/SignUp';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/Sign-in/SignIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import CodeForgotPass from './components/CodeForgotPass/CodeForgotPass';
import CreateNewPassword from './components/CreateNewPassword/CreateNewPassword';
import PasswordReset from './components/ResetPassword/PasswordReset';
import Verify from './components/Verify/Verify';
import EmailVerifaction from './components/EmailVerifcation/EmailVerifaction';
import EmailIsVarify from './components/EmailVerifcation/EmailIsVarify';
import PhoneVerifcation from './components/PhoneVerifcation/PhoneVerifcation';
import PhoneIsVerify from './components/PhoneVerifcation/PhoneIsVerify';
import IdVerify from './components/IdVerifcation/IdVerify';
import AddresVerifcation from './components/AddresVerify/AddresVerifcation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Invoice from './components/Records/Invoice';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='home' element={<Home />}/>
        <Route path='/forgotPassword' element={<ForgotPassword />}/>
        <Route path='/codeForgot' element={<CodeForgotPass />}/>
        <Route path='/createNewPassword' element={<CreateNewPassword />}/>
        <Route path='/passwordReset' element={<PasswordReset />}/>
        <Route path='/verify' element={<Verify />}/>
        <Route path="/email-verifcation" element={<EmailVerifaction />}/>
        <Route path='/email-is-verify' element={<EmailIsVarify />}/>
        <Route path='/phone-verifcation' element={<PhoneVerifcation />}/>
        <Route path='/phone-is-verify' element={<PhoneIsVerify />}/>
        <Route path='/id-verifcation' element={<IdVerify />}/>
        <Route path='/address-verifcation' element={<AddresVerifcation />}/>
        <Route path='/invoice-records' element={<Invoice />}/>
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
