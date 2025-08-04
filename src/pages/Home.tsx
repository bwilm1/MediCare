import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Award, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Your Health, Our Priority</h1>
                    <p>
                        Experience world-class healthcare with our team of dedicated professionals.
                        We're committed to providing exceptional medical care with compassion and excellence.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/appointment" className="btn btn-primary">Book Appointment</Link>
                        <Link to="/services" className="btn btn-secondary">Our Services</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Choose MediCare+?</h2>
                    <p className="section-subtitle">
                        We provide comprehensive healthcare services with a patient-centered approach
                    </p>
                    <div className="grid grid-3">
                        <div className="card">
                            <div className="service-icon">
                                <Heart />
                            </div>
                            <h3>Compassionate Care</h3>
                            <p>
                                Our team of healthcare professionals is dedicated to providing personalized,
                                compassionate care tailored to each patient's unique needs.
                            </p>
                        </div>

                        <div className="card">
                            <div className="service-icon">
                                <Shield />
                            </div>
                            <h3>Advanced Technology</h3>
                            <p>
                                We utilize the latest medical technology and equipment to ensure accurate
                                diagnoses and effective treatments for all our patients.
                            </p>
                        </div>

                        <div className="card">
                            <div className="service-icon">
                                <Clock />
                            </div>
                            <h3>24/7 Emergency Care</h3>
                            <p>
                                Our emergency department is open 24/7, staffed with experienced professionals
                                ready to handle any medical emergency with prompt care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats">
                <div className="container">
                    <h2 className="section-title">Our Impact in Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>15,000+</h3>
                            <p>Patients Treated</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Expert Doctors</p>
                        </div>
                        <div className="stat-item">
                            <h3>25+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Patient Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Our Medical Services</h2>
                    <p className="section-subtitle">
                        Comprehensive healthcare services delivered by our team of specialists
                    </p>
                    <div className="grid grid-4">
                        <div className="card service-card">
                            <div className="service-icon">
                                <Heart />
                            </div>
                            <h3>Cardiology</h3>
                            <p>Complete cardiovascular care including diagnostics, treatment, and preventive care.</p>
                        </div>

                        <div className="card service-card">
                            <div className="service-icon">
                                <Users />
                            </div>
                            <h3>Pediatrics</h3>
                            <p>Specialized healthcare for infants, children, and adolescents with gentle, expert care.</p>
                        </div>

                        <div className="card service-card">
                            <div className="service-icon">
                                <Award />
                            </div>
                            <h3>Orthopedics</h3>
                            <p>Treatment for bone, joint, and muscle conditions using advanced surgical techniques.</p>
                        </div>

                        <div className="card service-card">
                            <div className="service-icon">
                                <Star />
                            </div>
                            <h3>Emergency Care</h3>
                            <p>24/7 emergency medical services with rapid response and critical care capabilities.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Get Started?</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: '0.9' }}>
                        Book your appointment today and experience the difference of quality healthcare
                    </p>
                    <Link to="/appointment" className="btn btn-white">
                        Schedule Appointment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
