import React from 'react'
import { Single } from "./Single";

export const Display = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='my-3'>All Registrations</h3>
      {props.registrations.length === 0 ? "No Records to Display" :
        props.registrations.map((single) => {
          console.log(single.name);
          return (<Single single={single} key={single.name} onDelete={props.onDelete} />)
        })
      }
    </div>
  )
}
