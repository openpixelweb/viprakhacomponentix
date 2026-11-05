import React from 'react';
import Banner from '../../features/banner/Banner';

import Whyussec from '../../components/elements/Whyussec';
import Quality from '../../components/elements/Quality';

import FooterOne from '../../components/footers/FooterOne';

const Whyus: React.FC = () => {
    return (
        <>
            <Banner title='WhyUs' subTitle='About' />
          
           
               <Whyussec />
            <Quality />
         
            <FooterOne />
        </>
    );
};

export default Whyus;