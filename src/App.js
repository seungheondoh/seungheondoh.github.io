import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route
                exact
                path= "/"
                component={ Home }
            />
            <Route
                path= "/blog"
                component={ Blog }
            />
            <Redirect to="/" />
        </Router>
    );
}

export default App;
