import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TrainList from "./components/TrainList";
import TicketBook from "./components/TicketBooking";
import PaymentMethod from "./components/PaymentMethod";
import SampathBankPG from "./components/SampathBankPG";
import DialogPG from "./components/DialogPG";
import GovEmployeeDis from "./components/GovermentEmployeeDiscount";
import GovEmporNot from "./components/GovEmporNot";
import ThankYouMessage from "./components/ThankYouMessage";
import HomeSlider from "./components/HomeSlider";
import TicketBooking from "./components/TicketBooking";

import navImage from "./resources/navnew3.jpg";

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
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/trainlist" exact component={TrainList} />
        {/* <Route path="/book" exact component={TicketBook} /> */}
        <Route path="/booking" exact component={TicketBooking} />
        {/* <Route path="/book/step22/:id" component={GovEmporNot} /> */}
        <Route path="/book/step22" component={GovEmporNot} />
        {/* <Route path="/book/update/:id" exact component={GovEmployeeDis} /> */}
        <Route path="/book/step222" exact component={GovEmployeeDis} />
        <Route path="/book/step3" exact component={PaymentMethod} />
        <Route path="/book/step4" exact component={SampathBankPG} />
        <Route path="/book/step5" exact component={DialogPG} />
        <Route path="/thankyoumessage" exact component={ThankYouMessage} />
      </Switch>
    </Router>
  );
}

export default App;
