import React from 'react'

function Fun_props({img,desc,title}) {
  return (
   
       <div className='col-md-4'>
                <div className="card" style={{width:"250px"}}>
                    <img src={img} className="card-img-top" alt="..."  />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                </div>
            </div>
   
  )
}

export default Fun_props
