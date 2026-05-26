import React from 'react';
import MenuOne from '../menu/MenuOne';
import StrickyHeader from './StrickyHeader';

const HeaderOne: React.FC = () => {

    return (
        <>
            <header className="main-header">
               <div className="main-menu-three__top">
                    <div className="container">
                        <div className="main-menu-three__top-inner">
                            <ul className="list-unstyled main-menu-three__contact-list">
                             
                                <li>
                                   
                                    <div className="text">
                                        <p>Advanced Electronics Built for Industrial Demands</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="main-menu-three__top-right">
                                <p>Follow Us:</p>
                                <div className="main-menu-three__social">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu">
                    <MenuOne />
                </nav>
            </header>

            <StrickyHeader 
                menu={<MenuOne />}
            /> 
        </>
    );
};

export default HeaderOne;