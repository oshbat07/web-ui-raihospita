import React from 'react'
import '../styles/Card.css'

export default function Card({ src, width, height, alt, caption }) {
  return (
    <div className='card'>
      <img
        className="card-image"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      {/* <div className="card-caption">{caption}</div> */}
    </div>
  )
}
