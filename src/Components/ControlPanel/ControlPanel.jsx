import React from 'react';
import { ImArrowDown, ImArrowLeft, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineReplay } from 'react-icons/md';

const ControlPanel = ({ setSampleMaze, setDisplayInstructions, Play, instructions, setInstructions, reset, setReset }) => {

    const handleDragStart = (e, arrow) => {
        e.dataTransfer.setData('arrow', arrow);
    }

    const playHandler = () => {
        setSampleMaze();
        setDisplayInstructions([]);
        Play(0, 0, 0, instructions);
    }

    const resetHandler = () => {
        const arr = new Array(14).fill('');
        setInstructions(arr);
        setReset(!reset);
        setSampleMaze();
        setDisplayInstructions([]);
    }

    return (
        <div className="w-[100%] h-[15vh] flex gap-x-[1rem] justify-start items-center py-[2rem] px-[2rem] bg-[#190a4d] ">
            <button draggable={true} onDragStart={(e) => handleDragStart(e, 'left')} className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowLeft />
            </button>
            <button draggable={true} onDragStart={(e) => handleDragStart(e, 'up')} className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowUp />
            </button>
            <button draggable={true} onDragStart={(e) => handleDragStart(e, 'down')} className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowDown />
            </button>
            <button draggable={true} onDragStart={(e) => handleDragStart(e, 'right')} className='w-[4.8rem] h-[4.8rem] text-[2.2rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] bg-gray-200 '>
                <ImArrowRight />
            </button>
            <button onClick={() => playHandler()} className='min-w-[4.8rem] h-[4.8rem] text-[2.1rem] font-[500] ml-[2rem] px-[2rem] p-[1rem] flex gap-x-[1rem] justify-center items-center rounded-[0.2rem] text-[#5a6bff] bg-[#ffc700] '>
                <FaPlay />
                <span>Play</span>
            </button>
            <button onClick={() => resetHandler()} className='w-[4.8rem] h-[4.8rem] text-[3rem] p-[1rem] flex justify-center items-center rounded-[0.2rem] text-[#5a6bff] bg-[#ffc700] '>
                <MdOutlineReplay />
            </button>
        </div>
    )
};

export default ControlPanel;