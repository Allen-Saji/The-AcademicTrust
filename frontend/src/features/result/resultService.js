import axios from "axios";

const API_URL = "http://localhost:5000/api/student/result";

const getMarksandGrades = async (data) => {
  const response = await axios.get(API_URL, data);

  return response.data;
};

const resultService = { getMarksandGrades };

export default resultService;
