import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import ControlpanelsMain from '../../features/Controlpanels/ControlpanelsMain';

const Controlpanels: React.FC = () => {
    return (
        <>
            <Banner title='Control Panels' subTitle='Service' thirdTitle='Control Panels' />
            <ControlpanelsMain />
            <FooterOne />
        </>
    );
};

export default Controlpanels;