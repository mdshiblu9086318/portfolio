import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div style={{ background: 'rgb(70,74,72)' }}>
                <Navbar></Navbar>
            </div>
            <div className="contact-container">
                <div className="contact-content">
                    <h1>CONTACT WITH ME</h1>
                    <p>mdilahihossainshiblup@gmail.com</p>
                    <p>01639837570</p>
                    <p>Pabna ,Rajshahi, Bangladesh</p>
                </div>
                <div className="input-content">
                    <input type="text" name="" id="" placeholder="E mail" /><br /><br />
                    <input type="text" name="" id="" placeholder="Name" /><br /><br />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;