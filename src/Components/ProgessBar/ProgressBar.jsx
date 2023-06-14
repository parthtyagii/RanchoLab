import React, { useEffect, useState } from 'react';


function ProgressBar() {

    const [bar, setBar] = useState([]);

    const getProgressBar = () => {
        let arr = [];
        for (let i = 0; i < 13; i++) {

            if (i < 6) {
                arr.push(
                    <div key={i} className="w-auto h-auto z-[1] flex flex-col bg-transparent ">
                        <span className='w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem] border-[1px] border-gray-300 rounded-[50%] bg-green-500'></span>
                        <span className='w-full flex justify-center text-white mt-[2px] text-[0.8rem] font-[400] '>{i + 1}</span>
                    </div>
                );
            }
            else if (i === 6) {
                arr.push(
                    <div key={i} className="w-auto h-auto z-[1] flex flex-col bg-transparent ">
                        <span className='w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem] border-[1px] border-gray-300 rounded-[50%] bg-[#ffc700]'></span>
                        <span className='w-full flex justify-center text-white mt-[2px] text-[0.8rem] font-[400] '>{i + 1}</span>
                    </div>
                );
            }
            else {
                arr.push(
                    <div key={i} className="w-auto h-auto z-[1] flex flex-col bg-transparent ">
                        <span className='w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem] border-[1px] border-gray-300 rounded-[50%] bg-gray-300 '></span>
                        <span className='w-full flex justify-center text-white mt-[2px] text-[0.8rem] font-[400] '>{i + 1}</span>
                    </div>
                );
            }
        }
        setBar(arr);
    }


    useEffect(() => {
        getProgressBar();
    }, [])

    return (
        <div className='w-[100%] h-[100%] flex justify-center items-center  '>
            <div className="w-auto h-auto relative flex gap-x-[3rem] justify-start items-center ">

                {bar}

                <span className="w-[100%] absolute z-[0] top-[0.5rem] md:top-[0.75rem] border-[1px] border-gray-300 "></span>
            </div>
        </div>
    )
};

export default ProgressBar;