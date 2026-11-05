import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import IotbaseddevicesMain from '../../features/IotBaseddevices/IotbaseddevicesMain';

const IOTBaseddevices: React.FC = () => {
    return (
        <>
            <Banner title='IoT-Based Devices' subTitle='IoT-Based Devices' thirdTitle='IoT-Based Devices' />
            <IotbaseddevicesMain />
            <FooterOne />
        </>
    );
};

export default IOTBaseddevices;