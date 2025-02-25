import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readdata } from '../Slicedata/userSlice'

function Read() {

    const { user, loading } = useSelector((state) => state.user)


    useEffect(() => {
        dispatch(readdata())
    }, [])

    const dispatch = useDispatch()

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">phone</th>
                        <th scope='col' className='text-center'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-info'>view</button>
                                        <button className='btn btn-success mx-2'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Read
