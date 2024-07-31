// src/MyComponents/Single.js
import React, { useEffect, useRef } from 'react';

export const Single = ({ single, onDelete, highlighted }) => {
  const userRef = useRef(null);

  useEffect(() => {
    if (highlighted) {
      userRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlighted]);

  return (
    <div ref={userRef} style={{ backgroundColor: highlighted ? '#ffff99' : 'transparent', padding: '10px', marginBottom: '10px', border: highlighted ? '2px solid #ffcc00' : '1px solid #ddd' }}>
      <h4>{single.name}</h4>
      <p>{single.email}</p>
      <button className="btn btn-sm btn-danger mb-3" onClick={() => onDelete(single)}>Delete</button>
    </div>
  )
}
