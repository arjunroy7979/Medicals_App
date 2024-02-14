import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/UserReducer'
import { Link } from 'react-router-dom'

const UserDetails = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to Delete?")) {
            dispatch(deleteUser({ id: id }))
        }
    }

    return (
        <div className='container-fluid'>
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
                    <Link to={'/'} className='border px-5 rounded'>Back</Link>
                </tbody>
            </table>
        </div>
    )
}

export default UserDetails