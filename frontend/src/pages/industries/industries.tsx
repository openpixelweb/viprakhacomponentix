import React from 'react';

 
import teamImg1 from '../../assets/images/team/manufacturing.jpg';
import teamImg2 from '../../assets/images/team/automotiveindustry.jpg';
import teamImg3 from '../../assets/images/team/energy.jpg';
import teamImg4 from '../../assets/images/team/telecom.jpg';
import teamImg5 from '../../assets/images/team/healthcare.jpg';
import teamImg6 from '../../assets/images/team/consumerelec.jpg';
import teamImg7 from '../../assets/images/team/smarthomes.jpg';
import teamImg8 from '../../assets/images/team/industrilauto.jpg';
import type { AnimationVariant } from '../../components/elements/FadeInAdvanced';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';
import FooterOne from '../../components/footers/FooterOne';
import Banner from '../../features/banner/Banner';



interface TeamMember {
    id: number;
    image: string;
    name: string;
    subTitle: string;
  
    animationClass: AnimationVariant;
    animationDelay: number;
  
}



const teamMembers: TeamMember[] = [
    {
        id: 1,
        image: teamImg1,
        name: 'Manufacturing Industry',
        subTitle: 'We provide advanced electronic components and automation solutions that improve industrial productivity, operational efficiency, and process control in manufacturing environments.',
       
        animationClass: 'fadeInLeft',
        animationDelay: 100,
       
    },
    {
        id: 2,
        image: teamImg2,
        name: 'Automotive Industry',
        subTitle: 'Our electronic systems support modern automotive technologies with reliable control systems, sensor integration, and smart automation solutions.',
        
        animationClass: 'fadeInLeft',
        animationDelay: 300,
       
    },
    {
        id: 3,
        image: teamImg3,
        name: 'Energy & Utilities',
        subTitle: 'We deliver energy-efficient electronic solutions for power management, energy monitoring, and electrical protection systems across utility sectors.',
      
        animationClass: 'fadeInRight',
        animationDelay: 500,
        
    },
    {
        id: 4,
        image: teamImg4,
        name: 'Telecommunications',
        subTitle: 'Our high-performance electronic components support communication infrastructure with reliable connectivity, monitoring, and power management solutions.',
     
        animationClass: 'fadeInRight',
        animationDelay: 700,
     
    },
    {
        id: 5,
        image: teamImg5,
        name: 'Healthcare Equipment',
        subTitle: 'We manufacture precision electronic components that support healthcare devices, monitoring systems, and reliable medical equipment operations.',
     
        animationClass: 'fadeInRight',
        animationDelay: 800,
     
    },
    {
        id: 6,
        image: teamImg6,
        name: 'Consumer Electronics',
        subTitle: 'Our smart electronic products are designed to enhance convenience, connectivity, and efficiency in modern household and consumer applications.',
     
        animationClass: 'fadeInRight',
        animationDelay: 900,
     
    },
    {
        id: 7,
        image: teamImg7,
        name: 'Smart Homes & Automation',
        subTitle: 'We provide intelligent automation solutions that enable smart living through connected devices, energy-efficient systems, and seamless control technologies.',
     
        animationClass: 'fadeInRight',
        animationDelay: 700,
     
    },
     {
        id: 8,
        image: teamImg8,
        name: 'Industrial Automation',
        subTitle: 'Our automation modules and control systems help industries streamline operations, improve productivity, and achieve smarter process management.',
     
        animationClass: 'fadeInRight',
        animationDelay: 700,
     
    },
];

const Industries: React.FC = () => {
    return (
            <>
         <Banner title='Industries' />
        <SectionWrapper id='team' className="team-two">
            <div className="team-two__bg-shape" ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Industries We Serve
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Delivering Advanced Electronic Solutions Across Industries</TextAnimation>
                    </h3>
                    <p className="pt-20">At Viprakha Componentix Pvt Ltd, we manufacture high-performance industrial electronic components and smart technology solutions that support a wide range of industries. Our products are designed to improve operational efficiency, automation, reliability, and energy management in both industrial and household environments.</p>
                </div>
                <div className="row">
                    {teamMembers.map((member) => (
                        <FadeInAdvanced
                            key={member.id}
                            className={`col-xl-3 col-lg-6 col-md-6 `}
                            delay={member.animationDelay}
                            variant={member?.animationClass}
                        >
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <img src={member.image} alt="" />
                                    </div>
                                </div>
                                <div className="team-two__content">
                                
                                    <h3 className="team-two__title">
                                        {member.name}
                                    </h3>
                                    <p className="team-two__sub-title">{member.subTitle}</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </SectionWrapper>
        <FooterOne />
        </> 
    );
};

export default Industries;