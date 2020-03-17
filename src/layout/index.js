import React from 'react';
import './style.scss';

import Navigation from '../navigation-bar';

function LayoutContent(props){

    return (
        <div className={'layout-container'}>
            <div className={'main-wrap'}>
                <Navigation />
                <div className={'content-container'}>
                    <div className={'component-content'}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutContent;