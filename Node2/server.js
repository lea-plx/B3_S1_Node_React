import express from "express"
import students from "./students.js"
import classes from "./class.js"
import cors from "cors"

const app = express()
let port = 3001

app.use(express.json())
app.use(cors())

// ----------------------------------------

app.use("/students", students)
app.use("/class", classes)

// ----------------------------------------

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})