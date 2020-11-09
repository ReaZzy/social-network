import {addPost, discard, onPostChange} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        data: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost,
    discard,
    onPostChange,
    },)(Posts)

export default PostsContainer;
