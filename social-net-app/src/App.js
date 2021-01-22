import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Switch, Route} from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import MusicPage from "./components/MusicPage/MusicPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import React from "react";
import MessagesPageContainer from "./components/MessagesPage/MessagesPageConainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

function App() {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Switch>
                    <Route path='/profile'><ProfilePageContainer />
                    </Route>
                    <Route path='/messages'><MessagesPageContainer />
                    </Route>
                    <Route path='/news'><NewsPage /></Route>
                    <Route path='/music'><MusicPage /></Route>
                    <Route path='/settings'><SettingsPage /></Route>
                </Switch>
                <Footer/>
            </div>
    );
}

export default App;
