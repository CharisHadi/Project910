import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import LearnContainer from "./components/LearnContainer/LearnContainer";
import Game from "./components/Game";
import Map from "./components/Map/Map";
import "./App.css";

const MapWrapped = withScriptjs(withGoogleMap(Map));

class App extends Component {
  
    state = {
      loggedIn: true,
      userID: "00000000000",
      name: "test_user"
    }

  setLogIn = (res) => {
    this.setState({
      loggedIn: true,
      userID: res.id,
      name: res.name,
    });
    console.log(this.state);
  };

  setLogOut = () => {
    this.setState({
      loggedIn: false,
      userID: null,
      name: null
    });
    console.log(this.state);
  };

  render() {
    console.log("Addp.js: " + this.setLogIn);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Nav 
          loggedIn={this.state.loggedIn} 
          setLogIn={this.setLogIn}
          setLogOut={this.setLogOut}
          userID = {this.state.userID}
        />
        <Logo />
        <Slide />
        <LearnContainer />
      <MapWrapped 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `90%`, width: `80%`, position: `absolute`, top: `205%`, right: `10%` }} />}
        containerElement={<div style={{ height: `90%`, width: `80%`, position: `absolute`, top: `205%`, right: `10%` }} />}
        mapElement={<div style={{ height: `90%` }} />}
      />
      <Game />
    </div>
  );
}
}
export default App;