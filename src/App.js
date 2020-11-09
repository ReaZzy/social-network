import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className="app-wrapper">
          <NavbarContainer/>
          {/*Main*/}
          <Route path="/profile/:userId?" render={ () => <ProfileContainer store = {props.store}/> } />
          <Route path="/messages" render={ () => <DialogsContainer/> } />
          <Route path="/users" render={ () => <UsersContainer/> } />


          {/*Other*/}
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
