import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import SmartswitchesMain from '../../features/Smartswitches/SmartswitchesMain';

const Smartswitches: React.FC = () => {
    return (
        <>
            <Banner title='Smart Switches' subTitle='Smart Switches' thirdTitle='Smart Switches' />
            <SmartswitchesMain />
            <FooterOne />
        </>
    );
};

export default Smartswitches;