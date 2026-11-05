import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from "framer-motion"
import useFixproContext from '../context/useFixproContext';
import { productList, type MenuItem } from './menuContent';


const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useFixproContext();
    // const [isHome, setIsHome] = useState<boolean>(false);
   
    const [isShop, setIsShop] = useState<boolean>(false);
    
    const currentPath = useLocation().pathname;
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false)
        // setIsHome(false)
      
       
        setIsShop(false)
      
    }
    return (
        <ul className="main-menu__list mobileManulist">

       <motion.li
    onClick={closeMobileManu}
    initial={{ x: -70, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
        duration: 0.1,
        ease: "easeOut"
    }}
    viewport={{ amount: 0.01, once: true }}
    className={currentPath === "/" ? "current" : ""}
>
    <Link to="/">Home</Link>
</motion.li>
            <li className={`${currentPath === "/about" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link to="/about">About Us</Link>
            </li>
   <li className={`${currentPath === "/whyus" ? "current" : "/whyus"}`} onClick={closeMobileManu}>
                <Link to="/whyus">Why Us</Link>
            </li>
       
            <li className="dropdown">
                <a href="#" className={`${isShop || findLocation(productList) ? "expanded" : ""}`}>
                   Products
                    <button className={`${isShop ? "expanded" : ""}`} onClick={() => setIsShop((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>

                </a>
                <ul className="shadow-box" style={{ display: `${isShop ? "block" : "none"}` }}>
                    {
                        productList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`} >
                                <Link to={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
 <li className={`${currentPath === "/projects" ? "current" : "/projects"}`} onClick={closeMobileManu}>
                <Link to="/projects">Projects</Link>
            </li>
            <li className={`${currentPath === "/industries" ? "current" : "/industries"}`} onClick={closeMobileManu}>
                <Link to="/industries">Industries</Link>
            </li>
                <li className={`${currentPath === "/careers" ? "current" : "/careers"}`} onClick={closeMobileManu}>
                <Link to="/careers">Careers</Link>
            </li>
            <li className={`${currentPath === "/contact" ? "current" : "/contact"}`} onClick={closeMobileManu}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MobileManuList;