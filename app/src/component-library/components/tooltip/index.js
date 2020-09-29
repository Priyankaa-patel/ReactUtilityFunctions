import React, { useState } from 'react';
import './style.scss';
import Button from '../button';

const Tooltip = (props) => {

    const [active, setActive] = useState(false);
    let timeout;
    const { navigationList = [], children, rightSideImage, content, leftAddonLink } = props;


    const showTip = () => {
        // timeout = setTimeout(() => {
        clearInterval(timeout);
        setActive(true);
        //}, 1000);
    }

    const hideTip = () => {
        // clearInterval(timeout);
        //setActive(false);
        timeout = setTimeout(() => {
            setActive(false);
        }, 400);
    };

    return (
        <div className='Tooltip-Wrapper'
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}>

            {/* Wrapping */}
            {children}
            {active && (
                <div className='Tooltip-Tip'>
                    {/* Content */}
                    <div className='leftContent'>
                        <ul>
                            {navigationList.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                        <div className='left-addon'>{leftAddonLink}</div>
                    </div>
                    <div className='rightContent'>
                        <img src={rightSideImage} alt='spendy logo' />
                        <p className='rightSideText'>{content}</p>
                        <Button bordered>Find out how</Button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Tooltip;