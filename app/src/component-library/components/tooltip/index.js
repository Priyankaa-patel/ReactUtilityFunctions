import React, { useState } from 'react';
import './style.scss';

const Tooltip = (props) => {

    const [active, setActive] = useState(false);
    let timeout;


    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, 400);
    }

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);

    };





    return (
        <div className='Tooltip-Wrapper'
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}>

            {/* Wrapping */}
            {props.children}
            {active && (
                <div className='Tooltip-Tip'>
                    {/* Content */}
                    {props.content}
                </div>)
            }
        </div>
    );
}

export default Tooltip;