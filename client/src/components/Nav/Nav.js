import React from "react";
import "./styles.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <a className="navbar-brand" href="#"> <b>910 a global emergency</b> </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a id="home" className="nav-item nav-link active" href="#">home <span
                            className="sr-only">(current)</span></a>
                    <a id="learn" className="nav-item nav-link" href="#">learn more</a>
                    <a id="test" className="nav-item nav-link" href="#">knowledge check</a>
                    <a id="events" className="nav-item nav-link" href="#">events</a>
                    <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
                </div>
            </div>
        
        </nav>
    )
}

export default Nav;