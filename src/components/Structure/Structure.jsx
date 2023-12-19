import React, { useState } from 'react'
import "./structure.css"
import SideBar from '../sideBar/SideBar.jsx'
import Footer from '../footer/Footer.jsx'
import MessageBoard from '../pages/communication/MessageBoard/MessageBoard.jsx'
import Maps from '../pages/maps/Maps.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Incidents from '../pages/incidents/Incidents.jsx'
import Cameras from '../pages/cameras/Camera/Cameras.jsx'
import Communication from '../pages/communication/Communication.jsx'
import Realtimeinsights from '../pages/cms/Realtimeinsights.jsx'


const Structure = () => {
  let [ShowMessageBoard,setShowMessageBoard]=useState(false)
  function showMessageBoard(){
    setShowMessageBoard(true)
  }
  function hideMessageBoard(){
    setShowMessageBoard(false)
  }
  return (
    <BrowserRouter>
      <div className='mapsParent'>
        <div className='sidebar'>
        <SideBar showMessageBoard={showMessageBoard} hideMessageBoard={hideMessageBoard}/>
        </div>
       {ShowMessageBoard && <div className="messageBoard">
          <MessageBoard hideMessageBoard={hideMessageBoard}/>
        </div>}
        <div className={`mapsBody ${ShowMessageBoard?"smallmapsbody":""}`}>
          <div className='bodyContent'>
          <Routes>
            <Route path='/maps' element={<Maps/>}/>
            <Route path='/incidents' element={<Incidents/>}/>
            <Route path='/cameras' element={<Cameras/>}/>
            <Route path='/communication' element={<Communication/>}/>
            <Route path='/cms' element={<Realtimeinsights/>}/>
          </Routes>
          </div>
          <div className='footer'>
            <Footer ShowMessageBoard={ShowMessageBoard}/>
          </div>
        </div>
      </div>
      </BrowserRouter>
  )
}

export default Structure
