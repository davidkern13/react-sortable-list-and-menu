import React, { Suspense, lazy } from 'react';

import LayoutContent from '../../layout';
import Loading from '../../lib/loading';

const ContactsContainer = lazy(() => import('../Contacts'));

const MainContainer = () => {

    return (
        <LayoutContent>

            <Suspense fallback={<Loading />}>
                <ContactsContainer />
            </Suspense>

        </LayoutContent>
    )
}
export default MainContainer;