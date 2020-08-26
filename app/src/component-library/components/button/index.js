import React from 'react';
import './style.scss';

const Button = (props) => {
    //let { btnType } = props;
    let { secondary, bordered } = props;

    return (
        //  <button className={`button${btnType ? ' button-' + btnType : ' button-primary'}`}>
        <button className=
            {`button${secondary ? ' button-secondary' : ' button-primary'}
        ${bordered ? 'bordered' : ''}
        `}>
            {props.children}
        </button >
    );
}

export default Button;