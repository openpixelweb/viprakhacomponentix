import React from 'react';
import Banner from '../../features/banner/Banner'; 
import FooterOne from '../../components/footers/FooterOne';
import CommercialServicesMain from '../../features/commercial-services/CommercialServicesMain';

const CommercialServices: React.FC = () => {
    return (
        <>
            <Banner title='Commercial services' subTitle='Services' thirdTitle='Commercial services' />
             <CommercialServicesMain />
            <FooterOne />
        </>
    );
};

export default CommercialServices;