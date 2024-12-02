import express from "express"
import schoolData from "./data/schoolData.js"


const router = express.Router()

router.get("/", (req, res) => {
    console.log("in get students")
    res.send(schoolData["students"])
})

router.post("/", (req, res) => {
    console.log("in post students")
    // add students
    if (req.body["firstName"] !== undefined && req.body["lastName"] !== undefined && req.body["age"] !== undefined && req.body["mail"] !== undefined){
        schoolData["students"].push(req.body)
        console.log(schoolData["students"])
        res.send("added student")
    }else {
        res.send("Missing information")
    }
})


export default router