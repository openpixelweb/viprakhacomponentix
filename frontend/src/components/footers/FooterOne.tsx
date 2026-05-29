
import { Link } from 'react-router';


import footerShape1 from '../../assets/images/shapes/footer-widget-shape-1.png';
import footerLogo from '../../assets/images/viprika-white.png';
import FadeInAdvanced from '../elements/FadeInAdvanced';



interface NavLink {
    id: number;
    label: string;
    to: string;
}

interface ContactItem {
    id: number;
    icon: string;
    lines: { text: string; href?: string }[];
}

interface SocialLink {
    id: number;
    icon: string;
    href: string;
}



const quickLinks: NavLink[] = [
    // { id: 1, label: 'Home', to: '#' },
    { id: 2, label: 'About', to: '/about' },
    { id: 3, label: 'Why Us', to: '/whyus' },
    { id: 4, label: 'Products', to: '/products' },
    { id: 5, label: 'Projects', to: '/projects' },
     { id: 6, label: 'Industries', to: '/industries' },
      { id: 7, label: 'Careers', to: '/careers' },
    { id: 8, label: 'Contact', to: '/contact' },
];

const serviceLinks: NavLink[] = [
    { id: 1, label: 'Power Supply Units', to: '/power-supply-units' },
    { id: 2, label: 'Industrial Sensors', to: '#' },
    { id: 3, label: 'Control Panels', to: '#' },
    { id: 4, label: 'Printed Circuit Boards (PCBs)', to: '#' },
    { id: 5, label: 'Automation Modules', to: '#' },
     { id: 6, label: 'Smart Home Controllers', to: '#' },
      { id: 7, label: 'Energy Monitoring Devices', to: '#' },
       { id: 8, label: 'IoT-Based Devices', to: '#' },
        // { id: 9, label: 'Smart Switches', to: '#' },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        icon: 'icon-phone-call',
        lines: [
            { text: '9032032119', href: 'tel:9032032119' },
           
        ],
    },
    {
        id: 2,
        icon: 'icon-envelope',
        lines: [
            { text: 'amarnadhrao@gmail.com', href: 'mailto:amarnadhrao@gmail.com' },
     
        ],
    },
    {
        id: 3,
        icon: 'icon-location',
        lines: [{ text: 'Flat no.G-4, Kalinga Dreamz, MJ Colony, Moulaali,Secunderabad, Hyderabad-500040.' }],
    },
];

const socialLinks: SocialLink[] = [
    { id: 1, icon: 'icon-facebook', href: '#' },
    { id: 2, icon: 'icon-xpa', href: '#' },
    { id: 3, icon: 'icon-link-in', href: '#' },
    { id: 4, icon: 'icon-instagram', href: '#' },
];

const bottomMenuLinks: NavLink[] = [

    { id: 2, label: 'Terms and Condition', to: '#' },
    { id: 3, label: 'Privacy and Policy', to: '#' },
];

const FooterOne: React.FC = () => {
    
   
    return (
        <footer className="site-footer">
            <div className="site-footer__bg-color">
                <div className="footer-widget__shape-1">
                    <img src={footerShape1} alt="footer shape" />
                </div>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        {/* About Column */}
                        <FadeInAdvanced className="col-xl-4" variant='fadeInUp' delay={100}>
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link to="/"><img src={footerLogo} alt="Fixpro Logo" /></Link>
                                </div>
                                <p className="footer-widget__about-text">
                                    We dedicated to manufacturing advanced industrial electronic components and smart technology solutions that combine innovation, quality, and reliability for industries and modern homes.
                                </p>
                               <div className="site-footer__social">
                                        {socialLinks.map((social) => (
                                            <a key={social.id} href={social.href}>
                                                <i className={social.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                            </div>
                        </FadeInAdvanced>

                        {/* Right Columns */}
                        <div className="col-xl-8">
                            <div className="footer-widget__right">
                                {/* Newsletter */}
                           

                                <div className="footer-widget__right-bottom">
                                    <div className="row">
                                        {/* Quick Links */}
                                        <FadeInAdvanced className="col-xl-3 col-lg-4 col-md-4" variant='fadeInUp' delay={200}>
                                            <div className="footer-widget__column footer-widget__usefull-link">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Quick Links</h3>
                                                </div>
                                                <div className="footer-widget__link-box">
                                                    <ul className="footer-widget__link list-unstyled">
                                                        {quickLinks.map((link) => (
                                                            <li key={link.id}>
                                                                <Link to={link.to}>{link.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </FadeInAdvanced>

                                        {/* Services */}
                                        <FadeInAdvanced className="col-xl-5 col-lg-4 col-md-4 " variant='fadeInUp' delay={300}>
                                            <div className="footer-widget__column footer-widget__services">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Our Products</h3>
                                                </div>
                                                <ul className="footer-widget__link list-unstyled">
                                                    {serviceLinks.map((link) => (
                                                        <li key={link.id}>
                                                            <Link to={link.to}>{link.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </FadeInAdvanced>

                                        {/* Contact Info */}
                                        <FadeInAdvanced className="col-xl-4 col-lg-4 col-md-4" variant='fadeInUp' delay={400}>
                                            <div className="footer-widget__contact-box">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Contact info</h3>
                                                </div>
                                                <ul className="footer-widget__contact list-unstyled">
                                                    {contactItems.map((item) => (
                                                        <li key={item.id}>
                                                            <div className="icon">
                                                                <span className={item.icon}></span>
                                                            </div>
                                                            <div className="content">
                                                                {item.lines.map((line, i) => (
                                                                    <p key={i}>
                                                                        {line.href ? (
                                                                            <a href={line.href}>{line.text}</a>
                                                                        ) : (
                                                                            line.text
                                                                        )}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </FadeInAdvanced>
                                    </div>

                                    {/* Social Links */}
                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">
                            Copyright ©<script>document.write(new Date().getFullYear());</script>. All Rights Reserved by VIPRAKHA COMPONENTIX PVT LTD
                        </p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            {bottomMenuLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;