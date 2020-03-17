import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import InputText from '../../components/Inputs/InputText';

import { setSearchItem } from '../../store/search-item/action';

import './style.scss';

const AutoComplete = () => {
    const dispatch = useDispatch();

    const [inputValue , setInputValue] = useState('');

    const handleChange = e => {
        const {value} = e.target

        setInputValue(value);

        dispatch(setSearchItem(value));
    }

    return (
         <div className={'autocomplete-container'}>
            <InputText
                name={'input_value'}
                value={inputValue}
                placeholder={'Search ...'}
                onChange={handleChange}
            />
         </div>
    );
}

export default AutoComplete;