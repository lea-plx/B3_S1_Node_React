import axios from "axios"

export async function putClass(className, studentName) {
    try{
        const response = await axios.put("http://localhost:3000/class", className, studentName)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}
