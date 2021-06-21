import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route component={Home} path='/' exact />
                    <Route component={SinglePost} path='/post/:slug' />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
