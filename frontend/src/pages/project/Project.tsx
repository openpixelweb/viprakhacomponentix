import React from 'react';
import Banner from '../../features/banner/Banner';
import ProjectSec from '../../features/project/ProjectSec';
import FooterOne from '../../components/footers/FooterOne';

const Project: React.FC = () => {
    return (
        <>
            <Banner title='Projects' subTitle='Projects' />
            <ProjectSec />
            <FooterOne />
        </>
    );
};

export default Project;