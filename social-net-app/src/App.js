import React, {useEffect} from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Switch, Route, Redirect} from "react-router-dom";
import MessagesPageContainer from "./components/MessagesPage/MessagesPageConainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Loader from "./components/commonComponents/Loader/Loader";
import {connect} from "react-redux";
import {initializeTC} from "./store/appReducer";

const NewsPage = React.lazy(() => import('./components/NewsPage/NewsPage'));
const MusicPage = React.lazy(() => import('./components/MusicPage/MusicPage'));
const SettingsPage = React.lazy(() => import('./components/SettingsPage/SettingsPage'));

const App = (props) => {

    useEffect(() => {
        !props.init && props.initializeTC()
    },)

    return (
        props.init
            ? <div className="App">
                <Header/>
                <Navbar/>
                <Switch>
                    <Route path='/profile/:userId?'><ProfilePageContainer/></Route>
                    <Route path='/messages'><MessagesPageContainer/></Route>
                    <Route path='/users'><UsersPageContainer/></Route>
                    <Route path='/news'><React.Suspense fallback={<Loader/>}>
                        <NewsPage/>
                    </React.Suspense></Route>
                    <Route path='/music'><React.Suspense fallback={<Loader/>}>
                        <MusicPage/>
                    </React.Suspense></Route>
                    <Route path='/settings'><React.Suspense fallback={<Loader/>}>
                        <SettingsPage/>
                    </React.Suspense></Route>
                    <Route path='/login'><LoginContainer/></Route>
                    <Route path='/'><Redirect to={'/profile'} /></Route>
                </Switch>
                <Footer/>
            </div>
            : <div className='AppLoaderWrapper'><Loader/></div>
    );
}
const mapStateToProps = (state) => ({
    init: state.app.isInit
})

export default connect(mapStateToProps, {initializeTC})(App);
