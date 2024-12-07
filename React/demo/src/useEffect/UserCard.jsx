import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserCard() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setcard(res.data)
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    card.map((card1,index) => {
                        // console.log(card1)
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={card1.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{card1.title}</h5>
                                        <h5 className="card-title">{card1.price }  $</h5>
                                        <p className="card-text">{card1.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserCard
