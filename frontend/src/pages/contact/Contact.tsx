

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Banner from '../../features/banner/Banner';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import FooterOne from '../../components/footers/FooterOne';
import { submitContactForm } from '../../utils/formsApi';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
     
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please fill in at least your name and email.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        try {
            setIsSubmitting(true);
            const successMessage = await submitContactForm(formData);

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: successMessage,
                confirmButtonColor: '#e74c3c',
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
               
                message: '',
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: error instanceof Error
                    ? error.message
                    : 'Something went wrong. Please try again later.',
                confirmButtonColor: '#e74c3c',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Banner title='Contact' />
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInLeft' delay={100}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-call"></span>
                                </div>
                                <p>Contact Us</p>
                                <h3><a href="tel:9032032119">9032032119</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInUp' delay={200}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-envelope"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3><a href="mailto:contact@viprakha.com">contact@viprakha.com</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInRight' delay={300}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Address</p>
                                <h3>Office No. 101, First Floor, Virtual Network Building, Road No. 2, Vikrampuri Colony, Kharkhana, Secunderabad - 500009, Telangana.</h3>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </section>
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0825563279177!2d78.4991594!3d17.4557623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bfb626b13f1%3A0x4a2a7031d26b4f74!2sVirtual%20Networx%20India!5e0!3m2!1sen!2sin!4v1787375421592!5m2!1sen!2sin" width="600" height="450"></iframe>                                
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Send Us Your Enquiry</h3>
                                    <form
                                        className="contact-form-validated contact-page__form"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Full Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                           
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                    <div className="col-xl-12 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <button
                                                        type="submit"
                                                        className="footer-widget__newsletter-btn thm-btn"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send A Message'}
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />
        </>
    );
};

export default Contact;
