import React from 'react';
import logo from './logo.jpg';
import ProgressBar from '../ProgessBar/ProgressBar';


const Navbar = () => {

  return (
    <div className='w-full h-[20vh] md:h-[10vh] flex flex-col items-start md:flex-row bg-[#1b1464] '>


      <div className="w-[100%] h-[50%] md:w-[30%] md:h-[100%] flex justify-center md:justify-start items-center ">
        <img className=' h-[80%] md:h-[70%] border-2 md:ml-[2rem] border-white ' src={logo} alt="logo" />
      </div>

      <div className="w-[100%] h-[50%] md:w-[70%] md:h-[100%] text-[2rem] flex justify-start items-center ">
        <ProgressBar />
      </div>


    </div>
  )
};

export default Navbar;