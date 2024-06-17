import { useState } from 'react'
import superBowlLogo from './assets/cnw_super_big_one.svg'
import ticketsToWin from './assets/ticketsToWin.svg'
import './App.scss'

function App() {

  return (
    <>
      <div className="topSection">
        <div className="superBigOne">
          <img src={superBowlLogo} alt="The CNW Super Big One" />
        </div>
        <div className="ticketsToWin">
          <img src={ticketsToWin} alt="1 of 5 tickets to win" />
        </div>
      </div>
    </>
  )
}

export default App
