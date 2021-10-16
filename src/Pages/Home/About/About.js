import React from 'react';
import './About.css';
import about from '../../../images/Banner&Background/kit.png';

const About = () => {
    return (
        <div id="about" className="container mt-5 pt-5">
            <div className="about-section">
                <div className="row p-3">
                    <div className="col-md-6 col-sm-12">
                        <img className="w-75" src={about} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h5 className="pt-5">
                            <span> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /> </span>
                            <span className="about-name"> About Us</span>
                            <span> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /> </span>
                        </h5>

                        <h1 className="mt-5 about-title text-start">Medical Equipment and Kit</h1>
                        <p className="text-muted text-start">
                            Pair large text with an image to give focus to your chosen
                            product, collection, or blog post. Add details on availability,
                            style, or even provide a review. Even if you can't afford to
                            travel the world, you can take your children to the museum, zoo
                            or local park. And don't be afraid to take them to grown-up
                            spots. Eating out in a restaurant teaches children how to be
                            quiet and polite and gives them the pleasure of knowing you
                            trust them to behave.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;