import React from 'react';
import mail from '../../../images/Banner&Background/mail1.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="container mt-5 pt-5">
            <h2>
                <span> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /> </span>
                <span className="services-name">Contact With Us</span>
                <span>  <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
            </h2>
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-md-5 col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label"></label>
                        <input type="text" className="input-field" id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"></label>
                        <input type="email" className="input-field" id="formGroupExampleInput2" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"></label>
                        <input type="phone" className="input-field" id="formGroupExampleInput2" placeholder="Phone" />
                    </div>
                    <input className="input-btn mb-3" type="submit" value="Submit" />
                </div>

                <div className="col-md-7 col-sm-12">
                    <img className="img-fluid w-75" src={mail} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;