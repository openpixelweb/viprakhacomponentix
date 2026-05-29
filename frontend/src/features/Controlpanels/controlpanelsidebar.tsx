import React from 'react';
import { Link } from 'react-router';

interface ServiceLinkItem {
    id: number;
    label: string;
   
}



const applications: ServiceLinkItem[] = [
    { id: 1, label: 'Manufacturing industries' },
    { id: 2, label: 'Automation systems' },
    { id: 3, label: 'Motor control applications' },
    { id: 4, label: 'Power distribution systems' },
    { id: 5, label: 'Process control equipment' },
    { id: 6, label: 'Machine control units' },
     { id: 7, label: 'Industrial plants and machinery' },
];





const ServiceDetailsSidebar: React.FC = () => {
    
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="service-details__sidebar">

                {/* Our Services */}
                <div className="service-details__services-box">
                    <h3 className="service-details__services-title">Applications</h3>
                    <ul className="service-details__services-list list-unstyled">
                        {applications.map((service) => (
                            <li key={service.id}>
                               
                                <span className="icon-arrow-right"></span>    {service.label}
                                    
                              
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get Started Today */}
                <div className="service-details__get-started">
                    <h3 className="service-details__get-started-title">Contact Us for Product Enquiries</h3>
                    <p className="service-details__get-started-text">
                       Looking for reliable industrial electronic components or smart technology solutions? Our team at Viprakha Componentix Pvt Ltd is ready to help you find the right products for your industrial, commercial, and household applications.
                    </p>
                  
                    <div className="service-details__get-started-btn-box">
                        <Link to="/contact" className="service-details__get-started-btn thm-btn">
                            Get In Touch
                        </Link>
                    </div>
                </div>

           
   

            </div>
        </div>
    );
};

export default ServiceDetailsSidebar;