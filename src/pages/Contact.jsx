import React from 'react'
import GenericCard from '../components/GenericCard'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div class='contact-container'>
      <div class='contact-card'>
        <GenericCard icon={'faLocationDot'} header={'Address'} description={'116, Gurunanakpura, near Capital Petrol Pump, Rasien Road, Bhopal, 462023'} />
        <GenericCard icon={'faPhone'} header={'Phone'} description={'+917509642432'} />
        <GenericCard icon={'faEnvelope'} header={'Email'} description={'info@raihospital.com'} />
      </div>
    </div>
  )
}
