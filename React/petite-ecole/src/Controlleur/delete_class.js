import axios from "axios"

export async function deleteClass(idx) {
    try{
        const response = await axios.delete(`http://localhost:3000/class/${idx}`)
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}
