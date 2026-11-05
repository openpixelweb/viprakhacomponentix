import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import SmarthomecontrollerMain from '../../features/Smarthomecontrollers/SmarthomecontrollerMain';

const Smarthomecontroller: React.FC = () => {
    return (
        <>
            <Banner title='Smart Home Controllers' subTitle='Smart Home Controllers' thirdTitle='Smart Home Controllers' />
            <SmarthomecontrollerMain />
            <FooterOne />
        </>
    );
};

export default Smarthomecontroller;