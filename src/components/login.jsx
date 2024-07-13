import { useState } from 'react';
import TextInput from './textInput'
import emailIcon from '../assets/emailIcon.svg';
import passwordIcon from '../assets/lock-2.svg';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

    return (
              <div className="top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 bg-secondaryBackground_Dark rounded-[16px] border-solid border-[1px] border-primaryBorder_Dark gap-[20px] p-[24px] h-[468px] w-[474px] absolute text-primaryText_Dark">
                <div className="flex flex-col items-center gap-[20px] justify-center">
                    <img className="w-[186.63px] h-[52px]" src="src\assets\logo.svg" alt="" />
                    <div>
                        <p className="text-center font-semiBold text-xl">Welcome Back</p>
                        <div className="gap-[4px] flex flex-row text-center text-md font-medium"> <p className="text-primaryPlaceholderText_Light">Don’t have an account yet?</p> <a href="">Sign Up</a></div>
                    </div>
                    <form className='flex flex-col gap-[20px] w-full' onSubmit={handleSubmit}>
                      <TextInput icon={emailIcon} placeholder="Email Address" type="email" value={email} onChange = {(e) => setEmail(e.target.value)} />
                      <TextInput icon={passwordIcon} placeholder="Password" type="password" value={password} onChange = {(e) => setPassword(e.target.value)} />
                      <button className='text-darkText_Light font-regular text-md h-[44px] w-full rounded-[8px] bg-warningText_Dark hover:bg-brandHoverSurface_Light transition duration-500 ease-in-out' type="submit">Login</button>
                    </form>
                    <div className="inline-flex items-center justify-center h-[20px] w-full">
                      <hr className="w-full h-px my-8 bg-gray-200 border-0 bg-primaryBorder_Dark"/>
                      <span className='absolute px-4 font-regular text-md text-primaryPlaceholderText_Light -translate-x-1/2 bg-secondaryBackground_Dark left-1/2'>or</span>
                    </div>
                    <button className='flex justify-center gap-[8px] border-[1px] border-primaryBorder_Dark  py-[12px] px-[20px] h-[44px] w-full rounded-[8px] bg-transparent hover:bg-primaryActiveSurface_dark transition duration-500 ease-in-out' type="submit"><img className='w-[13.53] h-[14.85]' src="src\assets\googleLogo.svg" alt="" /> <span className='text-md font-regular'>Authorize with Google</span></button>
                  </div>
              </div>
      </div>

  
    )
  }

  //TODO: STANDARDIZIRAJ BG I BUTONE AKA PRETVORI U KOMPONENTE