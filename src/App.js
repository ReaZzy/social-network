import React from "react";
import "./App.css";
import {HashRouter, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {get_initialize} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


const UsersContainer = React.lazy(()=>import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(()=>import("./components/profile/ProfileContainer"))
const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer"))
const Todo = React.lazy(()=>import("./components/Todo/Todo"))


class App extends React.Component{
  render() {

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div>
            <HeaderContainer />
            <div className="app-wrapper">
              <NavbarContainer/>
              {/*Main*/}
              <Switch>
              <React.Suspense fallback={<Preloader/>}>
                <Route path="/profile/:userId?" render={ () => <ProfileContainer store = {this.props.store}/> } />
                <Route path="/messages/:userId?" render={ () => <DialogsContainer/> } />
                <Route path="/users" render={ () => <UsersContainer/> } />
                <Route path="/todo" render = {()=><Todo/>}/>

                {/*Other*/}

                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={() => <Login/>}/>
              </React.Suspense>
              </Switch>
            </div>
          </div>
        </HashRouter>
    );
  }
};

// let mapStateToProps = (state) => ({
//   initialized : state.app.initialized
// })

export default compose(
    connect(null, {get_initialize}),

)(App)
