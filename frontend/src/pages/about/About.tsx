import React from 'react';
import Banner from '../../features/banner/Banner';
// import AboutPage from '../../features/home-three/AboutThree';
// import AboutPage from '../../pages/about/About';
import AboutPage from '../../components/elements/Aboutus';
import Mission from '../../components/elements/Missionvission';
import FooterOne from '../../components/footers/FooterOne';

const About: React.FC = () => {
    return (
        <>
            <Banner title='About' subTitle='About' />
          
           
            
            <AboutPage />
             <Mission />
            <FooterOne />
        </>
    );
};

export default About;