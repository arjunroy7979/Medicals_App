import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/UserReducer'
import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to Delete?")) {
            dispatch(deleteUser({ id: id }))
            navigate('/')
        }
    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button className='btn btn-sm btn-danger' onClick={() => handleDelete(user.id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDetails