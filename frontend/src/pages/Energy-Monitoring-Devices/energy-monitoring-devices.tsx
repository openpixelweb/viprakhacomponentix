import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import EnergymonitoringdevicesMain from '../../features/Energymoniteringdevices/EnergymonitoringdevicesMain';

const Energymonitoring: React.FC = () => {
    return (
        <>
            <Banner title='Energy Monitoring Devices' subTitle='Energy Monitoring Devices' thirdTitle='Energy Monitoring Devices' />
            <EnergymonitoringdevicesMain />
            <FooterOne />
        </>
    );
};

export default Energymonitoring;