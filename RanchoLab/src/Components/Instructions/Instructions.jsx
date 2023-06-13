import React from 'react';



const Instructions = ({ displayInstructions }) => {
    return (
        <div className="w-[45%] h-[100%] flex flex-col justify-start items-center text-white bg-[#190a4d] ">
            <div className="w-[100%] h-auto text-[1.8rem] font-[500] underline px-[2rem] p-[1rem] bg-[#5a6bff] ">Instructions Implemented</div>

            <div className="w-[100%] h-[calc(100%-4.8rem)] flex p-[2rem] ">
                <div className="w-[100%] h-[100%] overflow-y-scroll  flex flex-col justify-start items-start ">
                    {
                        displayInstructions.map((instruct, index) => {

                            let move = '... Robot reached the destination!';

                            if (instruct === move) {
                                return (
                                    <span key={index} className='text-[1.2rem] font-[700] mb-[0.8rem] '>{instruct}</span>
                                );
                            }
                            else {
                                return (
                                    <span key={index} className='text-[1.3rem] font-[500] mb-[0.8rem] '>{instruct}</span>
                                );
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Instructions;