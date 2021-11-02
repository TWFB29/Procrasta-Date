import { React } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Auth from '../utils/auth';
function LoginPage() {



    return (

        <div className="LoginPage">

            <h2> Login to Get Started!</h2>
            <LoginForm />
            <h2> New Here? What took so Long? Sign Up Now!</h2>
            <SignUpForm />


        </div >
    );




}


export default LoginPage;
