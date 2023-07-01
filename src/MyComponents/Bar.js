import React from 'react'
import './mycss.css'

export const Bar = (props) => {

    let myStyle = {
        height: (props.value/2.2)+'px',
        backgroundColor: props.col,
        color: "white",
        width: (props.width)*0.8+'%',
        margin: 0,
        textAlign:"center",
        fontWeight: 600,
        border: "1px solid black"
        
    }
    
    
  return (
    <div style={myStyle}>
       <div class="bar">{(props.width)>4&&props.value}</div>
    </div>
  )
}


