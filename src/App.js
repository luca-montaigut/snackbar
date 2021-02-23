import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";

import Header from "./Components/Header";
import Container from "./Components/Container";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
