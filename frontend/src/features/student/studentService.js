import axios from "axios";
const API_URL = "http://localhost:5000/api/student/homepage";

const getStudentDetails = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(API_URL, config);
    if (response.status === 200) {
      const student = response.data;
      return student;
    } else {
      throw new Error(`Error fetching student details: ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
};

const studentService = { getStudentDetails };

export default studentService;
