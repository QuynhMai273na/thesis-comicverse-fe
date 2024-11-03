import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/User`;

const comicService = {
  getAllUsers: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  }
};

export default comicService;
