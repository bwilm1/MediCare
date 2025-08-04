import React from 'react';
import { Star, Award, GraduationCap, MapPin } from 'lucide-react';

const Doctors: React.FC = () => {
    const doctors = [
        {
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            experience: "15+ years",
            education: "Harvard Medical School",
            rating: 4.9,
            patients: "2,500+",
            description: "Specializes in interventional cardiology and cardiovascular disease prevention.",
            achievements: ["Board Certified Cardiologist", "Fellow of American College of Cardiology", "Top Doctor Award 2023"]
        },
        {
            name: "Dr. Michael Chen",
            specialty: "Neurology",
            experience: "12+ years",
            education: "Johns Hopkins University",
            rating: 4.8,
            patients: "1,800+",
            description: "Expert in stroke treatment, epilepsy, and movement disorders.",
            achievements: ["Board Certified Neurologist", "Stroke Center Director", "Research Excellence Award"]
        },
        {
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatrics",
            experience: "10+ years",
            education: "Stanford School of Medicine",
            rating: 4.9,
            patients: "3,200+",
            description: "Passionate about child health and developmental pediatrics.",
            achievements: ["Board Certified Pediatrician", "Child Advocacy Award", "Patient Choice Award 2023"]
        },
        {
            name: "Dr. David Williams",
            specialty: "Orthopedics",
            experience: "18+ years",
            education: "Mayo Clinic Medical School",
            rating: 4.7,
            patients: "2,100+",
            description: "Specializes in joint replacement and sports medicine.",
            achievements: ["Board Certified Orthopedic Surgeon", "Sports Medicine Fellowship", "Innovation in Surgery Award"]
        },
        {
            name: "Dr. Lisa Park",
            specialty: "Emergency Medicine",
            experience: "14+ years",
            education: "University of Pennsylvania",
            rating: 4.8,
            patients: "4,000+",
            description: "Emergency physician with expertise in trauma and critical care.",
            achievements: ["Board Certified Emergency Physician", "Trauma Team Leader", "Excellence in Emergency Care"]
        },
        {
            name: "Dr. Robert Thompson",
            specialty: "Internal Medicine",
            experience: "20+ years",
            education: "Columbia University",
            rating: 4.9,
            patients: "2,800+",
            description: "Primary care physician focusing on preventive medicine and chronic disease management.",
            achievements: ["Board Certified Internist", "Primary Care Excellence Award", "Physician of the Year 2022"]
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Meet Our Expert Doctors</h1>
                    <p>
                        Our team of board-certified physicians brings decades of experience
                        and dedication to providing exceptional patient care.
                    </p>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Our Medical Team</h2>
                    <p className="section-subtitle">
                        Experienced professionals committed to your health and wellbeing
                    </p>
                    <div className="grid grid-2">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="card">
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <div className="doctor-image" style={{ width: '120px', height: '120px', marginRight: '20px', flexShrink: 0 }}>
                                        <span style={{ fontSize: '2rem' }}>{doctor.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginBottom: '5px', color: '#2c3e50' }}>{doctor.name}</h3>
                                        <p className="doctor-specialty" style={{ marginBottom: '10px' }}>{doctor.specialty}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Star size={16} style={{ color: '#ffd700', marginRight: '5px' }} />
                                            <span style={{ fontWeight: '600', marginRight: '10px' }}>{doctor.rating}</span>
                                            <span style={{ color: '#7f8c8d' }}>({doctor.patients} patients)</span>
                                        </div>
                                        <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>{doctor.description}</p>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Award size={16} style={{ marginRight: '8px', color: '#667eea' }} />
                                            <div>
                                                <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>Experience</div>
                                                <div style={{ fontWeight: '600' }}>{doctor.experience}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <GraduationCap size={16} style={{ marginRight: '8px', color: '#667eea' }} />
                                            <div>
                                                <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>Education</div>
                                                <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{doctor.education}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Achievements & Certifications</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {doctor.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} style={{
                                                marginBottom: '5px',
                                                paddingLeft: '15px',
                                                position: 'relative',
                                                fontSize: '0.9rem'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    width: '6px',
                                                    height: '6px',
                                                    background: '#667eea',
                                                    borderRadius: '50%'
                                                }}></span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e1e1e1', textAlign: 'center' }}>
                                    <a href="/appointment" className="btn btn-primary" style={{ width: '100%' }}>
                                        Book Appointment
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties Overview */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">Medical Specialties</h2>
                    <div className="grid grid-3">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Award />
                            </div>
                            <h3>Primary Care</h3>
                            <p>
                                Comprehensive primary care services including preventive care,
                                health screenings, and chronic disease management.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <Star />
                            </div>
                            <h3>Specialty Care</h3>
                            <p>
                                Expert specialists in cardiology, neurology, orthopedics,
                                and other specialized medical fields.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div className="service-icon">
                                <MapPin />
                            </div>
                            <h3>Emergency Care</h3>
                            <p>
                                24/7 emergency services with board-certified emergency
                                physicians and trauma specialists.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Recognition & Awards</h2>
                    <p className="section-subtitle">
                        Our doctors are recognized leaders in their fields
                    </p>
                    <div className="grid grid-4">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <Award size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Top Doctors</h3>
                            <p>15 physicians named in "Top Doctors" list 2023</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <Star size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Patient Choice</h3>
                            <p>98% patient satisfaction rating across all departments</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <GraduationCap size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Teaching Excellence</h3>
                            <p>Affiliated with top medical schools for resident training</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <MapPin size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Community Impact</h3>
                            <p>Serving our community for over 25 years with excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section stats">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Schedule with Our Experts</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: '0.9' }}>
                        Book an appointment with one of our board-certified physicians today
                    </p>
                    <a href="/appointment" className="btn btn-white">
                        Book Appointment Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Doctors;
