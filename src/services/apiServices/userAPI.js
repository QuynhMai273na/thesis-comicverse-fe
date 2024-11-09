import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/User`;

const comicService = {
  getAllUsers: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  },
};

export default comicService;
