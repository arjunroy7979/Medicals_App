import React from 'react'
import Slider from "react-slick";
const OurServicesSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1238,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section className="section-wrapper-2">
                <div className="container-fluid p-5">
                    <h3 className="text-center animate__animated animate__fadeInDown animate__slower animate__infinite">Our Services</h3>
                    <p className="text-center p">We offer complete healthcare to individuals with various health concerns.</p>
                    <div className="slider-container mt-5">
                        <Slider {...settings}>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-danger text-white">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text text-white">Medical Provide a compherensive array of diagonistic
                                            /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i1.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-primary text-white">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text text-white">Medical Provide a compherensive array of diagonistic
                                            /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i2.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-warning text-white">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text text-white">Medical Provide a compherensive array of diagonistic
                                            /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i3.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-light ">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text">Medical Provide a compherensive array of diagonistic /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i4.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-secondary text-white">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text text-white">Medical Provide a compherensive array of diagonistic
                                            /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "17rem" }}>
                                    <div class="inner">
                                        <img src="../images/i5.jpg" className="card-img-top w3-image" alt=".." />
                                    </div>
                                    <div className="card-body bg-success text-white">
                                        <h5 className="card-title">Imaging & Diagnostics</h5>
                                        <p className="card-text text-white">Medical Provide a compherensive array of diagonistic
                                            /imaging
                                            services</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurServicesSection