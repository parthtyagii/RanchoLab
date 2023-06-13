import React, { useEffect, useRef, useState } from 'react';
import { ImArrowDown, ImArrowLeft, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';



const LogicPanelItem = ({ setInstructions, instructions, index, reset }) => {

    const item = useRef();
    const [arrow, setArrow] = useState();

    const dragOver = (e) => {
        e.preventDefault();
        // console.log('dragging over!');
    }

    const onEnter = (e) => {
        // console.log('entered!');
    }

    const dragLeave = (e) => {
        // item.current.style.backgroundColor = '#EEEEEE';
    }

    const dropHandler = (e) => {
        // console.log('dropped!');
        console.log(e.dataTransfer.getData('arrow'));
        setArrow(e.dataTransfer.getData('arrow'));

        let arr = [...instructions];
        arr[index] = e.dataTransfer.getData('arrow');
        // console.log(index, arr);
        setInstructions(arr);
    }

    useEffect(() => {
        setArrow(null);
    }, [reset]);

    return (
        <span ref={item} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDragEnter={(e) => onEnter(e)} onDrop={(e) => dropHandler(e)} className='w-[4.5rem] h-[4.5rem] text-[1.8rem] flex justify-center items-center rounded-[0.3rem] bg-gray-200 '>
            {(arrow === 'up') && <ImArrowUp />}
            {(arrow === 'down') && <ImArrowDown />}
            {(arrow === 'left') && <ImArrowLeft />}
            {(arrow === 'right') && <ImArrowRight />}
        </span>
    )
}

export default LogicPanelItem;