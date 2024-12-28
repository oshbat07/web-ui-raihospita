import React from 'react'
import '../styles/Card.css'

export default function PhotoCard({ src, width, height, alt, caption, onClick }) {
  return (
    <div className='card' onClick={onClick}>
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
