import { React } from 'react';
import Auth from '../utils/auth';
import FoodCarousel from '../components/Carousel'
import { Link } from 'react-router-dom';


function LandingPage() {

    const loggedIn = Auth.loggedIn();


    return (

        <div className="LandingPage">

            {
                loggedIn ? (
                    <FoodCarousel />) :
                    <div>
                        <FoodCarousel />
                        <Link className="LandingButton" to="/login-page">Login/SignUp</Link>

                    </div>}

        </div >
    );
}


export default LandingPage;
