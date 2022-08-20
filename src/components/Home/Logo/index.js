import './index.scss';
import LogoS from '/Users/vaibhavtripathi/Desktop/ReactJs/react-portfolio/src/assets/images/vaibhavtripathi.png'
import { useRef, useEffect} from 'react';
import { gsap } from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";


const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(()=> {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
        .timeline()
        .to(bgRef.current, { duration: 1, opacity: 1})
        .from(outlineLogoRef.current, {drawSVG: 0, duration: 20})
        gsap.fromTo(solidLogoRef.current, {opacity: 0}, {opacity: 1, delay: 5, duration: 5})
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} src={LogoS} alt="S" className="solid-logo" />
            
      <svg xmlns="http://www.w3.org/2000/svg" width="559pt" height="897pt" fill="currentColor" class="bi bi-chevron-bar-expand" viewBox="0 0 559 897"> 
      <g className="svg-container" transform="translate(0 457) scale(.1 -.1)" fill="none">
       <path ref={outlineLogoRef} fill-rule="evenodd" d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"/> 
       </g>
       </svg>
        </div>
    )
}

export default Logo
