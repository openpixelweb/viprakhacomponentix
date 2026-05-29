import React from 'react';
import Banner from '../../features/banner/Banner';
// import AboutPage from '../../features/home-three/AboutThree';
// import AboutPage from '../../pages/about/About';
import Currentopp from '../../components/elements/Currentopportunities';

import FooterOne from '../../components/footers/FooterOne';

const About: React.FC = () => {
    return (
        <>
            <Banner title='Careers' />
          
           
            
            <Currentopp />
          
            <FooterOne />
        </>
    );
};

export default About;