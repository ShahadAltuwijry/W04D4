// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Favorite from "./components/Favorite";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Favorite" component={Favorite} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/CardDetails/:id" component={CardDetails} />
        <Route
          path="*"
          render={() => {
            return <h1>page not found 404</h1>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
