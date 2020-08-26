import React, { useState, useRef } from 'react';
import './style.scss';

const Accordian = (props) => {

    const { title, content } = props;
    const [activeState, setActiveState] = useState('');
    const [heightState, setHeightState] = useState('0px');

    const contentRef = useRef(null);

    const toggleAccordian = () => {
        setActiveState(activeState === '' ? 'active' : '');
        setHeightState(activeState === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`);

    }

    return (
        <div>
            <button className={`accordion ${activeState}`} onClick={toggleAccordian}>{title}</button>
            <div ref={contentRef} style={{ maxHeight: `${heightState}` }} className="panel">
                <div className='panel_text'>{content}</div>

            </div>


        </div>
    );
}

export default Accordian;