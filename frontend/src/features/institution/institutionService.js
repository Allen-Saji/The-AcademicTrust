import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/institution";

const getInstitutions = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.get(API_URL);
  return response.data;
};

const addInstitution = async (data) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.post(API_URL, data);
  return response.data;
};

const institutionService = { addInstitution, getInstitutions };

export default institutionService;
