import React from 'react';



const Learn = () => {

    return (
        <div className="w-[100%] text-[1.3rem] grow p-[2rem] flex flex-col gap-y-[0rem] justify-start items-center bg-gray-100 ">
            <div className='w-[100%] flex '>
                <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>1.</span>
                <span className='text-[1.3rem] font-[500] '>
                    Set the starting position: Drag and place the sprite on the stage to set its initial 
                    position. Click and drag the sprite position it where you want it to start.
                </span>
            </div>

            <div className='w-[100%] flex '>
                <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>2.</span>
                <span className='text-[1.3rem] font-[500] '>
                    Add Movement blocks: In the block platte on the left side of the screen, locate the "Motion" 
                    category. You will find blocks like "Move 10 steps," "Turn 15 degrees," and "Go to x:[] y:[]."
                </span>
            </div>

            <div className='w-[100%] flex '>
                <span className='mr-[1rem] text-[1.3rem] font-[500] h-[100%] '>3.</span>
                <span className='text-[1.3rem] font-[500] '>
                    Use the "Go to x:[] y:[]" block: Drag to "Go to x:[] y:[]" block into the scripting area. 
                    Set the x and y values of the block to coordinates of the target position you want the 
                    sprite to move to. For example, if you want the sprite to move to position (200,100), 
                    set the x value to 200 and the y value to 100.
                </span>
            </div>
        </div>
    )
};

export default Learn;