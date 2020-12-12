import axios from "axios";
import {ProfileInfoType} from "../components/profile/ProfileInfo/ProfileInfo";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e4ab732c-d4b7-4090-ae44-56e101c6d884",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

type MeResponseType = {
    data:{
        login:string
        email:string
        id:number
    }
    resultCode:number
    messages: Array<string>
}
type LoginResponseType = {
    data:{
        userId:number
    }
    resultCode:number
    messages: Array<string>
}


export const getUsers = (count = 7, currentPage:number, term:string | null = " ", friend:boolean | null = null) => {
    return instance.get(`users?count=${count}&page=${currentPage}&term=${term}&?friend=${friend}`,).then(response => {
        return response.data
    })
}

export const followAPI = (id:number) =>{
    return instance.delete(`follow/${id}`).then(response => {return response.data})
}

export const unfollowAPI = (id:number) =>{
    return instance.post(`follow/${id}`).then(response => {return response.data})
}

export const getLogin = () =>{
    return instance.get<MeResponseType>(`auth/me`).then(response => {return response.data})
}

export const getLoginInfo = (id:number) =>{
    return instance.get(`profile/`+id)
}

export const getProfileInfo = (userId:number) =>{
    return instance.get(`profile/`+userId)
}

export const getStatusAPI = (userId:number) =>{
    return instance.get('profile/status/'+userId)
}


export const updateStatusAPI = (status:string) =>{
    return instance.put('profile/status/', {status})
}

export const loginAPI = (email:string, password:string, rememberMe = false, captcha = false) =>{
    return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
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

export const startDialogAPI = (userId:number) =>{
    return instance.put(`dialogs/` + userId)
}

export const getMessagesAPI = (userId:number, page = 1, count =20) =>{
    return instance.get(`dialogs/${userId}/messages/?page=${page}&count=${count}`)
}

export const sendMessageAPI = (userId:number, body:string) => {
    return instance.post(`dialogs/${userId}/messages`, {body})
}

export const deleteMessageAPI = (messageId:string) =>{
    return instance.delete(`dialogs/messages/${messageId}`)
}



/// PROFILE
export const savePhotoAPI = (image:File) =>{
    const formData = new FormData()
    formData.append("image", image)
    return instance.put(`profile/photo`, formData, {
        headers:{
            'Content-type': 'multipart/form-data'
        }
    })
}

export const saveProfileAPI = (profile:ProfileInfoType) =>{
    return instance.put("profile/", profile)
}