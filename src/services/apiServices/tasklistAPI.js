import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/Assign`;

const taskService = {
  GetListTask: async () => {
    try {
      console.log();
      const url = `${baseURL}/list-task`;
      console.log(url);

      const config = {
        headers: {
          //   Authorization: `bearer ${acc.token}`
        },
        timeout: 1000, // You can adjust the timeout based on your needs
      };

      const response = await axios.get(url, config); // No data needed in GET requests
      const responseData = response.data;
      console.log(response);
      return responseData;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.log(err.response.data);
      } else {
        console.log("An error occurred:", err.message);
      }
    }
  },

  deleteTask: async (assignID) => {
    try {
      const url = `${baseURL}/${assignID}`;
      console.log(url);
      const config = {
        headers: {
          //   Authorization: `bearer ${acc.token}`
        },
        timeout: 1000, // You can adjust the timeout based on your needs
      };
      const response = await axios.delete(url, assignID);
      const responseData = response.data;
      console.log(response);
      return responseData;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.log(err.response.data);
      } else {
        console.log("An error occurred:", err.message);
      }
    }
  },
};

export default taskService;
