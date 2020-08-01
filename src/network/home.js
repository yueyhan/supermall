import {request} from './request.js'

export function gethomedataone(){
    return request({
        url:'/home/multidata'
    })
}