import axios from 'axios'
import { Disco } from './Disco'

const API='http://localhost:5000'

export const getDiscos=async()=>{
    return await axios.get(`${API}/discos`)
   // console.log(res)
  
}

export const createDiscos=async(user:Disco)=>{
    return await axios.post(`${API}/discos`,user)
   // console.log(res)
  
}
