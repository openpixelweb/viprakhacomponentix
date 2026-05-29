import React from 'react';
import Banner from '../../features/banner/Banner';
import LightingFixturesMain from '../../features/lighting-fixtures/LightingFixturesMain';
import FooterOne from '../../components/footers/FooterOne';

const LightingFixtures: React.FC = () => {
    return (
        <>
            <Banner title='Lighting & Fixtures' subTitle='Services' thirdTitle='Lighting & Fixtures' />
            <LightingFixturesMain />
            <FooterOne />
        </>
    );
};

export default LightingFixtures;