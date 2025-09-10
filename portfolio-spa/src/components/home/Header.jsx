import React from "react";

export default function Header() {
    return (

        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-body-tertiary p-3 fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><b>Otávio Monteiro</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}