import superBowlLogo from './assets/cnw_super_big_one.svg'
import ticketsToWin from './assets/ticketsToWin.svg'
import tickets from './assets/ticket.svg'
import clipsal from './assets/Clipsal.svg'
import cnw from './assets/CNW.svg'
import './App.scss'

function App() {

  return (
    <div className="background">

      <div className="top-section">

        <div className="super-big-one">
          <img src={superBowlLogo} alt="The CNW Super Big One" />
        </div>

        <div className="ticket-area">

          <div className="tickets-to-win">
            <img src={ticketsToWin} alt="1 of 5 tickets to win" />
          </div>

          <div className="tickets">
            <img src={tickets} alt="your ticket to win a Super Trip of a lifetime" />
            <img src={tickets} alt="" />
            <img src={tickets} alt="" />
            <img src={tickets} alt="" />
            <img src={tickets} alt="" />
          </div>
        </div>

        <div className="top-section-text">
          <p>5 lucky winners to fly to Las Vegas for the big game</p>
        </div>

        <div className="logos">
            <img src={clipsal} alt="CNW Electircal Wholesale" />
            <img src={cnw} alt="CNW Electircal Wholesale" />
        </div>
      </div>

      <div className="bottom-section">

        <div className="instructions">
          <p>The once in a lifetime package</p>
          <p>Only 5 to be won</p>
          <p>Super big one experience package:</p>
          <ul>
            <li>1 x Ticket to the Big Game in Las Vegas</li>
            <li>1 x Return tickets to Las Vegas</li>
            <li>Four nights single room accommodation at 4 or 5 star hotel on the Las Vegas strip (Thurs to Mon)</li>
            <li><span className="uppercase">And more!!</span></li>
          </ul>
        </div>

        <div className="how-to-enter">
          <p>How to enter</p>
          <ul>
            <li>
              <p>1 entry</p>
              <p>Spend $1000 (exclusive of GST) in a single month on Eligible Clipsal/Schneider Products during the Promotional Period will earn a single entry into the draw.</p>
            </li>
            <li>
              <p>2 entry</p>
              <p>Spend $2000 (exclusive of GST) in a single month on Eligible Clipsal/Schneider Products during the Promotional Period will earn a two (2) entries into the draw.</p>
            </li>
            <li>
              <p>Bonus Online Entry</p>
              <p>Spend $1000 (exclusive of GST) spent in a single month on Eligible Clipsal/Schneider Products via the CNW Electrical Wholesale website during the Promotional Period will earn a single entry into the draw.</p>
            </li>
          </ul>
        </div>

        <div className="bottom-text">
          <p><span className="uppercase">Fair game</span></p>
          <p>Maximum entries per month = 3</p>
          <p>Maximum entries for entirety of promotion = 9</p>
          <p><span className="uppercase">Don&rsquo;t miss out on the experience of a lifetime!</span></p>
          <p><span className="uppercase">Get your entries in today!</span></p>
          <p>Visit <a href="https://shop.cnw.com.au/">cnw.com.au</a> for terms and conditions.</p>
        </div>

      </div>
    </div>
  )
}

export default App
