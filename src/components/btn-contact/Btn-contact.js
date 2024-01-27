import React from 'react';
import './Btn-contact.css'

function BtnContact() {
  const openMailbox = () => {
    const emailAddress = 'guerinflorian02@gmail.com';
    const mailtoURL = `mailto:${emailAddress}`;
    window.location.href = mailtoURL;
  };

  return(
    <div>
      <div className='bg-dark' id='btn-contact' onClick={openMailbox}>
        <p className='anonymous-pro-bold mid-txt'>Contact me ➡</p>
      </div>
    </div>
  )
}

export default BtnContact
