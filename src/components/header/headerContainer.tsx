import React from "react";
import {connect} from "react-redux";
import {exit, setUser} from "../../redux/authReducer";
import Header from "./Header";
import {getProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
    id:null| number
    info:any
    img: string
}
type MapDispatchToPropsType = {
    setUser: (userId:number|any) => void
    getProfile: (userId:number) => void
    exit: () => void

}

type HeaderContainerType = MapStateToPropsType&MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        this.props.setUser(this.props.id)
    }


    render() {
        return <Header {...this.props} isAuth = {this.props.isAuth} login ={this.props.login} exit = {this.props.exit}
                       id = {this.props.id}  profileInfo ={this.props.info} getProfile = {this.props.getProfile}/>
    }
}

const mapStateToProps = (state:AppStateType) =>{return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    info: state.auth.info,
}}


export default connect(mapStateToProps, {setUser, getProfile, exit})(HeaderContainer)