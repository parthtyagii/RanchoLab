import React from 'react';
import { ImArrowDown, ImArrowLeft, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineReplay } from 'react-icons/md';

const ControlPanel = () => {
    return (
        <div className="w-[100%] h-[15vh] flex gap-x-[1rem] justify-start items-center py-[2rem] px-[2rem] bg-[#190a4d] ">
            <button className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowLeft />
            </button>
            <button className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowUp />
            </button>
            <button className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowDown />
            </button>
            <button className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowRight />
            </button>
            <button className='min-w-[4.8rem] h-[4.8rem] text-[2.1rem] font-[500] ml-[2rem] px-[2rem] p-[1rem] flex gap-x-[1rem] justify-center items-center rounded-[0.2rem] text-[#5a6bff] bg-[#ffc700] '>
                <FaPlay />
                <span >Play</span>
            </button>
            <button className='w-[4.8rem] h-[4.8rem] text-[3rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] text-[#5a6bff] bg-[#ffc700] '>
                <MdOutlineReplay />
            </button>
        </div>
    )
};

export default ControlPanel;