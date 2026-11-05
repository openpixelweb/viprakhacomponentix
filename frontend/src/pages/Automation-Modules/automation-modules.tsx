import React from 'react';

import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import AutomationmodulesMain from '../../features/Automationmodules/AutomationmodulesMain';

const Automationmodules: React.FC = () => {
    return (
        <>
            <Banner title='Automation Modules' subTitle='Automationmodules' thirdTitle='Automation Modules' />
            <AutomationmodulesMain />
            <FooterOne />
        </>
    );
};

export default Automationmodules;