import axios from "axios";
import { message} from 'antd';
axios.defaults.baseURL="http://shihn.natapp1.cc/"
export default function myajax(url,data={},type="GET"){
    return new Promise((resolve,reject)=>{
        let promise;
        if(type.toUpperCase()==="GET"||type.toUpperCase()==="DELETE"){
            promise = axios.get(url,{params:data})
        }else if(type.toUpperCase()==="POST"||type.toUpperCase()==="PUT"){
            promise = axios.post(url,data);
        }
        promise.then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err);
            message.error("请求出错");
        })
    })
}