import { useState } from "react";
import "./styles/global.scss";
import Sun from "./Ellipse72.svg";
import Moon from "./Ellipse 73.svg";
import Cal from "./noun-calculator-4547811 1.svg";
import tic from "./noun-ticket-4213441 1.svg";
import book from "./noun-bookmark-5116977 1.svg";
import mes from "./noun-mail-4547835 1.svg";
import wal from "./noun-wallet-4547857 1.svg";
import set from "./noun-setting-4547794 1.svg";
import gre from "./Ellipse 76.svg";
import man from "./image 126.png";
import arr from "./akar-icons_arrow-left.svg";
import ep from "./Ellipse 77.svg";
import lod from "./noun-logout-4587969 1.svg";
import sea from "./akar-icons_search.svg";
import Noti from "./Notification.svg";
import Notif from "./mi_notification.svg";
import Icon from "./Notification (1).svg";
import Dow from "./down arrow.svg";
import Dub from "./Rectangle 1908.png";
import Mal from "./Rectangle 1907 (2).png";
import Bal from "./Rectangle 1907 (3).png";
import ke from "./Rectangle 1911.png";
import suk from "./Rectangle 1911 (1).png";
import eit from "./Rectangle 1907 (2).png";
import kas from "./Rectangle 1907 (3).png";
import fae from "./fa6-solid_location-dot.svg";
import lef from "./Icons (1).svg";
import rig from "./Icons.svg";
import Goa from "./Rectangle 1911 (4).png";
import Shi from "./Rectangle 1911 (5).png";
import And from "./Rectangle 1911 (6).png";
import icc from "./akar-icons_calendar.svg"



