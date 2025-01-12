import axios from "axios"

export async function postStudentData(postStudent) {
    try{
        const response = await axios.post("http://localhost:3001/students", postStudent)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}