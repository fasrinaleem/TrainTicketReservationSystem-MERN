import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TrainList from "./components/TrainList";
import TicketBook from "./components/TicketBooking";
import PaymentMethod from "./components/PaymentMethod";
import SampathBankPG from "./components/SampathBankPG";
import DialogPG from "./components/DialogPG";
import GovEmployeeDis from "./components/GovermentEmployeeDiscount";

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
              <a href="#" />
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Train Availability
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/book" className="nav-link" style={{ color: "white" }}>
                Book Train Tickets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={TrainList} />
        <Route path="/book" exact component={TicketBook} />
        <Route path="/book/step2" exact component={PaymentMethod} />
        <Route path="/book/step3" exact component={GovEmployeeDis} />
        <Route path="/book/step4" exact component={SampathBankPG} />
        <Route path="/book/step5" exact component={DialogPG} />
      </Switch>
    </Router>
  );
}

export default App;
