import axios  from 'axios'

//导出封装好的请求模块
export function request(config){
  const instance = axios.create({
    //实例化axios对象，并且设置默认值
    baseURL : 'http://123.207.32.32:8000',
    timeout : 5000
  })
  //请求拦截器 暂时没有使用请求拦截器
  instance.interceptors.request.use(config=>{
      return config
  },err=>{
      console.log(err)
  })
  //响应拦截器 将响应数据包数据化
//   instance.interceptors.response.use(res=>{
//       return res.data
//   },err=>{
//       console.log(err)
//   })
 return instance(config)
}