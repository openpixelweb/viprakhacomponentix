import React from 'react';
import { Link, useLocation } from 'react-router';
import logo from "../../assets/images/viprika-logo.png"
import MenuList from './MenuList';
import useFixproContext from '../context/useFixproContext';
import SinglePageManuList from './SinglePageManuList';


const MenuOne: React.FC = () => {
    const {setIsMobileManu } = useFixproContext();
    // const [cart, setCart] = useState();
    const currentPath = useLocation().pathname;
    const isOnePage = currentPath.includes("single-page");

    // const getCartCount = localStorage.getItem("cartCount");

    // const handleSearch = () => {
    //     setIsSearch(pre => !pre)
    // }
  
    const handlMobileMenu = () => {
        setIsMobileManu(pre => !pre)
    }
    return (
        <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                    <div className="main-menu__logo">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                </div>
                <div className="main-menu__main-menu-box">
                    <a href="#" onClick={handlMobileMenu} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                    {
                        isOnePage ? <SinglePageManuList /> : <MenuList />
                    }
                </div>
                <div className="main-menu__right">
                 
                    <div className="main-menu__btn-box">
                        <Link to="/contact" className="thm-btn">Get A Quote<span className="icon-arrow-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuOne;