import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import IndustrialsensorsMain from '../../features/Industrialsensors/IndustrialsensorsMain';

const Industrialsensors: React.FC = () => {
    return (
        <>
            <Banner title='Industrial Sensors' subTitle='Service' thirdTitle='Industrial Sensors' />
            <IndustrialsensorsMain />
            <FooterOne />
        </>
    );
};

export default Industrialsensors;