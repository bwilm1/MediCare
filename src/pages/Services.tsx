import React from 'react';
import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Activity, Shield } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            icon: <Heart />,
            title: "Cardiology",
            description: "Comprehensive heart care including diagnostics, treatments, and preventive cardiology services.",
            features: ["ECG & Stress Testing", "Cardiac Catheterization", "Heart Surgery", "Preventive Care"]
        },
        {
            icon: <Brain />,
            title: "Neurology",
            description: "Advanced neurological care for brain, spine, and nervous system disorders.",
            features: ["MRI & CT Scanning", "Stroke Treatment", "Epilepsy Care", "Memory Disorders"]
        },
        {
            icon: <Baby />,
            title: "Pediatrics",
            description: "Specialized healthcare for children from infancy through adolescence.",
            features: ["Well-Child Visits", "Immunizations", "Developmental Screening", "Pediatric Surgery"]
        },
        {
            icon: <Bone />,
            title: "Orthopedics",
            description: "Expert care for bone, joint, and muscle conditions using advanced techniques.",
            features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy"]
        },
        {
            icon: <Eye />,
            title: "Ophthalmology",
            description: "Complete eye care services including surgery and vision correction.",
            features: ["Cataract Surgery", "LASIK", "Retinal Care", "Glaucoma Treatment"]
        },
        {
            icon: <Stethoscope />,
            title: "Internal Medicine",
            description: "Primary care and management of complex medical conditions for adults.",
            features: ["Annual Physicals", "Chronic Disease Management", "Preventive Care", "Health Screenings"]
        },
        {
            icon: <Activity />,
            title: "Emergency Medicine",
            description: "24/7 emergency care with rapid response and critical care capabilities.",
            features: ["Trauma Care", "Critical Care", "Emergency Surgery", "Ambulance Services"]
        },
        {
            icon: <Shield />,
            title: "Radiology",
            description: "Advanced imaging services with state-of-the-art diagnostic equipment.",
            features: ["MRI & CT Scans", "X-Ray Services", "Ultrasound", "Mammography"]
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Our Medical Services</h1>
                    <p>
                        Comprehensive healthcare services delivered by our team of specialists
                        using the latest medical technology and evidence-based practices.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Specialized Care Departments</h2>
                    <p className="section-subtitle">
                        From routine check-ups to complex procedures, we provide complete medical care
                    </p>
                    <div className="grid grid-2">
                        {services.map((service, index) => (
                            <div key={index} className="card">
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <div className="service-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem', marginRight: '20px', flexShrink: 0 }}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>{service.title}</h3>
                                        <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>{service.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Our Services Include:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} style={{
                                                marginBottom: '8px',
                                                paddingLeft: '20px',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    width: '8px',
                                                    height: '8px',
                                                    background: '#667eea',
                                                    borderRadius: '50%'
                                                }}></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Services */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>24/7 Emergency Care</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Our emergency department is staffed 24 hours a day, 7 days a week with
                                board-certified emergency physicians and specialized nurses ready to handle
                                any medical emergency.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Activity size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Trauma Level II Designation</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Heart size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Cardiac Emergency Care</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Brain size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Stroke Center Certified</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <Baby size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                                    <span>Pediatric Emergency Care</span>
                                </li>
                            </ul>
                            <div className="btn btn-primary" style={{ display: 'inline-block' }}>
                                Emergency: (555) 911-HELP
                            </div>
                        </div>
                        <div className="card">
                            <h3 style={{ marginBottom: '20px', color: '#667eea' }}>When to Visit Emergency</h3>
                            <p style={{ marginBottom: '15px' }}>Seek immediate emergency care for:</p>
                            <ul style={{ lineHeight: '1.8' }}>
                                <li>Chest pain or difficulty breathing</li>
                                <li>Severe bleeding or trauma</li>
                                <li>Signs of stroke or heart attack</li>
                                <li>Severe allergic reactions</li>
                                <li>High fever with severe symptoms</li>
                                <li>Loss of consciousness</li>
                                <li>Severe burns or poisoning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Advanced Medical Technology</h2>
                    <p className="section-subtitle">
                        We invest in the latest medical equipment to provide accurate diagnoses and effective treatments
                    </p>
                    <div className="grid grid-4">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Shield />
                            </div>
                            <h3>MRI & CT Imaging</h3>
                            <p>High-resolution imaging for precise diagnosis and treatment planning.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Activity />
                            </div>
                            <h3>Robotic Surgery</h3>
                            <p>Minimally invasive procedures with enhanced precision and faster recovery.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Heart />
                            </div>
                            <h3>Cardiac Catheterization</h3>
                            <p>State-of-the-art cardiac care with advanced interventional capabilities.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Eye />
                            </div>
                            <h3>Digital Pathology</h3>
                            <p>Advanced laboratory services with rapid, accurate diagnostic results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section stats">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Need Medical Care?</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: '0.9' }}>
                        Contact us today to schedule an appointment or learn more about our services
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/appointment" className="btn btn-white">
                            Book Appointment
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
