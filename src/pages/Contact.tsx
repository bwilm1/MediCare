import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Bus, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>
                        Get in touch with us for appointments, questions, or emergency care.
                        We're here to help you 24/7.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 style={{ marginBottom: '30px', color: '#2c3e50' }}>Get in Touch</h2>

                            <div className="card" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <MapPin size={24} style={{ marginRight: '15px', color: '#667eea', marginTop: '5px' }} />
                                    <div>
                                        <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>Address</h3>
                                        <p style={{ lineHeight: '1.6', color: '#7f8c8d' }}>
                                            123 Medical Center Drive<br />
                                            Healthcare City, HC 12345<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <Phone size={24} style={{ marginRight: '15px', color: '#667eea', marginTop: '5px' }} />
                                    <div>
                                        <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>Phone Numbers</h3>
                                        <p style={{ lineHeight: '1.8', color: '#7f8c8d' }}>
                                            <strong>Main Hospital:</strong> (555) 123-4567<br />
                                            <strong>Emergency:</strong> (555) 911-HELP<br />
                                            <strong>Appointments:</strong> (555) 123-APPT<br />
                                            <strong>Patient Information:</strong> (555) 123-INFO
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <Mail size={24} style={{ marginRight: '15px', color: '#667eea', marginTop: '5px' }} />
                                    <div>
                                        <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>Email</h3>
                                        <p style={{ lineHeight: '1.8', color: '#7f8c8d' }}>
                                            <strong>General Inquiries:</strong> info@medicareplus.com<br />
                                            <strong>Appointments:</strong> appointments@medicareplus.com<br />
                                            <strong>Patient Services:</strong> patients@medicareplus.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <Clock size={24} style={{ marginRight: '15px', color: '#667eea', marginTop: '5px' }} />
                                    <div>
                                        <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>Hours</h3>
                                        <p style={{ lineHeight: '1.8', color: '#7f8c8d' }}>
                                            <strong>Emergency Department:</strong> 24/7<br />
                                            <strong>Outpatient Services:</strong> Mon-Fri 7:00 AM - 8:00 PM<br />
                                            <strong>Weekend Clinic:</strong> Sat-Sun 9:00 AM - 5:00 PM<br />
                                            <strong>Pharmacy:</strong> Mon-Fri 8:00 AM - 9:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card">
                            <h3 style={{ marginBottom: '20px', color: '#667eea' }}>Send us a Message</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Select a subject</option>
                                        <option value="appointment">Appointment Request</option>
                                        <option value="billing">Billing Inquiry</option>
                                        <option value="medical-records">Medical Records</option>
                                        <option value="complaint">Complaint/Concern</option>
                                        <option value="compliment">Compliment</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows={5} required placeholder="Please provide details about your inquiry..."></textarea>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="checkbox" style={{ marginRight: '10px' }} required />
                                        I agree to the privacy policy and terms of service *
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directions Section */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">Directions & Parking</h2>
                    <div className="grid grid-3">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <Car size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>By Car</h3>
                            <p>
                                Free parking available in our main garage. Take Exit 15 from Highway 101
                                and follow the signs to Medical Center Drive.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <Bus size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Public Transit</h3>
                            <p>
                                Accessible via Metro Bus Route 42 and 67. The Medical Center stop
                                is directly in front of our main entrance.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <Navigation size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>GPS Coordinates</h3>
                            <p>
                                Latitude: 40.7580<br />
                                Longitude: -73.9855<br />
                                Use "MediCare+ Medical Center" in your GPS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Information */}
            <section className="section stats">
                <div className="container">
                    <h2 className="section-title">Emergency Information</h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ fontSize: '1.3rem', marginBottom: '20px', opacity: '0.9' }}>
                            For life-threatening emergencies, call 911 immediately
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <div className="btn btn-white" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                Emergency: (555) 911-HELP
                            </div>
                            <div className="btn btn-white" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                Poison Control: 1-800-222-1222
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-4">
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px' }}>Chest Pain</h3>
                            <p style={{ opacity: '0.9' }}>Call 911 immediately</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px' }}>Stroke Signs</h3>
                            <p style={{ opacity: '0.9' }}>F.A.S.T. - Face, Arms, Speech, Time</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px' }}>Severe Bleeding</h3>
                            <p style={{ opacity: '0.9' }}>Apply pressure, call 911</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px' }}>Difficulty Breathing</h3>
                            <p style={{ opacity: '0.9' }}>Seek immediate help</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Location Map</h2>
                    <div className="card" style={{
                        height: '400px',
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#667eea',
                        fontSize: '1.2rem',
                        textAlign: 'center'
                    }}>
                        <div>
                            <MapPin size={60} style={{ marginBottom: '20px' }} />
                            <p>Interactive Map Coming Soon</p>
                            <p style={{ fontSize: '1rem', opacity: '0.8' }}>
                                Use GPS coordinates: 40.7580, -73.9855
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
