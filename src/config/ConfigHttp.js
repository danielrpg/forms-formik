import axios from 'axios'
import { API_URL } from '../constants/ApiConstants'

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type":"application/json"
    }
})