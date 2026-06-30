import React, { useState } from 'react';
//import axios from 'axios';//
import { useSearchParams } from 'react-router-dom';
import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';

interface ApplyFormData {
    jobTitle: string;
    fullName: string;
    email: string;
    contactNumber: string;
    highestDegree: string;
    totalExperience: string;
    currentLocation: string;
    resume: File | null;
    message: string;
}

const Applynow: React.FC = () => {
    const [searchParams] = useSearchParams();

    const selectedJobTitle = searchParams.get('jobTitle') || '';

    const [formData, setFormData] = useState<ApplyFormData>({
        jobTitle: selectedJobTitle,
        fullName: '',
        email: '',
        contactNumber: '',
        highestDegree: '',
        totalExperience: '',
        currentLocation: '',
        resume: null,
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file && file.size > 5 * 1024 * 1024) {
            alert('Resume size must be less than 5MB.');
            e.target.value = '';
            return;
        }

        setFormData((prev) => ({
            ...prev,
            resume: file,
        }));
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const data = new FormData();

        data.append('jobTitle', formData.jobTitle);
        data.append('fullName', formData.fullName);
        data.append('email', formData.email);
        data.append('contactNumber', formData.contactNumber);
        data.append('highestDegree', formData.highestDegree);
        data.append('totalExperience', formData.totalExperience);
        data.append('currentLocation', formData.currentLocation);
        data.append('message', formData.message);

        if (formData.resume) {
            data.append('resume', formData.resume);
        }

    //      const response = await axios.post(
//     'http://localhost:5000/api/apply',
//     data,
//     {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     }
// );
const response = {
    data: {
        message: 'Application submitted successfully!'
    }
};

alert(response.data.message);

setFormData({
    jobTitle: selectedJobTitle,
    fullName: '',
    email: '',
    contactNumber: '',
    highestDegree: '',
    totalExperience: '',
    currentLocation: '',
    resume: null,
    message: '',
});
} catch (error: any) {
    console.error('Application submit error:', error);

    if (error.response) {
        console.error('Backend response:', error.response.data);
        alert(error.response.data.message || 'Backend error occurred.');
    } else if (error.request) {
        console.error('No response from backend:', error.request);
        alert('Backend is not running or API URL is wrong.');
    } else {
        alert('Something went wrong. Please try again.');
    }
}
};//

    return (
        <>
            <Banner title="Apply Now" subTitle="Apply Now" />

            <section className="apply-form-section">
                <div className="container">
                    <form className="apply-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group full-width">
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    placeholder="Job Title"
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact Number *</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter your contact number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Highest Degree *</label>
                                <input
                                    type="text"
                                    name="highestDegree"
                                    value={formData.highestDegree}
                                    onChange={handleInputChange}
                                    placeholder="Enter your highest degree"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Total Experience *</label>
                                <select
                                    name="totalExperience"
                                    value={formData.totalExperience}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select experience</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="1 Year">1 Year</option>
                                    <option value="2 Years">2 Years</option>
                                    <option value="3 Years">3 Years</option>
                                    <option value="4 Years">4 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Current Location</label>
                                <input
                                    type="text"
                                    name="currentLocation"
                                    value={formData.currentLocation}
                                    onChange={handleInputChange}
                                    placeholder="City, Country"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group full-width">
                                <label>Resume *</label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleResumeChange}
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                                <p className="file-note">
                                    Allowed: PDF, DOC, DOCX. Max size: 5MB.
                                </p>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group full-width">
                                <label>Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Write your message"
                                    rows={5}
                                    required
                                />
                            </div>
                        </div>


                          <div className="billing_details_form-btn-1">
                                                    <button type="submit" className="thm-btn"> Submit Application <span><i
                                                        className="icon-arrow-right"></i></span>
                                                    </button>
                                                </div>
                    </form>
                </div>
            </section>

            <FooterOne />
        </>
    );
};

export default Applynow;