import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "573ba22f-dccc-4be4-a973-aa4ac08f5016",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const getUsers = (count, currentPage) => {
    return instance.get(`users?count=${count}&page=${currentPage}`,).then(response => {
        return response.data
    })
}

export const follow = (id) =>{
    return instance.delete(`follow/${id}`).then(response => {return response.data})
}

export const unfollow = (id) =>{
    return instance.post(`follow/${id}`).then(response => {return response.data})
}

export const getLogin = () =>{
    return instance.get(`auth/me`).then(response => {return response.data})
}

export const getLoginInfo = (id) =>{
    return instance.get(`profile/`+id)
        .then( response => {return response.data})
}

