import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="container mt-5 pt-5">
            <div className="">
                <h5>
                    <span> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /> </span>
                    <span className="services-name">PREVENTION</span>
                    <span>  <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                </h5>
            </div>

            <h1 className="mt-3 pt-2 prevent-title">How to Prevent Yourself</h1>
            <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />
                ligula eget dolor. Aenean massa.
            </p>

            <div className="row">
                {
                    categories.map((category) => (
                        <div key={category.id} className="col-md-6 col-sm-12 col-lg-4">
                            <div className="p-3 m-2 border border category">
                                <div>
                                    <img src={category.img} alt="" />
                                </div>
                                <h5 className="mt-4 item-title">{category.name}</h5>
                                <p className="mt-2 text-muted">{category.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Services;