import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Img from '../../components/Image';
import LazyImage from '../../lib/LazyImage';

import { unloadedSrc, emptyList } from '../../enum';
import { getLogoByDriverType, charLimit } from '../../utils';

const default_chars = 15;
const default_phone = 22;
const default_email = 32;

const GridList = ({ list = [] }) => {
    return (
        <>
         <div id={'GridList'} className={'grid-container'}>
            {
                list.length > 0 && list && list.map( (item, idx) => {
                    return (
                        <div className={'grid-item'} key={item.name + idx}>
                            <div className={'item-wrap'}>
                                <div className={'item-img'}>
                                    <LazyImage unloadedSrc={unloadedSrc} src={item.profile_image} alt={`${item.name}`} />
                                </div>
                                <div className={'item-content'}>
                                    <Img src={getLogoByDriverType(item.driverType)} alt={item.name} />
                                    <h3>{charLimit(item.name, default_chars)}</h3>
                                    <p>Driver rank: {charLimit(item.driverRank, default_chars)}</p>
                                    <p>Phone number: {charLimit(item.phone, default_phone)}</p>
                                    <p>Email: {charLimit(item.phone, default_email)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
         </div>

        { !list.length && <div className={'EmptyList'}><Img src={emptyList} alt={'List is empty'}/> <p>List is empty</p></div>}

     </>

    );
}

GridList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default React.memo(GridList);
