import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import page404 from './pages/404';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/blog" }` }
                    component={ Blog }
                />
                <Route exact component={ page404 }/>
            </Switch>
        </Router>
    );
}

export default App;
