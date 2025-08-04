import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, FileText } from 'lucide-react';

const Appointment: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        department: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: '',
        appointmentType: '',
        reason: '',
        insurance: '',
        emergencyContact: '',
        emergencyPhone: '',
        previousPatient: '',
        allergies: '',
        medications: '',
        additionalNotes: ''
    });

    const departments = [
        { value: 'cardiology', label: 'Cardiology' },
        { value: 'neurology', label: 'Neurology' },
        { value: 'pediatrics', label: 'Pediatrics' },
        { value: 'orthopedics', label: 'Orthopedics' },
        { value: 'emergency', label: 'Emergency Medicine' },
        { value: 'internal', label: 'Internal Medicine' },
        { value: 'ophthalmology', label: 'Ophthalmology' },
        { value: 'radiology', label: 'Radiology' }
    ];

    const doctors = {
        cardiology: ['Dr. Sarah Johnson', 'Dr. Michael Thompson'],
        neurology: ['Dr. Michael Chen', 'Dr. Lisa Wang'],
        pediatrics: ['Dr. Emily Rodriguez', 'Dr. James Wilson'],
        orthopedics: ['Dr. David Williams', 'Dr. Maria Garcia'],
        emergency: ['Dr. Lisa Park', 'Dr. Robert Adams'],
        internal: ['Dr. Robert Thompson', 'Dr. Susan Davis'],
        ophthalmology: ['Dr. Jennifer Lee', 'Dr. Mark Johnson'],
        radiology: ['Dr. Kevin Brown', 'Dr. Amy Foster']
    };

    const timeSlots = [
        '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Appointment request submitted successfully! We will contact you shortly to confirm your appointment.');
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Book an Appointment</h1>
                    <p>
                        Schedule your visit with our expert medical team. We're here to provide
                        you with the best possible care at your convenience.
                    </p>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px', background: '#f8f9fa' }}>
                <div className="container">
                    <div className="grid grid-3">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <Calendar size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Easy Scheduling</h3>
                            <p>Book appointments online 24/7 or call us during business hours.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <Clock size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Flexible Hours</h3>
                            <p>Extended hours and weekend appointments available for your convenience.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <User size={40} style={{ color: '#667eea', margin: '0 auto 15px' }} />
                            <h3>Expert Care</h3>
                            <p>Choose from our team of board-certified specialists and physicians.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Schedule Your Appointment</h2>
                            <p style={{ marginBottom: '30px', lineHeight: '1.6', color: '#7f8c8d' }}>
                                Please fill out the form below to request an appointment. Our staff will contact you
                                within 24 hours to confirm your appointment time and provide any additional instructions.
                            </p>

                            <div className="card" style={{ marginBottom: '30px' }}>
                                <h3 style={{ marginBottom: '15px', color: '#667eea' }}>
                                    <Phone size={20} style={{ marginRight: '10px' }} />
                                    Need Help?
                                </h3>
                                <p style={{ marginBottom: '10px' }}>
                                    <strong>Appointments:</strong> (555) 123-APPT
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <strong>Emergency:</strong> (555) 911-HELP
                                </p>
                                <p>
                                    <strong>Hours:</strong> Mon-Fri 7:00 AM - 8:00 PM
                                </p>
                            </div>

                            <div className="card">
                                <h3 style={{ marginBottom: '15px', color: '#667eea' }}>
                                    <FileText size={20} style={{ marginRight: '10px' }} />
                                    What to Bring
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
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
                                        Valid photo ID
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
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
                                        Insurance card
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
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
                                        List of current medications
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
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
                                        Previous medical records (if applicable)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="card">
                            <h3 style={{ marginBottom: '20px', color: '#667eea' }}>Appointment Request Form</h3>
                            <form onSubmit={handleSubmit}>
                                {/* Personal Information */}
                                <h4 style={{ marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #e1e1e1', paddingBottom: '10px' }}>
                                    Personal Information
                                </h4>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dateOfBirth">Date of Birth *</label>
                                        <input
                                            type="date"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                    </select>
                                </div>

                                {/* Appointment Details */}
                                <h4 style={{ marginBottom: '20px', marginTop: '30px', color: '#2c3e50', borderBottom: '2px solid #e1e1e1', paddingBottom: '10px' }}>
                                    Appointment Details
                                </h4>

                                <div className="form-group">
                                    <label htmlFor="department">Department *</label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select department</option>
                                        {departments.map(dept => (
                                            <option key={dept.value} value={dept.value}>{dept.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {formData.department && (
                                    <div className="form-group">
                                        <label htmlFor="doctor">Preferred Doctor</label>
                                        <select
                                            id="doctor"
                                            name="doctor"
                                            value={formData.doctor}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">No preference</option>
                                            {doctors[formData.department as keyof typeof doctors]?.map(doctor => (
                                                <option key={doctor} value={doctor}>{doctor}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div className="form-group">
                                        <label htmlFor="appointmentDate">Preferred Date *</label>
                                        <input
                                            type="date"
                                            id="appointmentDate"
                                            name="appointmentDate"
                                            value={formData.appointmentDate}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="appointmentTime">Preferred Time *</label>
                                        <select
                                            id="appointmentTime"
                                            name="appointmentTime"
                                            value={formData.appointmentTime}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select time</option>
                                            {timeSlots.map(time => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="appointmentType">Appointment Type *</label>
                                    <select
                                        id="appointmentType"
                                        name="appointmentType"
                                        value={formData.appointmentType}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select type</option>
                                        <option value="new-patient">New Patient Consultation</option>
                                        <option value="follow-up">Follow-up Visit</option>
                                        <option value="routine-checkup">Routine Checkup</option>
                                        <option value="urgent-care">Urgent Care</option>
                                        <option value="specialist-referral">Specialist Referral</option>
                                        <option value="diagnostic-test">Diagnostic Test</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reason">Reason for Visit *</label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        rows={3}
                                        required
                                        placeholder="Please describe your symptoms or reason for the visit..."
                                    ></textarea>
                                </div>

                                {/* Additional Information */}
                                <h4 style={{ marginBottom: '20px', marginTop: '30px', color: '#2c3e50', borderBottom: '2px solid #e1e1e1', paddingBottom: '10px' }}>
                                    Additional Information
                                </h4>

                                <div className="form-group">
                                    <label htmlFor="insurance">Insurance Provider</label>
                                    <input
                                        type="text"
                                        id="insurance"
                                        name="insurance"
                                        value={formData.insurance}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Blue Cross Blue Shield, Aetna, Medicare"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div className="form-group">
                                        <label htmlFor="emergencyContact">Emergency Contact Name</label>
                                        <input
                                            type="text"
                                            id="emergencyContact"
                                            name="emergencyContact"
                                            value={formData.emergencyContact}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
                                        <input
                                            type="tel"
                                            id="emergencyPhone"
                                            name="emergencyPhone"
                                            value={formData.emergencyPhone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="previousPatient">Are you a previous patient?</label>
                                    <select
                                        id="previousPatient"
                                        name="previousPatient"
                                        value={formData.previousPatient}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="allergies">Known Allergies</label>
                                    <textarea
                                        id="allergies"
                                        name="allergies"
                                        value={formData.allergies}
                                        onChange={handleInputChange}
                                        rows={2}
                                        placeholder="List any known allergies to medications, foods, or other substances"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="medications">Current Medications</label>
                                    <textarea
                                        id="medications"
                                        name="medications"
                                        value={formData.medications}
                                        onChange={handleInputChange}
                                        rows={2}
                                        placeholder="List all current medications, including dosage"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="additionalNotes">Additional Notes</label>
                                    <textarea
                                        id="additionalNotes"
                                        name="additionalNotes"
                                        value={formData.additionalNotes}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Any additional information you'd like us to know"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <input type="checkbox" style={{ marginRight: '10px', marginTop: '4px' }} required />
                                        <span>
                                            I acknowledge that this is a request for an appointment and not a confirmed appointment.
                                            I understand that MediCare+ will contact me to confirm the appointment details. *
                                        </span>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <input type="checkbox" style={{ marginRight: '10px', marginTop: '4px' }} />
                                        <span>
                                            I consent to receive appointment reminders and health information via email and SMS.
                                        </span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}>
                                    Submit Appointment Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Notice */}
            <section className="section stats">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Medical Emergency?</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '20px', opacity: '0.9' }}>
                        For life-threatening emergencies, do not use this form
                    </p>
                    <p style={{ fontSize: '1.5rem', marginBottom: '30px', fontWeight: 'bold' }}>
                        Call 911 or go to the nearest emergency room immediately
                    </p>
                    <div className="btn btn-white" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Emergency Line: (555) 911-HELP
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
