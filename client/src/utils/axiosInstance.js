import axios from "axios";
import { store } from "../features/store";
import { logout, setCredentials } from "../features/auth/userSlicer";


const baseUrl='http://127.0.0.1:8001/api/'

const api=axios.create({
    baseUrl,
    timeout:1000
})


api.interceptors.request.use(
    (config)=>{
        const state=store.getState()
        const token=state.user.access
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>Promise.reject(error)
)

api.interceptors.response.use(
    (response)=>(response),
    async (error)=>{
        const originalRequest=error.config
        if(error.response.status===401 && !originalRequest._retry){
            originalRequest._retry=true
            try{
                const state=store.getState()
                const refreshToken=state.user.refresh
                const user=state.user.user
                const res=await axios.post('token/refresh/',{
                    refresh:refreshToken
                })
                const { access } =res.data
                store.dispatch(setCredentials({ user,access,refresh:refreshToken }))
                originalRequest.headers.Authorization=`Bearer ${access}`
                return api(originalRequest)
            }
            catch(err){
                dispatch(logout())
                return Promise.reject(err)
            }
            
        }
        return Promise.reject(error)
    }
)

export default api