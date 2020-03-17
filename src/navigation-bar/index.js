import React, { useState } from 'react';
import './style.scss';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import AutoComplete from '../containers/AutoComplete';

const NavigationBar = () => {

    const [show, setShow] = useState(false);


    return (
        <header>
            <div className={`side-bar open-menu__${show}`}>
                <div className={'logo-navbar'}>
                   <Logo
                       logoText={'Contact List'}
                   />
                </div>
                <div className={'navi-navbar'}>
                    <Navigation />
                </div>
            </div>

            <div className={'autocomplete-navbar'}>
                <AutoComplete />
            </div>

            <div className={'hamburger'} onClick={() => setShow(!show)}>
              <label>
              <span></span>
              <span></span>
              <span></span>
              </label>
            </div>
        </header>
    );
}

export default NavigationBar;
