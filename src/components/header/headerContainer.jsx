import React from "react";
import {connect} from "react-redux";
import {setUserData, setUserInfo} from "../../redux/authReducer";
import Header from "./Header";
import {getLogin, getLoginInfo} from "../../dal/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        getLogin().then(data =>{
            if (data.resultCode === 0){
                let {id, email, login} = data.data
                this.props.setUserData(id, email, login)

                getLoginInfo(this.props.id).then(data =>{
                    this.props.setUserInfo(data)
                })
            }
        })
    }

    render() {
        return <Header {...this.props} isAuth = {this.props.isAuth} login ={this.props.login}
                       id = {this.props.id} img ={this.props.img} profileInfo ={this.props.info}/>
    }
}

const mapStateToProps = (state) =>{return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    info: state.auth.info,
}}


export default connect(mapStateToProps, {setUserData, setUserInfo})(HeaderContainer)