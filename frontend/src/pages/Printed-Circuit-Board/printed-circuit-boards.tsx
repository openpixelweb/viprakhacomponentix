import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import PrintedcircuitboardMain from '../../features/Printedcircuitboard/PrintedcircuitboardMain';

const Printedcircuitboard: React.FC = () => {
    return (
        <>
            <Banner title='Printed Circuit Boards' subTitle='Service' thirdTitle='Printed Circuit Board' />
            <PrintedcircuitboardMain />
            <FooterOne />
        </>
    );
};

export default Printedcircuitboard;