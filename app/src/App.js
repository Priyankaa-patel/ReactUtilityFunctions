import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Button from './component-library/components/button';
import Accordian from './component-library/components/accordian';
import Tooltip from './component-library/components/tooltip';
import Navbar from './component-library/components/navbar';
import ReportsScores from './component-library/components/ReportsScores';
import IndentityTheftProtection from './component-library/components/IndentityTheftProtection';
import CreditCardsLoans from './component-library/components/CreditCardsLoans';
import CreditSupport from './component-library/components/CreditSupport';
import Education from './component-library/components/Education';


class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/reports_scores' component={ReportsScores} />
            <Route path='/indentity_theft_protection' component={IndentityTheftProtection} />
            <Route path='/credit_cards_loans' component={CreditCardsLoans} />
            <Route path='/credit_support' component={CreditSupport} />
            <Route path='/education' component={Education} />
          </Switch>
        </Router>

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


      </div>
    )
  }
}
export default App;
