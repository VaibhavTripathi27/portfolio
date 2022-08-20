import AnimatedLetters from '../AnimatedLetters'
import'./index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import { Popup } from 'react-leaflet'

const Contact = () =>  {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(()=>{
        setTimeout(()=> {
    setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const SendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_xrbpenr', 
            'template_r02q7li', 
            refForm.current,
            'tWT1e1kWBNOaewZxb'
        )
        .then (
            ()=> {
                alert('Message Successfully sent!')
                window.location.reload(false)
            }, 
            ()=> {
                alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
        <div className="container contact-page">
          <div className="text-zone">
              <h1>
                  <AnimatedLetters letterClass={letterClass} strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx = {15}/>
                  
             </h1>
             <p>
                 I am interested in freelance opportunities - especially ambitious or <br />
                 large projects. However, if you have other request or question, <br />
                 don't hesitate to contact me using below form either.
             </p>
             <div className="contact-form">
                 <form ref = {refForm} onSubmit={SendEmail}>
                     <ul>
                         <li className="half">
                             <input type="text" name='name' placeholder="Name" required />
                         </li>
                         <li className="half">
                             <input type="email" name='email' placeholder="Email" required />
                         </li>
                        <li>
                            <input placeholder="Subject" name="subject" type="text" required/>
                        </li>
                        <li> 
                            <textarea placeholder="Message" name ="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </li>
                     </ul>
                 </form>
             </div>
              </div>  
              <div className="info-map">
                  Vaibhav Tripathi,
                  <br />
                    India,
                    <br />
                    A-29 Damodar Hostel, SOE,JNU 
                    <br />
                    Delhi, 110067 <br />
                    <span>yvy8277@gmail.com</span>
              </div>
       <div className="map-wrap">
         <MapContainer center={[27.143584,81.970512]} zoom={13}>
             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
             <Marker position={[27.143584,81.970512]}>
                <Popup>Come lets have a coffee!!</Popup>
             </Marker>
             </MapContainer> 
       </div>
        </div>
        </>
    )
}

export default Contact