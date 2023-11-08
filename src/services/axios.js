import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_MMS_API_DEV,
  withCredentials: false,
});
