let initialState = {
    friendsData : [
        {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
        {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},
    ]
}

const navbarReducer = (state = initialState, action) => {
    return {...state}
}

export default navbarReducer