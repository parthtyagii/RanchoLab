import React, { useEffect, useState } from 'react';
import LogicPanelItem from './LogicPanelItem';


const LogicPanel = ({ reset, instructions, setInstructions }) => {

    return (
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
    )
};

export default LogicPanel;