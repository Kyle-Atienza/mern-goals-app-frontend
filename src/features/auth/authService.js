import axios from "axios";

const API_ROUTE = process.env.REACT_APP_API_URL + "api/users/";

//register user
const register = async (userData) => {
  const response = await axios.post(API_ROUTE, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(`${API_ROUTE}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
