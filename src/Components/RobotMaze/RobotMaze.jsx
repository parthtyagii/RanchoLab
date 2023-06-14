import React from 'react';
import { GiRobotGolem } from 'react-icons/gi';



const RobotMaze = ({ maze }) => {

    return (
        <div className="w-[100%] h-[48%] md:w-[45%] md:h-[100%] grid grid-rows-5 grid-cols-5 justify-items-center items-center border-[1px] border-black bg-[#ffc700] ">
            {maze}
        </div>
    )
};

export default RobotMaze;