import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../icon/index'
import './style.scss';
import Tooltip from '../tooltip';
import BoostRocket from './graphic-boost-rocket.png'

const Navbar = () => {
    const Reports = [
        'Free Credit Report',
        'Free Credit Score',
        'Free Credit Monitoring',
        'Experian Boost',
        'Experian CreditLock',
        '3 Bureau Credit Report and Scores'
    ];
    return (
        <nav>
            <Link to='/' exact>
                <Logo />
            </Link>
            <Tooltip
                navigationList={Reports}
                rightSideImage={BoostRocket}
                content='Instantly increase your credit scores for free.'
                leftAddonLink='Compare All Products'>
                <Link to='/reports_scores' className='navStyle'>Reports & Scores</Link>
            </Tooltip>
            <Link to='/indentity_theft_protection' className='navStyle'>Indentity Theft Protection</Link>
            <Link to='/credit_cards_loans' className='navStyle'>Credit Cards & Loans</Link>
            <Link to='/credit_support' className='navStyle'>Credit Support</Link>
            <Link to='/education' className='navStyle'>Education</Link>
        </nav>
    );
}

export default Navbar;