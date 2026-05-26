import React from 'react';
import Banner from '../../features/banner/Banner';
import BlogRightSidebarMain from '../../features/blog/BlogRightSidebarMain';
import FooterOne from '../../components/footers/FooterOne';


const BlogRightSidebar: React.FC = () => {
    return (
        <>
            <Banner title='Blog Right Sidebar' />
            <BlogRightSidebarMain />
            <FooterOne />
        </>
    );
};

export default BlogRightSidebar;