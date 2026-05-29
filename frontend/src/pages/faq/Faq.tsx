import React from 'react';
import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import FaqSec from '../../features/faq/FaqSec';

const Faq: React.FC = () => {
    return (
        <>
            <Banner title='Our Faq' subTitle='Faq' />
            <FaqSec />
            <FooterOne />
        </>
    );
};

export default Faq;