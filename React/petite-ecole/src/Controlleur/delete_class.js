import axios from "axios"

export async function deleteClass(className) {
    try{
        const response = await axios.delete(`http://localhost:3000/class/`)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}
