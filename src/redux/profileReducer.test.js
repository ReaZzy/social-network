import profileReducer, {deletePost} from "./profileReducer";

let initialState = {
    postData : [
        {
            id: "5",
            author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
            author: "Stevie Folls",
            text: "ddd DAS",
            date: "1 month ago",
            like_count: "6"
        },
        {
            id: "5",
            author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
            author: "Stevie Folls",
            text: "HAHA NUBB",
            date: "1 month ago",
            like_count: "5"
        },
        {
            id: "4",
            author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
            author: "Stevie Folls",
            text: "Stupid monkey...",
            date: "1 month ago",
            like_count: "11"
        },
        {
            id: "3",
            author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
            author: "Stevie Folls",
            text: "BLABLBLALBL",
            date: "1 month ago",
            like_count: "11"
        },
        {
            id: "2",
            author_image: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
            author: "Stas Jordan",
            text: ":)",
            date: "1 day ago",
            like_count: "32"
        },
        {
            id: "1",
            author_image: "https://semantic-ui.com/images/avatar/small/matt.jpg",
            author: "Vanja Hodynchuk",
            text: "Very cool bro",
            date: "now",
            like_count: "1"
        },
    ],
}

it(`try to delete post`, () =>{
    let action = deletePost(2)
    let newState = profileReducer(initialState, action)

    expect(newState.postData.length).toBe(5)
})