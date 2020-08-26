import React, { Component } from 'react';
import './App.scss';
import Logo from './component-library/components/icon/index'
import Button from './component-library/components/button';
import Accordian from './component-library/components/accordian';
import Tooltip from './component-library/components/tooltip';

class App extends Component {


  render() {
    return (
      <div>

        <Logo />
        Welcome to Credit Tracking
        <Button secondary >Submit</Button>
        <Button >Reset</Button>
        <Button bordered>Bordered</Button>
        <Accordian title='Section 1' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />

        <Accordian title='Section 2' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

        <Accordian title='Section 3' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />

        <Tooltip content='Tooltip dropdown'>My Tooltip</Tooltip>

      </div>
    )
  }
}
export default App;
