import axios from 'axios'

const Api = axios.create({baseURL: 'http://localhost:3000'}) //url da API

export default Api

