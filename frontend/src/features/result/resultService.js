import axios from "axios";

const API_URL = "http://localhost:5000/api/student/result";

const getMarksandGrades = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, data, config);
  console.log(response.data);
  return response.data;
};

const resultService = { getMarksandGrades };

export default resultService;
