import axios from "axios"

export async function postClassData(postData) {
    try{
        const response = await axios.post("http://localhost:3001/class", postData)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}