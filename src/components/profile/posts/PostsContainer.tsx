import {addPost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state:any) =>{
    return {
        data: state.profilePage.postData,
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost,
    },)(Posts)

export default PostsContainer;
