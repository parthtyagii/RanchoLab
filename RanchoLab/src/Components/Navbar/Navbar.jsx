import React from 'react';
import logo from './logo.jpg';


const Navbar = () => {

  return (
    <div className='w-full h-[10vh] flex bg-[#1b1464] '>


      <div className="w-[20%] h-[100%] flex justify-start items-center  ">
        <img className='h-[60%] border-2 ml-[2rem] border-white ' src={logo} alt="logo" />
      </div>

      <div className="w-[80%] h-[100%] text-white text-[2rem] flex justify-start items-center ">
        {/* Progress Bar */}
      </div>


    </div>
  )
};

export default Navbar;