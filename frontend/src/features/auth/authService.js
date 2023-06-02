import axios from "axios";

const API_URL = "http://localhost:5000/api/student/";
const API_URL2 = "http://localhost:5000/api/admin/";
const API_URL3 = "http://localhost:5000/api/organization/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login student
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login admin
const loginAdmin = async (userData) => {
  const response = await axios.post(API_URL2 + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login organization
const loginOrg = async (userData) => {
  const response = await axios.post(API_URL3 + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  loginAdmin,
  loginOrg,
  logout,
};

export default authService;
