import React, { useState } from 'react'
import { addUser } from '../../redux/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            alert('All Fields are Mandatory')
        } else {
            alert('Confirm to Booking')
            dispatch(addUser({ id: users[users.length - 1].id + 1, name, email, phone }))
            navigate('/userdetails')
        }
    }

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
                            <form action="" className=" bg-white shadow animate__animated animate__fadeInDownBig animate__slower" onSubmit={handleSubmit}>
                                <div className="form-head p-4 text-center">
                                    <h1>Make an appointment</h1>
                                </div>
                                <div className="p-5">
                                    <div className="form-detail">
                                        <p>Enter your contacts below to schedule an appointment or discuss it with us in
                                            details.</p>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Your name *" className="form-control p-4" name='name' onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Your email address *" className="form-control p-4" name='email' onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" placeholder="Phone number *" className="form-control p-4" name='phone' onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <button className=" btn btn-primary" type='submit'>Book now</button>
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