import React from 'react'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../images/logo.png" alt="" className="navbar-brand-img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto w-100">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <div className="nav-box">
                                        <h5 className="d-flex justify-content-end">P: +1 234 567 8901</h5>
                                        <p>178 West 27th Street, Suite 527, New York NY 10012</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar