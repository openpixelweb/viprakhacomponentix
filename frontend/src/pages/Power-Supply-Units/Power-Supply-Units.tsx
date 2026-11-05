import React from 'react';
import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import PowersupplyMain from '../../features/Powersupplyunits/PowersuppluMain';

const PowerSupplyUnits: React.FC = () => {
    return (
        <>
            <Banner title='Power Supply Units' subTitle='Service' thirdTitle='Power Supply Units' />
            <PowersupplyMain />
            <FooterOne />
        </>
    );
};

export default PowerSupplyUnits;