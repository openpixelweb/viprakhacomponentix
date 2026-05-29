import React from 'react';
import { Link, useLocation } from 'react-router';
import logo from "../../assets/images/viprika-logo.png"
import MenuList from './MenuList';
import useFixproContext from '../context/useFixproContext';
import SinglePageManuList from './SinglePageManuList';
const MenuTwo: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu } = useFixproContext();
    const currentPath = useLocation().pathname;
    const isOnePage = currentPath.includes("single-page")
    const getCartCount = localStorage.getItem("cartCount");
    const handleSearch = () => {
        setIsSearch(pre => !pre)
    }
    const handlSidebar = () => {
        setIsSidebar(pre => !pre)
    }
    const handlMobileMenu = () => {
        setIsMobileManu(pre => !pre)
    }
    return (
        <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                    <Link to="#" onClick={handlMobileMenu} className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                    {
                        isOnePage ? <SinglePageManuList /> : <MenuList />
                    }
                </div>
                <div className="main-menu-two__right">
                    <div className="main-menu-two__call">
                        <div className="main-menu-two__call-icon">
                            <i className="icon-call"></i>
                        </div>
                        <div className="main-menu-two__call-content">
                            <p className="main-menu-two__call-sub-title">Call Anytime</p>
                            <h5 className="main-menu-two__call-number"><a href="tel:+91 9502721345">+91 9502721345</a></h5>
                        </div>
                    </div>
                    <div className="main-menu-two__search-cart-box">
                        <div className="main-menu-two__search-cart-box">
                            <div className="main-menu-two__search-box" onClick={handleSearch}>
                                <Link to="#" className="main-menu-two__search searcher-toggler-box icon-search-interface-symbol"></Link>
                            </div>
                            <div className="main-menu-two__cart-box">
                                <Link to="/cart" className="main-menu-two__cart">
                                    <span className="far fa-shopping-cart"></span>
                                    <span className="main-menu-two__cart-count">0{getCartCount}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu-two__nav-sidebar-icon" onClick={handlSidebar}>
                        <Link to="#" className="navSidebar-button">
                            <span className="icon-dots-menu-one"></span>
                            <span className="icon-dots-menu-two"></span>
                            <span className="icon-dots-menu-three"></span>
                        </Link>
                    </div>
                    <div className="main-menu-two__btn-box">
                        <Link to="/contact" className="thm-btn">Get A Quote<span className="icon-arrow-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuTwo;