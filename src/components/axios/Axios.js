import axios from 'axios';

axios.defaults.baseURL = 'http://api.scholarmedia.in:8080/api/v1';

const Axios = async(method, url, auth = false, data = null, role = false) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYl91c2VybmFtZSI6Im1hbGFyX3NjaG9vbCIsImlhdCI6MTY1ODM5MjM5OH0.n6Gr3omqwcaJPoeQu0txiupC13ETbPpgXuuqb-uys0I' : localStorage.getItem('token'),
                'role': role ? 'admin' : localStorage.getItem('role')
            },
            data: data
        });
        return response;
    } catch (error) {
        return error;
    } finally {
        console.log('finally');
    }
}

export default Axios;