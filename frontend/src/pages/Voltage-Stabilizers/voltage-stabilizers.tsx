import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import VoltagestabilizersMain from '../../features/Voltagestabilizers/VoltagestabilizersMain';

const Smartswitches: React.FC = () => {
    return (
        <>
            <Banner title='Voltage Stabilizers' subTitle='Voltage Stabilizers' thirdTitle='Voltage Stabilizers' />
            <VoltagestabilizersMain />
            <FooterOne />
        </>
    );
};

export default Smartswitches;