import React from 'react'
const RegisterSection = () => {
    return (
        <div>
            <section className="section-wrapper">
                <div className="container-fluid --bg">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="content-wrapper">
                                <h1>Quality Medical Treatment</h1>
                                <h3>For You And Your Family</h3>
                                <a href="https://youtu.be/irMpTi187Xk?si=6OB9eZ3ysalRqW77">
                                    <i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>
                                </a>
                                <span>Watch our Video</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <form action="" className=" bg-white shadow">
                                <div className="form-head p-4 text-center">
                                    <h1>Make an appointment</h1>
                                </div>
                                <div className="p-5">
                                    <div className="form-detail">
                                        <p>Enter your contacts below to schedule an appointment or discuss it with us in
                                            details.</p>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Your name *" className="form-control p-4" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Your email address *" className="form-control p-4" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" placeholder="Phone number *" className="form-control p-4" />
                                    </div>
                                    <div className="mb-4">
                                        <button className=" btn btn-primary">Book now</button>
                                    </div>
                                    <div className="form-sugesstion">
                                        <p>Hurry up, we have a limited amount of slots this month.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterSection