import React from 'react';
import { Link, useLocation } from 'react-router';

import Logo from "../../assets/images/viprika-white.png"
import useFixproContext from '../context/useFixproContext';
import MobileManuList from '../menu/MobileManuList';
import SinglePageManuList from '../menu/SinglePageManuList';
const MobileNav: React.FC = () => {
    const { isMobileManu, setIsMobileManu } = useFixproContext();
    const currentPath = useLocation().pathname;
    const isOnePage = currentPath.includes("single-page");

    return (
        <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}></div>
            {/* <!-- /.mobile-nav__overlay --> */}
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}><i className="fa fa-times"></i></span>

                <div className="logo-box">
                    <Link to="/" aria-label="logo image" onClick={() => setIsMobileManu((pre) => (!pre))}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    {
                        isOnePage ? <SinglePageManuList /> : <MobileManuList />
                    }
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:amarnadhrao@gmail.com">amarnadhrao@gmail.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:9032032119">9032032119</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                          <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-twitter"></a>
                      
                        <a href="#" className="fab fa-linkedin"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;