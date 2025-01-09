import React from 'react'

function Silderdata({data,data1}) {
    return (
        <div>
            <div className="container-fluid page-header">
                <h1 className="display-3 text-uppercase text-white mb-3">{data}</h1>
                <div className="d-inline-flex text-white">
                    <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                    <h6 className="text-body m-0 px-3">/</h6>
                    <h6 className="text-uppercase text-body m-0">{data1}</h6>
                </div>
            </div>
        </div>
    )
}

export default Silderdata
