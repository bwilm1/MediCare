import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>MediCare+</h3>
                        <p>
                            Providing exceptional healthcare services with compassion and excellence.
                            Your health and wellbeing are our top priorities.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/doctors">Our Doctors</a></li>
                            <li><a href="/appointment">Book Appointment</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/services">Emergency Care</a></li>
                            <li><a href="/services">Cardiology</a></li>
                            <li><a href="/services">Pediatrics</a></li>
                            <li><a href="/services">Orthopedics</a></li>
                            <li><a href="/services">Radiology</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <MapPin size={16} style={{ marginRight: '8px' }} />
                            <span>123 Medical Center Dr, Healthcare City, HC 12345</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <Phone size={16} style={{ marginRight: '8px' }} />
                            <span>(555) 123-4567</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <Mail size={16} style={{ marginRight: '8px' }} />
                            <span>info@medicareplus.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Clock size={16} style={{ marginRight: '8px' }} />
                            <span>24/7 Emergency Care</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 MediCare+. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
