import axios from "axios";

export async function putStudentData(idx, sendData) {
  try {
    const response = await axios.put(`http://localhost:3001/students/${idx}`, sendData);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
