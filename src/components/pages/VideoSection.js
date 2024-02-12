import React from 'react'

const VideoSection = () => {
    return (
        <div>
            <section className="section-wrapper-3">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="video-img">
                                <a href="https://youtu.be/irMpTi187Xk?si=6OB9eZ3ysalRqW77">
                                    <i className="fa fa-play-circle fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="inner-wrapper-3">
                                <h1 className='animate__animated animate__zoomInDown'>Watch This Video</h1>
                                <p>Find out more about our clinic by watching this video presentation of Medical.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoSection