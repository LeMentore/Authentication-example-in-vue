import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://auth-vue-de92c.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
