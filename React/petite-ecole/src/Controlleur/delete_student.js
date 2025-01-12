import axios from "axios"

export async function deleteStudent(idx) {
    try{
        const response = await axios.delete(`http://localhost:3001/students/${idx}`)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}
