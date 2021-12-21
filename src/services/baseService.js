import Axios from "axios";
import { CYBER_TOKEN, DOMAIN, TOKEN } from "../util/settings/config";

export class baseServices {
    //put json về phía backend
<<<<<<< HEAD
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //JWT
        }) 
=======
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN))
                , 'TokenCybersoft': CYBER_TOKEN
            } //JWT
        })
>>>>>>> 1678c189f9f5d4ce9fb1e34ebcaea4ab70dc0d6a
    }

    post = (url, model) => {
        return Axios({
<<<<<<< HEAD
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //JWT
        }) 
=======
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN))
                , 'TokenCybersoft': CYBER_TOKEN
            } //JWT
        })
>>>>>>> 1678c189f9f5d4ce9fb1e34ebcaea4ab70dc0d6a
    }


    get = (url) => {
        return Axios({
<<<<<<< HEAD
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
=======
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN))
                , 'TokenCybersoft': CYBER_TOKEN
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
>>>>>>> 1678c189f9f5d4ce9fb1e34ebcaea4ab70dc0d6a
        })
    }

    delete = (url) => {
        return Axios({
<<<<<<< HEAD
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
=======
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN))
                , 'TokenCybersoft': CYBER_TOKEN
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
>>>>>>> 1678c189f9f5d4ce9fb1e34ebcaea4ab70dc0d6a
        })
    }
}