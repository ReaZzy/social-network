import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "573ba22f-dccc-4be4-a973-aa4ac08f5016",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})


export const getUsers = (count = 7, currentPage) => {
    return instance.get(`users?count=${count}&page=${currentPage}`,).then(response => {
        return response.data
    })
}

export const followAPI = (id) =>{
    return instance.delete(`follow/${id}`).then(response => {return response.data})
}

export const unfollowAPI = (id) =>{
    return instance.post(`follow/${id}`).then(response => {return response.data})
}

export const getLogin = () =>{
    return instance.get(`auth/me`).then(response => {return response.data})
}

export const getLoginInfo = (id) =>{
    return instance.get(`profile/`+id)
}

export const getProfileInfo = (userId) =>{
    return instance.get(`profile/`+userId)
}

export const getStatusAPI = (userId) =>{
    return instance.get('profile/status/'+userId)
}


export const updateStatusAPI = (status) =>{
    return instance.put('profile/status/', {status})
}

export const loginAPI = (email, password, rememberMe = false) =>{
    return instance.post('auth/login', {email, password, rememberMe})
}
export const exitAPI = () =>{
    return instance.delete('auth/login')
}


//// DIALOGS

export const getDialogsAPI = () =>{
    return instance.get('dialogs/')
}

export const startDialogAPI = (userId) =>{
    return instance.put(`dialogs/` + userId)
}

export const getMessagesAPI = (userId, page = 1, count =15) =>{
    return instance.get(`dialogs/${userId}/messages/?page=${page}&count=${count}`)
}

export const sendMessageAPI = (userId, body) => {
    return instance.post(`dialogs/${userId}/messages`, {body})
}


/// PROFILE
export const savePhotoAPI = (image) =>{
    const formData = new FormData()
    formData.append("image", image)
    return instance.put(`profile/photo`, formData, {
        headers:{
            'Content-type': 'multipart/form-data'
        }
    })
}