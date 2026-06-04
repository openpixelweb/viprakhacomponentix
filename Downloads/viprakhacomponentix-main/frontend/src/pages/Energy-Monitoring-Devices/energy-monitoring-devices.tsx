import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import IotbaseddevicesMain from '../../features/IotBaseddevices/IotbaseddevicesMain';

const Iotbaseddevices: React.FC = () => {
    return (
        <>
            <Banner title='Energy Monitoring Devices' subTitle='Energy Monitoring Devices' thirdTitle='Energy Monitoring Devices' />
            <IotbaseddevicesMain />
            <FooterOne />
        </>
    );
};

export default Iotbaseddevices;