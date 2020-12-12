import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state:AppStateType) =>{
    return{
        friendsData: state.navBar.friendsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer