import React, { useEffect, useState } from 'react';
import LogicPanelItem from './LogicPanelItem';


const LogicPanel = ({ instructions, setInstructions }) => {

    return (
        <div className="w-[100%] h-[22vh] flex flex-col justify-between py-[2rem] px-[3rem] bg-[#5a6bff] ">
            <div className='w-[100%] text-[1.8rem] font-[700] flex text-white '>Logic Panel</div>

            <div className='w-[100%] grow flex gap-x-[1rem] justify-start items-end '>
                <LogicPanelItem index={0} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={1} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={2} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={3} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={4} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={5} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={6} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={7} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={8} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={9} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={10} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={11} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={12} instructions={instructions} setInstructions={setInstructions} />
                <LogicPanelItem index={13} instructions={instructions} setInstructions={setInstructions} />
            </div>
        </div>
    )
};

export default LogicPanel;