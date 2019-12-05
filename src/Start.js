import React from 'react'

const Start = ({start}) => {
    return(
        <div className="start d-flex justify-content-center align-items-center start">
            <button type="button"
                className="btn btn-outline-dark font-size"
                onClick={start}>start</button>
        </div>
    )
}

export default Start;