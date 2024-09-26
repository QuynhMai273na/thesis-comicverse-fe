// src/services/comicService.js
import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/Comic`;

const comicService = {
  getAllComics: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },
  addComic: async (comic) => {
    const response = await axios.post(baseURL, comic);
    return response.data;
  },
  deleteComic: async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  },
  updateComic: async (id, comic) => {
    const response = await axios.put(`${baseURL}/${id}`, comic);
    return response.data;
  },
};

export default comicService;
