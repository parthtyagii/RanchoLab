import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiPuzzle } from 'react-icons/gi';


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
                <div className="w-[100%] h-[8vh] pl-[2rem] text-white flex justify-start items-center bg-[#261d8a] ">
                    <GiPuzzle className='text-[2.5rem] ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500 '>Build</span>
                </div>

                <div className="w-[100%] h-[65vh] p-[3rem] flex gap-x-[10%] justify-start items-center bg-pink-300 ">

                    <div className="w-[45%] h-[100%] bg-green-500 "></div>
                    <div className="w-[45%] h-[100%] bg-green-500 "></div>

                </div>

                <div className="w-[100%] h-[22vh] bg-orange-300 "></div>

                <div className="w-[100%] h-[15vh] bg-black "></div>

            </div>

        </div>
    )
};

export default Main;