import React from 'react';
import MainSlider from '../features/home-one/MainSlider';
import FeatureOne from '../features/home-one/FeatureOne';
import AboutOne from '../features/home-one/AboutOne';
import Products from '../features/home-one/ServiceOne';
import WhyChooseOne from '../features/home-one/WhyChooceOne';
import CounterOne from '../features/home-one/CounterOne';
// import ProjectOne from '../features/home-one/ProjectOne';
import ContactOne from '../features/home-one/ContactOne';
// import TeamOne from '../features/home-one/TeamOne';
import HowweWork from '../features/home-one/HowweWork';
// import PricingOne from '../features/home-one/PricingOne';
import TestimonialOne from '../features/home-one/TestimonialOne';
// import BlogOne from '../features/home-one/BlogOne';
import FooterOne from '../components/footers/FooterOne';

const HomeOne: React.FC = () => {
    return (
        <>
            <MainSlider />
            <FeatureOne />
            <AboutOne />
            <Products />
               <CounterOne />
            <WhyChooseOne />
         
            {/* <ProjectOne /> */}
           
            {/* <TeamOne /> */}
            <HowweWork />
            {/* <PricingOne /> */}
            <TestimonialOne />
             <ContactOne />
            {/* <BlogOne /> */}
            <FooterOne />
        </>
    );
};

export default HomeOne;