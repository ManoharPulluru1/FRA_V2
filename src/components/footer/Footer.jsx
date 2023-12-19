import React from 'react'
import './footer.css'
import WeatherLogo from './images/weatherLogo.svg'
import leaves from './images/leaves.svg'
import envhazard from "./images/envhazards.svg"
import missing_person from "./images/missing_person.svg"
import nation_security from "./images/national_security_threats.svg"
import public_health from "./images/public_health.svg"

const Footer = ({ShowMessageBoard}) => {
  return (
    <div className='footerDiv'>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={WeatherLogo}/>
        <text>Weather Emergencies (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={leaves}/>
        <text>Natural Disaster (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={envhazard}/>
        <text>Environmental Hazards (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={missing_person}/>
        <text>Missing Persons (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={nation_security}/>
        <text>National Security Threats (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={public_health}/>
        <text>Public Health Emergencies (4)</text>
      </div>
      <div className={`natDisTab ${ShowMessageBoard?"natDisTabActiveMessageBoardfootertab":""}`}>
        <img className='logoInFooter' alt='weather logo' src={WeatherLogo}/>
        <text>Weather Emergencies (4)</text>
      </div>
    </div>
  )
}

export default Footer
