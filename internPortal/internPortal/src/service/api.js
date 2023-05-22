import axios from 'axios';

const users  = 'http://localhost:3000/users';
const projeler = 'http://localhost:3000/projeler';

export const fetchUsers = () => axios.get(users);
export const getProjects = () => axios.get(projeler);
export const getMd = (id) => axios.get(`${projeler}/${id}`);

