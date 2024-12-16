// File: Registration.js
import React, { useState } from 'react';
import "./Registration.css";
 // Add styling for the registration component

const Registration = ({ close }) => {


  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [promoCode, setPromoCode] = useState('');

  const closeRegister =()=>{
    close();
  }

  const handleSendSMS = () => {
  
    console.log('SMS sent to', phoneNumber);

  };

  const handleRegister = () => {
    
    console.log('Registered with:', { phoneNumber, confirmationCode, currency, promoCode });
    
  };

  return (
    <div className="registration-overlay">
      <div className="registration-container">
        <h2>REGISTRATION</h2>
        <div className="tabs">
          <button className="active">By phone</button>
          <button>One-click</button>
          <button>By e-mail</button>
          <button>Socials</button>
        </div>
        <div className="form-section">
          <h4>Choose a welcome bonus</h4>
          <div className="bonus-options">
            <label>
              <input type="radio" name="bonus" /> Bonus for sports betting
            </label>
            <label>
              <input type="radio" name="bonus" /> Casino + Fast Games
            </label>
            <label>
              <input type="radio" name="bonus" /> Reject bonuses
            </label>
          </div>
          <div className="input-fields">
            <label>Your phone number</label>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="text"
                placeholder="81234 56789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button onClick={handleSendSMS}>Send SMS</button>
            </div>
            <label>Confirmation code</label>
            <input
              type="text"
              placeholder="Enter code"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <label>Select currency</label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="USD">US Dollar (USD)</option>
            </select>
            <label>Promo code (if you have one)</label>
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <button className="register-button" onClick={handleRegister}>REGISTER</button>
          <p className="terms">
            By clicking this button you confirm that you have read and agree to the
            <a href="#"> Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
          <p>Already have an account? <a href="#">Log in</a></p>
          <button className="close-button" onClick={closeRegister}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