export default function App() {
  const [dashboardClicked, setDashboardClicked] = useState(false);
  const [ticketsClicked, setTicketsClicked] = useState(false);
  const [favouriteClicked, setFavouriteClicked] = useState(false);
  const [messagesClicked, setMessagesClicked] = useState(false);
  const [transactionClicked, setTransactionClicked] = useState(false);
  const [settingsClicked, setSettingsClicked] = useState(false);

  const handleDashboardClick = () => {
    setDashboardClicked(true);
    setTicketsClicked(false);
    setFavouriteClicked(false);
    setMessagesClicked(false);
    setTransactionClicked(false);
    setSettingsClicked(false);
  };

  const handleTicketsClick = () => {
    setDashboardClicked(false);
    setTicketsClicked(true);
    setFavouriteClicked(false);
    setMessagesClicked(false);
    setTransactionClicked(false);
    setSettingsClicked(false);
  };

  const handleFavouriteClick = () => {
    setDashboardClicked(false);
    setTicketsClicked(false);
    setFavouriteClicked(true);
    setMessagesClicked(false);
    setTransactionClicked(false);
    setSettingsClicked(false);
  };

  const handleMessagesClick = () => {
    setDashboardClicked(false);
    setTicketsClicked(false);
    setFavouriteClicked(false);
    setMessagesClicked(true);
    setTransactionClicked(false);
    setSettingsClicked(false);
  };

  const handleTransactionClick = () => {
    setDashboardClicked(false);
    setTicketsClicked(false);
    setFavouriteClicked(false);
    setMessagesClicked(false);
    setTransactionClicked(true);
    setSettingsClicked(false);
  };

  const handleSettingsClick = () => {
    setDashboardClicked(false);
    setTicketsClicked(false);
    setFavouriteClicked(false);
    setMessagesClicked(false);
    setTransactionClicked(false);
    setSettingsClicked(true);
  };

  return (
    <div className="container">
      <header>
        <div className="men">
          <h1 className="fox">Maser Travels</h1>
          <button className={`but ${dashboardClicked ? 'active' : ''}`} onClick={handleDashboardClick}><h1 className="dash">Dashboard</h1></button>
          <div className="ii"><img src={Cal} alt="i" /></div>
          <div className={`hw ${ticketsClicked ? 'active' : ' '}`} onClick={handleTicketsClick}><h1 className="tic">My Tickets</h1><div className="dd"><img className="tic1" src={tic} /></div></div>
          <div className={`hw ${favouriteClicked ? 'active' : ''}`} onClick={handleFavouriteClick}><h1 className="tic">Favourite</h1><div className="dd"><img className="tic1" src={book} /></div></div>
          <div className={`hw ${messagesClicked ? 'active' : ''}`} onClick={handleMessagesClick}><h1 className="tic">Message</h1><div className="dd"><img className="tic1" src={mes} /></div></div>
          <div className={`hw ${transactionClicked ? 'active' : ''}`} onClick={handleTransactionClick}><h1 className="tic">Transaction</h1><div className="dd"><img className="tic1" src={wal} /></div></div>
          <div className={`hw ${settingsClicked ? 'active' : ''}`} onClick={handleSettingsClick}><h1 className="tic">Settings</h1><div className="dd"><img className="tic1" src={set} /></div></div>
          <div className="he">
            <div className="dis">
              <div className="dis1"><img className="dis2" src={gre} />
                <h1 className="dic">50% Discount!</h1>
                <p className="pp">Get a discount on certain days and don't miss it.</p>
              </div>
              <div className="man"><img src={man} /></div>
              <div className="ep"><img src={ep} /></div>
              <div className="arr"> <img src={arr} /></div>
              <h1 className="l">Logout</h1>
              <div className="log"><img className="log" src={lod} /></div>
            </div>
          </div>
          <div className="sunm"> <img className="sun" src={Sun} alt="qq" /><img className="moon" src={Moon} alt="qq" /></div>
        </div>
        <div className="body">
          {dashboardClicked && (
            <>
              <div className="body-h">
                <div className="search" ><h1 className="se">Search for your favourite destination</h1></div>
                <div className="see"><img src={sea} /></div>
                <div className="sei"><h1 className="seae">search</h1> </div>
                <div className="nnot"> <div className="noti"><img src={Noti} /></div> <div className="notif"><img src={Notif} /></div></div>
                <div className="nnot2"> <div className="noti1"><img src={Icon} /> <div></div><h1 className="name1">Maser</h1> <h1 className="pa">Traveler Pro</h1></div> <div className="notif2"><img src={Dow} /></div></div>
              </div>
              <div className="body-m"><h1 className="wel"> Hello Maser!</h1>
                <p className="welc">Welcome back and explore the world.</p>
                <h1 className="ease">Easy Visa Destinations</h1>
                <div className="vie"><a href="#">View All</a></div>
              </div>
              <div className="body-m2">
                <div className="img10"><div className="img101"><img src={Bal} /><h1 className="bali">Bali</h1><div className="bacl"><h1 className="cont">Starting at</h1> <h1 className="cont1">$ 700</h1></div></div> </div>
                <div className="img11"><div className="img111"><img src={Dub} /><h1 className="bali">Dubai</h1><div className="bacl1"><h1 className="cont">Starting at</h1> <h1 className="cont1">$ 700</h1></div></div> </div>
                <div className="img12"><div className="img121"><img src={Mal} /><h1 className="bali">Maldives</h1><div className="bacl1"><h1 className="cont">Starting at</h1> <h1 className="cont1">$ 700</h1></div></div> </div>
              </div>
              <div className="mbn"><h1 className="most">Most Popular</h1><h1 className="spec">Special Offers</h1><h1 className="near">Near Me</h1></div>
              <div className="deta"><div className="kar"><img className="ke" src={ke} /><h1 className="ker">Kerala</h1><h1 className="ker1"><img className="fae" src={fae} /> India</h1><h1 className="and">$ 700 <h1 className="day">/ day </h1></h1></div></div>
              <div className="det"><div className="kar"><img className="ke" src={suk} /><h1 className="ker">Kerala</h1><h1 className="ker1"><img className="fae" src={fae} /> India</h1><h1 className="and">$ 700 <h1 className="day">/ day </h1></h1></div></div>
              <div className="deta"><div className="kar"><img className="ka" src={eit} /><h1 className="ker">Kerala</h1><h1 className="ker1"><img className="fae" src={fae} /> India</h1><h1 className="and">$ 700 <h1 className="day">/ day </h1></h1></div></div>
              <div className="det"><div className="kar"><img className="ka" src={kas} /><h1 className="ker">Kerala</h1><h1 className="ker1"><img className="fae" src={fae} /> India</h1><h1 className="and">$ 700 <h1 className="day">/ day </h1></h1></div></div>
              <div className="calender"><div className="month"> September 2023</div> <div className="lef"><img className="lee" src={lef}/></div><div className="rig"><img className="rii" src={rig}/></div><div className="days"><h1 className="sun1">SUN</h1><h1 className="mon">MON</h1><h1 className="tue">TUE</h1><h1 className="wed">WED</h1><h1 className="thu">THU</h1><h1 className="fri">FRI</h1><h1 className="sat">SAT</h1> </div><div className="days11"><h1 className="thu">1</h1><h1 className="fri">2</h1><h1 className="sat">3</h1> </div><div className="days1"><h1 className="sun1">4</h1><h1 className="mon">5</h1><h1 className="tue">6</h1><h1 className="wed">7</h1><h1 className="thu">8</h1><h1 className="fri">9</h1><h1 className="sat">10</h1> </div><div className="days1"><h1 className="sun1">11</h1><h1 className="mon">12</h1><h1 className="tue">13</h1><h1 className="wed1">14</h1><h1 className="thu">15</h1><h1 className="fri">16</h1><h1 className="sat1">17</h1> </div><div className="days1"><h1 className="sun1">18</h1><h1 className="mon">19</h1><h1 className="tue">20</h1><h1 className="wed">21</h1><h1 className="thu">22</h1><h1 className="fri">23</h1><h1 className="sat">24</h1> </div><div className="days12"><h1 className="sun1">25</h1><h1 className="mon">26</h1><h1 className="tue">27</h1><h1 className="wed">28</h1><h1 className="thu">29</h1><h1 className="fri">30</h1> </div>
              <div><h1 className="book">Bookings</h1> <div className="vie1"><a className="vie" href="#">View all</a></div></div> <div><h1 className="twt"> 2022</h1></div> <div className="gsa"><div className="goa"><img src={Goa}/></div></div><div className="goa11"><h1 className="goa1"> Goa</h1><div className="icc"><img src={icc}/> <h1 className="goa2">16 Apr - 20 Apr</h1></div> <div className="gsa"><div className="goa"><img src={Shi}/></div></div></div><h1 className="goa1"> Shimla</h1><div className="icc"><img src={icc}/> <h1 className="goa2">16 Apr - 20 Apr</h1></div> <div className="gsa"><div className="goa"><img src={And}/></div></div><h1 className="goa1"> Andaman</h1><div className="icc"><img src={icc}/> <h1 className="goa2">16 Apr - 20 Apr</h1></div></div>
            </>
          )}
          {ticketsClicked && (
            <div className="body-h">
              <h1>What's up1</h1>
            </div>
          )}
          {favouriteClicked && (
            <div className="body-h">
              <h1>What's up2</h1>
            </div>
          )}
          {messagesClicked && (
            <div className="body-h">
              <h1>What's up3</h1>
            </div>
          )}
          {transactionClicked && (
            <div className="body-h">
              <h1>What's up4</h1>
            </div>
          )}
          {settingsClicked && (
            <div className="body-h">
              <h1>What's up5</h1>
            </div>
          )}
        </div>
      </header>
      <div className="info"></div>
      <div className="serve"></div>
      <div className="menu"></div>
      <div className="say"></div>
      <div className="started"></div>
      <footer></footer>
    </div>
  );
}
