import React, { useEffect, useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { GiPuzzle, GiRobotGolem } from 'react-icons/gi';
import RobotMaze from '../RobotMaze/RobotMaze';
import Instructions from '../Instructions/Instructions';
import LogicPanel from '../LogicPanel/LogicPanel';
import ControlPanel from '../ControlPanel/ControlPanel';
import LogicPanelItem from '../LogicPanel/LogicPanelItem';
import { ImArrowDown, ImArrowLeft, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { FaPlay } from 'react-icons/fa';
import { MdAirlineSeatIndividualSuite, MdOutlineReplay } from 'react-icons/md';

const Main = () => {

    const [instructions, setInstructions] = useState(null);
    const [reset, setReset] = useState();
    const [maze, setMaze] = useState();
    const [displayInstructions, setDisplayInstructions] = useState([]);


    const handleDragStart = (e, arrow) => {
        e.dataTransfer.setData('arrow', arrow);
    }

    const Play = (i, x, y, instructions) => {

        while (i < 14 && instructions[i] === '') {
            i++;
        }

        if (i === 14) {
            if (x === 4 && y === 4) {
                let move = '... Robot reached the destination!';
                setDisplayInstructions(displayInstructions => [...displayInstructions, move]);
            }
            return;
        }
        else {
            setTimeout(() => {
                let move = '';
                if (instructions[i] === 'left' && x !== 0) {
                    x--;
                    move = 'Robot Move Left';
                }
                else if (instructions[i] === 'right' && x !== 4) {
                    x++;
                    move = 'Robot Move Right';
                }
                else if (instructions[i] === 'up' && y !== 0) {
                    y--;
                    move = 'Robot Move Up';
                }
                else if (instructions[i] === 'down' && y !== 4) {
                    y++;
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
        console.log('reset called!')
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
        setReset(true);
        setSampleMaze();
    }, []);

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
                        </span>
                    </div>

                    <div className='w-[100%] flex '>
                        <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>2.</span>
                        <span className='text-[1.3rem] font-[500] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed adipisci
                        </span>
                    </div>

                    <div className='w-[100%] flex '>
                        <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>3.</span>
                        <span className='text-[1.3rem] font-[500] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed adipisci
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

                    <RobotMaze maze={maze} instructions={instructions} />
                    <Instructions displayInstructions={displayInstructions} />

                </div>

                <div className="w-[100%] h-[22vh] flex flex-col justify-between py-[2rem] px-[3rem] bg-[#5a6bff] ">
                    <div className='w-[100%] text-[1.8rem] font-[700] flex text-white '>Logic Panel</div>

                    <div className='w-[100%] grow flex gap-x-[1rem] justify-start items-end '>
                        <LogicPanelItem index={0} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={1} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={2} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={3} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={4} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={5} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={6} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={7} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={8} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={9} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={10} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={11} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={12} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                        <LogicPanelItem index={13} reset={reset} instructions={instructions} setInstructions={setInstructions} />
                    </div>
                </div>

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

            </div>

        </div>
    )
};

export default Main;

































// let x = 0, y = 0, i = 0;
// while (i < 14) {
//     if (instructions[i] !== '') {
//         setTimeout(() => {

//             if (instructions[i] === 'left' && x !== 0) {
//                 x--;
//             }
//             else if (instructions[i] === 'right' && x !== 3) {
//                 x++;
//             }
//             else if (instructions[i] === 'up' && y !== 0) {
//                 y--;
//             }
//             else if (instructions[i] === 'down' && y !== 3) {
//                 y++;
//             }

//             console.log(x, y);

//             //now
//             const count = (y * 5) + x;
//             const sampleMaze = [];
//             for (let i = 0; i < 25; i++) {
//                 if (i === count) {
//                     if (i !== 24) {
//                         sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black '><GiRobotGolem /></span>);
//                     }
//                     else {
//                         sampleMaze.push(<span key={i} className='w-[100%] h-[100%] flex justify-center items-center text-[4rem] border-[1px] border-black bg-red-500 '><GiRobotGolem /></span>);
//                     }
//                 }
//             }
//             setMaze(sampleMaze);
//             i++;
//         }, 1000);
//     }
//     else {
//         i++;
//     }
// }
// setCanPlay(false);