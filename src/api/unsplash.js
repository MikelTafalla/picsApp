import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Y9JOJgdBxuNIAq6pSLMkIMHpxH_qQd-NbIRX3yAPGrg',
    }
});