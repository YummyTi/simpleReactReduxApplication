import React from 'react';
import {Route, Switch} from "react-router-dom";

//pages
import SongPage from "./components/Songs/SongPage";
import UsersPage from "./components/Users/UsersPage";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={SongPage}/>
                <Route exact path='/user' component={UsersPage}/>
            </Switch>
        </>
    );
};

export default App;
