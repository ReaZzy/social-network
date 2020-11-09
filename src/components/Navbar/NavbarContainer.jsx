import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        friendsData: state.navBar.friendsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer