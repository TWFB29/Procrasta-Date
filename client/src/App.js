import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import {Layout} from 'antd';
import LoginPage from './pages/LoginPage';
import RecipePage from './pages/RecipePage';
import Auth from './utils/auth';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';


const httpLink = createHttpLink({uri: '/graphql'});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({link: authLink.concat(httpLink), cache: new InMemoryCache()});

function App() {

    const loggedIn = Auth.loggedIn();


    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Router>

                    <Layout>

                        <Layout>
                            <Header></Header>
                            

                                <Switch>
                                    <Route exact path = "/" component={LandingPage}/>
                                    <Route exact path="/login-page"
                                        component={LoginPage}/>
                                </Switch>
                            
                            
                            {
                            loggedIn ? (
                             <RecipePage/> ) : null
                        } <div></div>
                            
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>

                </Router>
            </ApolloProvider>


        </div>
    );
}

export default App;
