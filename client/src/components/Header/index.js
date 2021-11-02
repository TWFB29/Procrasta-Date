import React from "react";
import Fork from '../../assets/ForkedUp.png'
import Auth from '../../utils/auth';


function Header() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const loggedIn = Auth.loggedIn();

    return (

        <div>
            {
                loggedIn ? (
                    <div>
                        <header >
                            <a href="/" className="header-title">Procrast-A-Date!</a>
                        </header >

                        <div className="sub-header">
                            <img className="forked-up" src={Fork}></img>
                            <div className="logout-div">
                            <a className="LogoutButton" onClick={logout}>
                                Logout
                            </a>
                                </div>
                        </div>
                        <p className="intro"> Well well well, look who's here. It's okay, we've all been there. One click and we'll have a perfect date meal and playlist at your fingertips! </p>
                    </div>
                ) :
                    <div>
                        <header >
                            <a href="/" className="header-title">Procrast-A-Date!</a>
                        </header>

                        <img className="forked-up" src={Fork}></img>

                        <p className="intro"> We got you! Sign in and follow the steps to get things cookin!</p>
                    </div>
            }
        </div >
    )

}


export default Header;