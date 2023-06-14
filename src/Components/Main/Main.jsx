import React, { useEffect, useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiPuzzle, GiRobotGolem } from 'react-icons/gi';
import RobotMaze from '../RobotMaze/RobotMaze';
import Instructions from '../Instructions/Instructions';
import LogicPanel from '../LogicPanel/LogicPanel';
import ControlPanel from '../ControlPanel/ControlPanel';
import Learn from '../Learn/Learn';


const Main = () => {

    const [instructions, setInstructions] = useState(null);
    const [reset, setReset] = useState(true);
    const [maze, setMaze] = useState();
    const [displayInstructions, setDisplayInstructions] = useState([]);


    const Play = (i, x, y, instructions) => {

        while (i < 14 && instructions[i] === '') {
            i++;
        }

        if (i === 14) {
            if (x === 4 && y === 4) {
                let move = '... Robot reached the destination!';
                setDisplayInstructions(displayInstructions => [...displayInstructions, move]);
            }
            else {
                let move = "... Robot hasn't reached the destination!";
                setDisplayInstructions(displayInstructions => [...displayInstructions, move]);
            }
            return;
        }
        else {
            setTimeout(() => {
                let move = '';
                if (instructions[i] === 'left') {
                    if (x !== 0) {
                        x--;
                    }
                    move = 'Robot Move Left';
                }
                else if (instructions[i] === 'right') {
                    if (x !== 4) {
                        x++;
                    }
                    move = 'Robot Move Right';
                }
                else if (instructions[i] === 'up') {
                    if (y !== 0) {
                        y--;
                    }
                    move = 'Robot Move Up';
                }
                else if (instructions[i] === 'down') {
                    if (y !== 4) {
                        y++;
                    }
                    move = 'Robot Move Down';
                }

                setDisplayInstructions(displayInstructions => [...displayInstructions, move]);

                //now
                setMaze(maze => {
                    const count = (y * 5) + x;
                    const sampleMaze = [];
                    for (let i = 0; i < 25; i++) {
                        if (i === count) {
                            if (i !== 24) {
                                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black '><GiRobotGolem /></span>);
                            }
                            else {
                                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black bg-red-500 '><GiRobotGolem /></span>);
                            }
                        }
                        else {
                            if (i !== 24) {
                                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black '></span>);
                            }
                            else {
                                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black bg-red-500 '></span>);
                            }
                        }
                    }
                    return sampleMaze;
                });

                Play(i + 1, x, y, instructions);
            }, 500);
        }
    }

    const setSampleMaze = () => {
        const sampleMaze = [];
        for (let i = 0; i < 25; i++) {
            if (i === 0) {
                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black '><GiRobotGolem /></span>);
            }
            else if (i === 24) {
                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black bg-red-500 '></span>);
            }
            else {
                sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black '></span>);
            }
        }
        setMaze(sampleMaze);
    }

    useEffect(() => {
        const arr = new Array(14).fill('');
        setInstructions(arr);
        setSampleMaze();
    }, []);

    return (
        <div className='w-full h-[115vh] flex flex-col md:flex-row justify-start items-center '>

            <div className="leftPart w-[100%] md:w-[30%] h-[100%] flex flex-col justify-start items-start  ">
                <div className="w-[100%] h-[8vh] pl-[2rem] flex justify-start items-center bg-gray-300 ">
                    <HiOutlineBookOpen className='text-[3.2rem] text-black ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500] text-black '>Learn</span>
                </div>

                <Learn />
            </div>

            <div className="rightPart w-[100%] md:w-[70%] h-[100%] flex flex-col justify-start items-center">
                <div className="w-[100%] h-[8vh] pl-[2rem] text-white flex justify-start items-center bg-[#190a4d] ">
                    <GiPuzzle className='text-[2.5rem] ' />
                    <span className='text-[2.3rem] ml-[1rem] font-[500 '>Build</span>
                </div>

                <div className="w-[100%] h-[70vh] p-[3rem] flex gap-x-[10%] flex-col md:flex-row justify-between items-center bg-[#1a247b] ">

                    <RobotMaze maze={maze} />
                    <Instructions displayInstructions={displayInstructions} />

                </div>

                <div className="w-[100%] h-auto md:h-[22vh] flex flex-col justify-between gap-y-[2rem] md:gap-[0] py-[2rem] px-[3rem] bg-[#5a6bff] ">
                    <div className='w-[100%] text-[1.8rem] font-[600] flex text-white '>Logic Panel</div>

                    <LogicPanel reset={reset} instructions={instructions} setInstructions={setInstructions} />
                </div>

                <ControlPanel setSampleMaze={setSampleMaze} setDisplayInstructions={setDisplayInstructions} Play={Play} instructions={instructions} setInstructions={setInstructions} reset={reset} setReset={setReset} />
            </div>

        </div>
    )
};

export default Main;