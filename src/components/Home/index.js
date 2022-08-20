
import LogoTitle from '/Users/vaibhavtripathi/Desktop/ReactJs/react-portfolio/src/assets/images/VaibhavLogo.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect } from 'react'
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'i', 'b', 'h', 'a', 'v', ' ', 'T', 'r', 'i', 'p', 'a', 't', 'h', 'i']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r.', ]

    useEffect(()=>{
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                    <br />
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray = {nameArray} idx={15} />
                <br />
                
                <AnimatedLetters letterClass={letterClass} strArray = {jobArray} idx={30} />
                </h1>
                <h2>Frontend Developer / Javascript / ReactJs / Django</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home