import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-3927f.firebaseio.com/'
});

export default instance;