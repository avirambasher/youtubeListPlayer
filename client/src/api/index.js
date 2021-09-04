import axios from 'axios';

// const url = 'http://localhost:5000/playList';
const url = 'https://youtube-playlist-project.herokuapp.com/playList';

export const fetchPlayList = () => axios.get(url);
export const addUrl = (inputUrl) => axios.post(url, inputUrl, {timeout:3000});
export const deleteUrl = (id) => axios.delete(`${url}/${id}`);