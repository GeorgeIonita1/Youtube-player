import axios from 'axios';

const KEY = 'AIzaSyCmiwpGcg3NvxfLfyuEFbsDgaZ4jZQh8YI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCmiwpGcg3NvxfLfyuEFbsDgaZ4jZQh8YI'
    }
});