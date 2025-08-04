import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>About MediCare+</h1>
                    <p>
                        Dedicated to providing exceptional healthcare services with compassion,
                        innovation, and excellence for over 25 years.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                At MediCare+, our mission is to provide exceptional healthcare services that combine
                                cutting-edge medical technology with compassionate, patient-centered care. We strive
                                to improve the health and wellbeing of our community through innovative treatments,
                                preventive care, and personalized medical solutions.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                We believe that every patient deserves access to high-quality healthcare delivered
                                with dignity, respect, and understanding. Our commitment extends beyond treatment to
                                include education, prevention, and ongoing support for our patients and their families.
                            </p>
                        </div>
                        <div className="card">
                            <h3 style={{ marginBottom: '20px', color: '#667eea' }}>Our Values</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <Heart size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Compassionate Care</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <Award size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Excellence in Medicine</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <Shield size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Patient Safety</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <Users size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Community Focus</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">Our History</h2>
                    <div className="grid grid-3">
                        <div className="card">
                            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>1998</h3>
                            <h4 style={{ marginBottom: '10px' }}>Founded</h4>
                            <p>
                                MediCare+ was established with a vision to provide accessible,
                                high-quality healthcare to our community.
                            </p>
                        </div>

                        <div className="card">
                            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>2010</h3>
                            <h4 style={{ marginBottom: '10px' }}>Expansion</h4>
                            <p>
                                Opened our state-of-the-art medical center with advanced
                                diagnostic and treatment facilities.
                            </p>
                        </div>

                        <div className="card">
                            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>2020</h3>
                            <h4 style={{ marginBottom: '10px' }}>Innovation</h4>
                            <p>
                                Launched telemedicine services and digital health platforms
                                to enhance patient care accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Leadership Team</h2>
                    <p className="section-subtitle">
                        Meet the experienced professionals leading our healthcare mission
                    </p>
                    <div className="grid grid-3">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="doctor-image">
                                <span>DR</span>
                            </div>
                            <h3>Dr. Sarah Johnson</h3>
                            <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '15px' }}>Chief Medical Officer</p>
                            <p>
                                Board-certified internist with over 20 years of experience in
                                healthcare administration and patient care excellence.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="doctor-image">
                                <span>MK</span>
                            </div>
                            <h3>Michael Kim</h3>
                            <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '15px' }}>Chief Executive Officer</p>
                            <p>
                                Healthcare executive with extensive experience in hospital
                                management and strategic healthcare development.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="doctor-image">
                                <span>EM</span>
                            </div>
                            <h3>Dr. Emily Martinez</h3>
                            <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '15px' }}>Director of Nursing</p>
                            <p>
                                Registered nurse with advanced degrees in healthcare leadership
                                and over 15 years in clinical and administrative roles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accreditation Section */}
            <section className="section stats">
                <div className="container">
                    <h2 className="section-title">Accreditations & Awards</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <Award size={40} style={{ marginBottom: '10px' }} />
                            <h3>Joint Commission</h3>
                            <p>Accredited</p>
                        </div>
                        <div className="stat-item">
                            <Shield size={40} style={{ marginBottom: '10px' }} />
                            <h3>Patient Safety</h3>
                            <p>Excellence Award</p>
                        </div>
                        <div className="stat-item">
                            <Heart size={40} style={{ marginBottom: '10px' }} />
                            <h3>Quality Care</h3>
                            <p>5-Star Rating</p>
                        </div>
                        <div className="stat-item">
                            <Users size={40} style={{ marginBottom: '10px' }} />
                            <h3>Community</h3>
                            <p>Service Award</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
