import React from 'react';
import { Link, useLocation } from 'react-router';
import {productList, type MenuItem } from './menuContent';

const MenuList: React.FC = () => {
    const currentPath = useLocation().pathname;
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    return (
        <ul className="main-menu__list">
  
            <li className={currentPath === "/" ? "current" : ""}>
  <Link to="/">Home</Link>
</li>
            <li className={currentPath === "/about" ? "current" : "about"}>
                <Link to="/about">About</Link>
            </li>
               <li className={currentPath === "/whyus" ? "current" : ""}>
                <Link to="/whyus">Why Us</Link>
            </li>
       
            <li className={`dropdown ${findLocation(productList) ? "current" : ""}`}>
                <a href="/products">Products</a>
                <ul className="shadow-box">
                    {
                        productList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link to={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/projects" ? "current" : "projects"}>
                <Link to="/projects">Projects</Link>
            </li>
             <li className={currentPath === "/industries" ? "current" : ""}>
                <Link to="/industries">Industries</Link>
            </li>
                 <li className={currentPath === "/Careers" ? "current" : ""}>
                <Link to="/careers">Careers</Link>
            </li>
            <li className={currentPath === "/contact" ? "current" : ""}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MenuList;