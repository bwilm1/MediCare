import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        MediCare+
                    </Link>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/appointment" className="btn btn-primary">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Book Appointment
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
