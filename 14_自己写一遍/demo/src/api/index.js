import axios from "axios"
import path from "./path"
import qs from "qs"
const api = {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    },
    getLogin() {
        return axios.post(path.baseUrl+ path.login,qs.stringify({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        }))
    }
}

export default api