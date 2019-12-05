import React from 'react'

const Frame = ({show}) => {

    const style = {
        backgroundColor:'#fff'
    }
    if(show){
        style.backgroundColor = 'black'
    }

    return(
        <div className="frame" style={style}></div>
    )
}

export default Frame;