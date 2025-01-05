import axios from "axios";

export async function putClass(idx, className, classStudent) {
  try {
    // idx = position de l'élément -> Pour savoir lequel edit
    // className = le nom / le nouveau nom de la class (si vide pas edit name)
    // studentName = list des nom d'étudiants
    console.log(className, classStudent);
    const response = await axios.put(`http://localhost:3000/class/${idx}`, {
      name: className,
      students: classStudent,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
