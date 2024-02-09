import React from 'react'

const FacilitySection = () => {
    return (
        <div>
            <section className="section-wrapper-1">
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-12 col-md-12">
                            <h2 className='animate__animated animate__bounceInUp'>Why Choose Our Clinic</h2>
                        </div>
                        <div className="col-12 col-md-12">
                            <p>Here are a few reasons why Medical is the area's healthcare provider of choice.</p>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <img src="./images/l1.png" alt="" className="mb-3"/>
                                <h4>Professional Doctors</h4>
                                <p className="mt-2">Our clinic hires experienced and nationally certified doctors and nurses.</p>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <img src="./images/l2.png" alt="" className="mb-2"/>
                                <h4>Family medicine</h4>
                                <p>We provide a wide variety of family medicine services including hospital care.</p>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <img src="./images/l3.png" alt="" className="mb-3"/>
                                <h4>24/7 patient support</h4>
                                <p>Our clinic provides extensive medical support and healthcare services 24/7.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FacilitySection