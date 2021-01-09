import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddCase from "./components/AddCase";
import Case from "./components/Case";
import CaseList from "./components/CaseList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/cases" className="navbar-brand">
          Covid Case Tracker
        </a>                                                                
        <div className="navbar-nav mr-auto">
          <li className="nav-item">                                                               
            <Link to={"/cases"} className="nav-link">
              Cases
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/cases"]} component={CaseList} />                                                                                                                                                                                                                                                                               } />AddTutorial.js
          <Route exact path="/new" component={AddCase} />
          <Route path="/case/:_id" component={Case} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
