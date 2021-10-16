import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid mt-5 footer-section">
            <div className="row pb-2">
                <div className="col-md-3 col-sm-12">

                    <div className="">
                        <h5 className="mt-5 text-white">About Us</h5>
                        <span className="text-muted">Careers</span>
                        <br />
                        <span className="text-muted">Newsletter</span>
                        <br />
                        <span className="text-muted">Corporate</span>
                        <br />
                        <span className="text-muted">Accessibility</span>
                        <br />
                        <span className="text-muted">Medical Support</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="">
                        <h5 className="mt-5 text-white">Our Apps</h5>
                        <span className="text-muted">First Aid</span>
                        <br />
                        <span className="text-muted">Medil App</span>
                        <br />
                        <span className="text-muted">Medil Mobile</span>
                        <br />
                        <span className="text-muted">MedicineNet</span>
                        <br />
                        <span className="text-muted">eMedicineHealth</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="">
                        <h5 className="mt-5 text-white">Our Policies</h5>
                        <span className="text-muted">Privacy Policy</span>
                        <br />
                        <span className="text-muted">Editorial Policy</span>
                        <br />
                        <span className="text-muted">Advertising Policy</span>
                        <br />
                        <span className="text-muted">Correction Policy</span>
                        <br />
                        <span className="text-muted">Terms of Use</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="">
                        <h5 className="mt-5 text-white">For Advertisers</h5>
                        <span className="text-muted">WebMD Magazine</span>
                        <br />
                        <span className="text-muted">Advertise with Us</span>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <h5 className="text-white">Address</h5>
                <small className="mt-5 text-muted">Office: 12 Fake Street,New York</small>
                <br />
                <small className="mt-3 text-muted">Phone: (08) 8827 633354</small>
                <br />
                <small className="mt-3 text-muted">Fax: (08) 08 4752 1499</small>
                <br />
                <small className="mt-3 text-muted">Mail: support.medil.com</small>
            </div>
            <hr className="text-muted w-75 mx-auto" />
            <p className="text-muted">Copyright: All rights reserved by newardevil.com</p>
        </div>
    );
};

export default Footer;