import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import BatteryenergystorageMain from '../../features/Batteryenergystoragesystem/BatteryenergystorageMain';

const Batteryenergystorage: React.FC = () => {
    return (
        <>
            <Banner title='Battery Energy Storage System' subTitle='Battery Energy Storage System' thirdTitle='Battery Energy Storage System' />
            <BatteryenergystorageMain />
            <FooterOne />
        </>
    );
};

export default Batteryenergystorage;