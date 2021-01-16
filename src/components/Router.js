import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const TwitRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation displayName={userObj.displayName} />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser} />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>
                    )
                }
            </Switch>
        </Router>
    )
}

export default TwitRouter;