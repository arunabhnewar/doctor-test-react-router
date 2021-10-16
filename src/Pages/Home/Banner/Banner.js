import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row d-flex flex-row-reverse align-items-center banner-section">
                <div className="col-md-5 col-sm-12 ">
                    <h1 className="text-white fw-bold">Take care of your Health Now!</h1>
                    <h5 className="text-white pb-3">Sale up to 30% all products</h5>
                    <button className="btn regular-btn">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;