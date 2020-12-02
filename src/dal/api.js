import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e4ab732c-d4b7-4090-ae44-56e101c6d884",
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

export const loginAPI = (email, password, rememberMe = false, captcha = false) =>{
    return instance.post('auth/login', {email, password, rememberMe, captcha})
}

export const getCapthaAPI = () =>{
    return instance.get("/security/get-captcha-url")
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

export const getMessagesAPI = (userId, page = 1, count =20) =>{
    return instance.get(`dialogs/${userId}/messages/?page=${page}&count=${count}`)
}

export const sendMessageAPI = (userId, body) => {
    return instance.post(`dialogs/${userId}/messages`, {body})
}

export const deleteMessageAPI = (messageId) =>{
    return instance.delete(`dialogs/messages/${messageId}`)
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

export const saveProfileAPI = (profile) =>{
    return instance.put("profile/", profile)
}