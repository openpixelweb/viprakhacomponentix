import React from 'react';
import { Link } from 'react-scroll';
// import { useLocation } from 'react-router';
import useFixproContext from '../context/useFixproContext';
interface SinglePageMenuItem {
    id: number;
    linkId: string;
    value: string;
    offfset?: number
}
const singlePageMenuListHomeOne: SinglePageMenuItem[] = [
    { id: 1, offfset: -170, linkId: "home", value: "Home" },
    { id: 2, offfset: -150, linkId: "aboutOne", value: "About" },
{ id: 3, offfset: -70, linkId: "contact", value: "Contact" },
  
]



const SinglePageManuList: React.FC = () => {
    const { activeSection, setIsMobileManu, } = useFixproContext();
    // const currentPath = useLocation().pathname;
    return (
<ul className="main-menu__list one-page-scroll-menu">
    {singlePageMenuListHomeOne.map((item: SinglePageMenuItem) => (
        <li
            key={item?.id}
            style={{ cursor: "pointer" }}
            className={`scrollToLink ${
                activeSection === item?.linkId ? "current" : ""
            }`}
        >
            <Link
                to={item?.linkId}
                spy={true}
                smooth={true}
                offset={item?.offfset}
                duration={500}
                onClick={() => setIsMobileManu(false)}
            >
                {item?.value}
            </Link>
        </li>
    ))}
</ul>
    );
};

export default SinglePageManuList;