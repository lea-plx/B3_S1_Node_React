import axios from "axios"

export async function getClassData() {
    try{
        const response = await axios.get("http://localhost:3001/class")
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}

