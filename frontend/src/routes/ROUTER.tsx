import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';
import HomeTwoLayout from '../layout/HomeTwoLayout';
import HomeThreeLayout from '../layout/HomeThreeLayout';
import ErrorBoundary from '../components/elements/ErrorBoundary';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import DefaultLayout from '../layout/DefaultLayout';
import ErrorPage from '../pages/error-404/ErrorPage';    


const Industries = lazy(() => import('../pages/industries/industries'));
const Careers = lazy(() => import('../pages/careers/Careers'));
const Industrial = lazy(() => import('../pages/project-details/Industrial-Automation-Control-System'));
const Smarthome = lazy(() => import('../pages/project-details/Smart-Home-Automation-Project'));
const EnergyMonitering = lazy(() => import('../pages/project-details/Energy-Monitoring-Power-Management-System'));
const Whyus = lazy(() => import('../pages/whyus/Whyus'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const BlogDetails = lazy(() => import('../pages/blog-details/BlogDetails'));
const BlogRightSidebar = lazy(() => import('../pages/blog-right-sidebar/BlogRightSidebar'));
const BlogLeftSidebar = lazy(() => import('../pages/blog-left-sidebar/BlogLeftSidebar'));
const BlogStandart = lazy(() => import('../pages/blog-standard/BlogStandart'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const Login = lazy(() => import('../pages/login/Login'));
const Signup = lazy(() => import('../pages/sign-up/Signup'));
const Wishlist = lazy(() => import('../pages/wishlist/Wishlist'));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const Services = lazy(() => import('../pages/services/Services'));
const Cart = lazy(() => import('../pages/cart/Cart'));
// const ProductDetails = lazy(() => import('../pages/product-details/ProductDetails'));
const Products = lazy(() => import('../pages/products/Products'));
const ElectricPanel = lazy(() => import('../pages/electric-panel-repair/ElectricPanel'));
const ShortCircuit = lazy(() => import('../pages/short-circuit-repair/ShortCircuit'));
const CommercialServices = lazy(() => import('../pages/commercial-services/CommercialServices'));

const LightingFixtures = lazy(() => import('../pages/lighting-fixtures/LightingFixtures'));
const PowerSupplyUnits = lazy(() => import('../pages/Power-Supply-Units/Power-Supply-Units'));
const Industrialsensors = lazy(() => import('../pages/Industrial-Sensors/industrial-sensors'));
const Automationmodules = lazy(() => import('../pages/Automation-Modules/automation-modules'));
const Controlpanels= lazy(() => import('../pages/Control-Panels/control-panels'));
const Printedcircuitboard= lazy(() => import('../pages/Printed-Circuit-Board/printed-circuit-boards'));
const Faq = lazy(() => import('../pages/faq/Faq'));
const Pricing = lazy(() => import('../pages/pricing/Pricing'));
const Testimonials = lazy(() => import('../pages/testimonials/Testimonials'));
const ProjectDetails = lazy(() => import('../pages/project-details/ProjectDetails'));
const Project = lazy(() => import('../pages/project/Project'));

const Team = lazy(() => import('../pages/team/Team'));
const About = lazy(() => import('../pages/about/About'));
const HomeOne = lazy(() => import('../home/HomeOne'));
const HomeTwo = lazy(() => import('../home/HomeTwo'));
const HomeThree = lazy(() => import('../home/HomeThree'));

const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <ErrorBoundary name='Root component App'><App /></ErrorBoundary>,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomeOneLayout />,
                children: [
                    {
                        path: "/",
                        element: <ErrorBoundary name='Home One'><SuspenseWrapper><HomeOne /></SuspenseWrapper></ErrorBoundary>
                    },
                
                ]
            },
            {
                element: <HomeTwoLayout />,
                children: [
                    {
                        path: "/home-two",
                        element: <ErrorBoundary name='Home Two'><SuspenseWrapper><HomeTwo /></SuspenseWrapper></ErrorBoundary>
                    },
                  
                ]
            },
            {
                element: <HomeThreeLayout />,
                children: [
                    {
                        path: "/home-three",
                        element: <ErrorBoundary name='Home Three'><SuspenseWrapper><HomeThree /></SuspenseWrapper></ErrorBoundary>
                    },
                   
                ]
            },
            {
                element: <DefaultLayout />,
                children: [
                    {
                        path: "/about",
                        element: <ErrorBoundary name='About'><SuspenseWrapper><About /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/team",
                        element: <ErrorBoundary name='Team'><SuspenseWrapper><Team /></SuspenseWrapper></ErrorBoundary>
                    },
                   
                    {
                        path: "/projects",
                        element: <ErrorBoundary name='Project'><SuspenseWrapper><Project /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/project-details",
                        element: <ErrorBoundary name='Project Details'><SuspenseWrapper><ProjectDetails /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/testimonials",
                        element: <ErrorBoundary name='Testimonials'><SuspenseWrapper><Testimonials /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/pricing",
                        element: <ErrorBoundary name='Pricing'><SuspenseWrapper><Pricing /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/faqs",
                        element: <ErrorBoundary name='Faq'><SuspenseWrapper><Faq /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/services",
                        element: <ErrorBoundary name='Services'><SuspenseWrapper><Services /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/Power-Supply-Units",
                        element: <ErrorBoundary name='Power Supply Units'><SuspenseWrapper><PowerSupplyUnits /></SuspenseWrapper></ErrorBoundary>
                    },
                         {
                        path: "/industrial-sensors",
                        element: <ErrorBoundary name='Industrial Sensors'><SuspenseWrapper><Industrialsensors /></SuspenseWrapper></ErrorBoundary>
                    },
                     {
                        path: "/control-panels",
                        element: <ErrorBoundary name='Control Panels'><SuspenseWrapper><Controlpanels /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/printed-circuit-boards",
                        element: <ErrorBoundary name='Printed Circuit Board'><SuspenseWrapper><Printedcircuitboard /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/automation-modules",
                        element: <ErrorBoundary name='automation modules'><SuspenseWrapper><Automationmodules /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/lighting-fixtures",
                        element: <ErrorBoundary name='Lighting & Fixtures'><SuspenseWrapper><LightingFixtures /></SuspenseWrapper></ErrorBoundary>
                    },
                    
                    {
                        path: "/commercial-services",
                        element: <ErrorBoundary name='Commercial services'><SuspenseWrapper><CommercialServices /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/short-circuit-repair",
                        element: <ErrorBoundary name='Short circuit repair'><SuspenseWrapper><ShortCircuit /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/electric-panel-repair",
                        element: <ErrorBoundary name='Electric Panel Repair'><SuspenseWrapper><ElectricPanel /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/products",
                        element: <ErrorBoundary name='Products'><SuspenseWrapper><Products /></SuspenseWrapper></ErrorBoundary>
                    },
                 
                    {
                        path: "/cart",
                        element: <ErrorBoundary name='Cart'><SuspenseWrapper><Cart /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/checkout",
                        element: <ErrorBoundary name='Checkout'><SuspenseWrapper><Checkout /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/wishlist",
                        element: <ErrorBoundary name='Wishlist'><SuspenseWrapper><Wishlist /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/sign-up",
                        element: <ErrorBoundary name='Signup'><SuspenseWrapper><Signup /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/login",
                        element: <ErrorBoundary name='Login'><SuspenseWrapper><Login /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/blog",
                        element: <ErrorBoundary name='Blog'><SuspenseWrapper><Blog /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/blog-standard",
                        element: <ErrorBoundary name='Blog Standart'><SuspenseWrapper><BlogStandart /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/blog-left-sidebar",
                        element: <ErrorBoundary name='Blog Left Sidebar'><SuspenseWrapper><BlogLeftSidebar /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/blog-right-sidebar",
                        element: <ErrorBoundary name='Blog Right Sidebar'><SuspenseWrapper><BlogRightSidebar /></SuspenseWrapper></ErrorBoundary>
                    },
                       {
                        path: "/whyus",
                        element: <ErrorBoundary name='Whyus'><SuspenseWrapper><Whyus /></SuspenseWrapper></ErrorBoundary>
                    },
                      {
                        path: "/Industrial-Automation-Control-System",
                        element: <ErrorBoundary name='Industrial Automation Control System'><SuspenseWrapper><Industrial/></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/Smart-Home-Automation-Project",
                        element: <ErrorBoundary name='Smart Home Automation Project'><SuspenseWrapper><Smarthome/></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/Energy-Monitoring-Power-Management-System",
                        element: <ErrorBoundary name='Energy Monitoring Power Management System'><SuspenseWrapper><EnergyMonitering/></SuspenseWrapper></ErrorBoundary>
                    },
                      {
                        path: "/industries",
                        element: <ErrorBoundary name='Industries'><SuspenseWrapper><Industries /></SuspenseWrapper></ErrorBoundary>
                    },
                     {
                        path: "/careers",
                        element: <ErrorBoundary name='Careers'><SuspenseWrapper><Careers /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/blog-details",
                        element: <ErrorBoundary name='Blog Details'><SuspenseWrapper><BlogDetails /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/contact",
                        element: <ErrorBoundary name='Contact'><SuspenseWrapper><Contact /></SuspenseWrapper></ErrorBoundary>
                    }
                ]
            },
        ]
    }
])

export default ROUTER;