import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiPuzzle } from 'react-icons/gi';
import RobotMaze from '../RobotMaze/RobotMaze';
import Instructions from '../Instructions/Instructions';
import LogicPanel from '../LogicPanel/LogicPanel';
import ControlPanel from '../ControlPanel/ControlPanel';


const Main = () => {

    return (
        <div className='w-full h-[115vh] flex justify-start items-center bg-red-200 '>

            <div className="leftPart w-[30%] h-[100%] flex flex-col justify-start items-start bg-yellow-200  ">
                <div className="w-[100%] h-[8vh] pl-[2rem] flex justify-start items-center bg-gray-300 ">
                    <HiOutlineBookOpen className='text-[3.2rem] text-black ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500] text-black '>Learn</span>
                </div>

                <div className="w-[100%] text-[1.3rem] grow p-[2rem] flex flex-col gap-y-[0rem] justify-start items-center bg-gray-100 ">
                    <div className='w-[100%] flex '>
                        <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>1.</span>
                        <span className='text-[1.3rem] font-[500] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed adipisci
                            delectus nostrum aspernatur ipsum eius sunt ratione. Hic earum dolore voluptas
                            incidunt reprehenderit rem voluptate unde velit. Quia, distinctio!
                        </span>
                    </div>

                    <div className='w-[100%] flex '>
                        <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>2.</span>
                        <span className='text-[1.3rem] font-[500] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed adipisci
                            delectus nostrum aspernatur ipsum eius sunt ratione. Hic earum dolore voluptas
                            incidunt reprehenderit rem voluptate unde velit. Quia, distinctio!
                        </span>
                    </div>

                    <div className='w-[100%] flex '>
                        <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>3.</span>
                        <span className='text-[1.3rem] font-[500] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed adipisci
                            delectus nostrum aspernatur ipsum eius sunt ratione. Hic earum dolore voluptas
                            incidunt reprehenderit rem voluptate unde velit. Quia, distinctio!
                        </span>
                    </div>
                </div>
            </div>

            <div className="rightPart w-[70%] h-[100%] flex flex-col justify-start items-center bg-green-300 ">
                <div className="w-[100%] h-[8vh] pl-[2rem] text-white flex justify-start items-center bg-[#190a4d] ">
                    <GiPuzzle className='text-[2.5rem] ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500 '>Build</span>
                </div>

                <div className="w-[100%] h-[70vh] p-[3rem] flex gap-x-[10%] justify-start items-center bg-[#1a247b] ">

                    <RobotMaze />
                    <Instructions />

                </div>

                <LogicPanel />

                <ControlPanel />

            </div>

        </div>
    )
};

export default Main;