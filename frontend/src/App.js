import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//importing the components
import TrainList from "./components/TrainList";
import PaymentMethod from "./components/PaymentMethod";
import SampathBankPG from "./components/SampathBankPG";
import DialogPG from "./components/DialogPG";
import GovEmpNIC from "./components/ConfirmGovEmpNIC";
import GovEmporNot from "./components/GovEmporNot";
import NotGovEmp from "./components/NotGovEmp";
import ThankYouMessage from "./components/ThankYouMessage";
import HomeSlider from "./components/HomeSlider";
import TicketBooking from "./components/TicketBooking";
import EmailandPhone from "./components/EnterEmailandPhone";

//importing the images
import navImage from "./resources/navnew3.jpg";
import trainicon from "./resources/trainicon.png";

function App() {
  return (
    <Router>
      <div className="navImage">
        <a href="">
          <img src={navImage} />
        </a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/trainlist"
                className="nav-link"
                style={{ color: "white" }}
              >
                Train Availability
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/booking"
                className="nav-link"
                style={{ color: "white" }}
              >
                Book Train Tickets
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Switching between components */}
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/trainlist" exact component={TrainList} />
        <Route path="/booking" exact component={TicketBooking} />
        <Route path="/govempornot" component={GovEmporNot} />
        <Route path="/govempdis" exact component={GovEmpNIC} />
        <Route path="/notgovemp" exact component={NotGovEmp} />
        <Route path="/paymentmethod" exact component={PaymentMethod} />
        <Route path="/sampathbankpg" exact component={SampathBankPG} />
        <Route path="/dialogpg" exact component={DialogPG} />
        <Route path="/enteremailandphone" exact component={EmailandPhone} />
        <Route path="/thankyoumessage" exact component={ThankYouMessage} />
      </Switch>
      <div
        className="footer"
        style={{ backgroundColor: "#313438", width: 1365, height: 60 }}
      >
        <center>
          {" "}
          <div>
            <img src={trainicon} width="40" />{" "}
          </div>{" "}
          <div style={{ color: "white" }}>All Rights Reserved. Fasrin</div>
        </center>
      </div>
    </Router>
  );
}

export default App;
