import React, { Component } from "react";
import "./styles.css";
import LoginControl from "../loginControl/loginControl";

class Nav extends Component {

    render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <a className="navbar-brand" href="#"> <b>910 a global emergency</b> </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a id="home" className="nav-item nav-link active" href="#top">home</a>
                    <a id="learn" className="nav-item nav-link" href="#learn-container">learn more</a>
                    <a id="test" className="nav-item nav-link" href="#game-container">knowledge check</a>
                    <a id="events" className="nav-item nav-link" href="#map-container">events</a>
                    <LoginControl 
                        loggedIn = {this.props.loggedIn} 
                        setLogin = {this.props.setLogIn}
                    />
                </div>
            </div>
        
        </nav>
    )
    }
}

export default Nav;