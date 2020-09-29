import React from 'react';
import SpendyLogo from './spendy-icon.png'
import './style.scss';

function Logo() {
  return (
    <div style={{ width: '50%', padding: '10px' }}>
      <img src={SpendyLogo} alt='spendy logo' />
    </div>
  )
}

export default Logo;