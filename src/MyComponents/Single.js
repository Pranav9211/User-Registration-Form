import React from 'react'

export const Single = ({single, onDelete}) => {
  return (
      <div>
      <h4>{single.name}</h4>
      <p>{single.email}</p>
      <button className="btn btn-sm btn-danger mb-3" onClick={()=>{onDelete(single)}}>Delete</button>
    </div>
  )
}
