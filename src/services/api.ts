import axios from "axios";

const api = axios.create({
  baseURL: "https://api-d1-test.herokuapp.com/api",
});

export const apiFilter = async () => {
  const response = await axios.get(
    "https://api-d1-test.herokuapp.com/api/filter"
  );
  return response.data;
};

export default api;
