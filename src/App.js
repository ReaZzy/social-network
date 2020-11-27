import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {get_initialize} from "./redux/appReducer";
import Todo from "./components/Todo/Todo";


class App extends React.Component{
  render() {

    return (
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <div className="app-wrapper">
              <NavbarContainer/>
              {/*Main*/}
              <Route path="/profile/:userId?" render={ () => <ProfileContainer store = {this.props.store}/> } />
              <Route path="/messages/:userId?" render={ () => <DialogsContainer/> } />
              <Route path="/users" render={ () => <UsersContainer/> } />
              <Route path="/login" render={() => <Login/>}/>
              <Route path="/todo" render = {()=><Todo/>}/>


              {/*Other*/}
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
};

// let mapStateToProps = (state) => ({
//   initialized : state.app.initialized
// })

export default compose(
    connect(null, {get_initialize}),

)(App)
