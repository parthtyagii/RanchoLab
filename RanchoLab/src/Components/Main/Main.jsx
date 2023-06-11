import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiPuzzle } from 'react-icons/gi';
import { ImArrowDown, ImArrowLeft, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineReplay } from 'react-icons/md';


const Main = () => {

    return (
        <div className='w-full h-[110vh] flex justify-start items-center bg-red-200 '>

            <div className="leftPart w-[30%] h-[100%] flex flex-col justify-start items-start bg-yellow-200  ">
                <div className="w-[100%] h-[8vh] pl-[2rem] flex justify-start items-center bg-gray-300 ">
                    <HiOutlineBookOpen className='text-[3.2rem] text-black ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500] text-black '>Learn</span>
                </div>

                <div className="w-[100%] text-[1.3rem] grow p-[2rem] flex flex-col gap-y-[2rem] justify-start items-center bg-gray-100 ">

                    <ol>
                        <li >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                            voluptatem consequatur aspernatur voluptas architecto provident, impedit id
                            blanditiis rem, iusto hic obcaecati ipsum ab a delectus consectetur! Modi, libero labore?
                        </li>

                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                            voluptatem consequatur aspernatur voluptas architecto provident, impedit id
                            blanditiis rem, iusto hic obcaecati ipsum ab a delectus consectetur! Modi, libero labore?
                        </li>
                    </ol>

                </div>
            </div>

            <div className="rightPart w-[70%] h-[100%] flex flex-col justify-start items-center bg-green-300 ">
                <div className="w-[100%] h-[8vh] pl-[2rem] text-white flex justify-start items-center bg-[#190a4d] ">
                    <GiPuzzle className='text-[2.5rem] ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500 '>Build</span>
                </div>

                <div className="w-[100%] h-[65vh] p-[3rem] flex gap-x-[10%] justify-start items-center bg-[#1a247b] ">

                    <div className="w-[45%] h-[100%] grid grid-rows-5 grid-cols-5 justify-items-center items-center border-[1px] border-black bg-[#ffc700] ">
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                        <span className='w-[100%] h-[100%] border-[1px] border-black '></span>
                    </div>

                    <div className="w-[45%] h-[100%] bg-[#190a4d] ">
                        <div className="w-[100%] h-auto text-[1.8rem] font-[500] text-white underline px-[2rem] p-[1rem] bg-[#5a6bff] ">Instructions Implemented</div>
                    </div>

                </div>

                <div className="w-[100%] h-[22vh] flex flex-col justify-between py-[2rem] px-[3rem] bg-[#5a6bff] ">
                    <div className='w-[100%] text-[1.6rem] font-[700] flex text-white '>Logic Panel</div>

                    <div className='w-[100%] grow flex gap-x-[1rem] justify-start items-end '>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                        <span className='w-[4.5rem] h-[4.5rem] rounded-[0.3rem] bg-gray-200 '></span>
                    </div>
                </div>

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

            </div>

        </div>
    )
};

export default Main;