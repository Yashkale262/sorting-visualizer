import React from 'react'
import {Bar} from "./Bar";

export const Body = (props) => {

  let myStyle = {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    margin: "0 auto 0 auto"
}

let width=100/props.size;
  return (
    <div style={myStyle}>
      {
        props.array.map((element)=>{
          return(<Bar key={element.index} value={element.val} width={width} col={element.col}/>)
      })
      }
    </div>
  )
}


