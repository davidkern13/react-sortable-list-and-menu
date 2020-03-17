import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import LoadingSpinner from '../../lib/loading';
import { filterList } from '../../utils';

const GridList = lazy(() => import('../../components/GridList'));

const ContactsList = () => {
    let { contact_list, search_item } = useSelector(state => state);

    const [contactList , setContactList] = useState([]);
    const [searchItem , setSearchItem] = useState('');

    useEffect( () => {
        setContactList(contact_list);
     }, [contact_list]);

    useEffect( () => {
        setSearchItem(search_item);
     }, [search_item]);

    const listToShow = () => {
        let data = contactList.data || [];
        let search_value = searchItem.value || false;

        if(data.length > 0 && search_value){
            let filtered_data = filterList(contactList.data, search_value);
            return filtered_data;
        }
        return contactList.data;
    }

    return (
         <div className={'contact-list-container'}>
            <Suspense fallback={<LoadingSpinner />}>
                <GridList
                    list={listToShow()}
                />
            </Suspense>
         </div>
    );
}

export default ContactsList;
