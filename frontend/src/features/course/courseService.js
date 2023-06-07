import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/course";

const addCourse = async (data) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.post(API_URL, data);
  return response.data;
};

const courseService = { addCourse };
export default courseService;
