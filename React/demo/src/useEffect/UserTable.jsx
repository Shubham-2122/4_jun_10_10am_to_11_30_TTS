import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTable() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    // api fetch 

    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setuser(res.data)
    }




    return (
        <div className='container'>
            <h1>Hello User data</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">Compnay Name</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    user.map((data,index)=>{
                        // console.log(data.name)
                        return(
                            <tr key={index}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.address.city}</td>
                            <td>{data.company.name}</td>
                        </tr>
                        )
                    })
                   } 
                </tbody>
            </table>

        </div>
    )
}

export default UserTable
