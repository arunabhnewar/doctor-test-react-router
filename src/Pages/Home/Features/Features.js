import React, { useEffect, useState } from 'react';
import './Features.css'

const Features = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/faakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="shop" className="container mt-5 py-5">
            <div className="">
                <h5>
                    <span> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /> </span>
                    <span className="features-name">Features</span>
                    <span>  <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                </h5>

                <h1 className="mt-3 pt-2 features-title">Shop by Features</h1>
                <p className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                </p>

                <div className="btn-section">
                    <button className="btn m-2 features-btn">New Arrivals</button>
                    <button className="btn m-2 features1-btn">Featured</button>
                    <button className="btn m-2 features1-btn">Best Sellers</button>
                </div>
            </div>


            <div className="row mt-4">
                {
                    products.map(product => (
                        <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 product">
                                <img className="w-100" src={product.image} alt="" />

                                <p className="mt-3 product-name"><strong>{product.name}</strong> </p>

                                <h4 className="product-price">{product.price}</h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Features;