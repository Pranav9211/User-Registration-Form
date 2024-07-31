// src/MyComponents/Display.js
import React from 'react'
import { Single } from "./Single";

export const Display = ({ registrations, onDelete, highlightedUserId }) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='my-3'>All Registrations</h3>
      {registrations.length === 0 ? "No Records to Display" :
        registrations.map((single) => {
          return (
            <Single
              single={single}
              key={single._id}
              onDelete={onDelete}
              highlighted={single._id === highlightedUserId}
            />
          )
        })
      }
    </div>
  )
}
