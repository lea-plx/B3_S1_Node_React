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


// to edit
// router.put("/:id", (req, res) => {
//     const id = req.params.id
//     console.log(id, req.body)
//     schoolData["class"][id].name = req.body.name
//     schoolData["class"][id].students = req.body.students
//     res.send(schoolData["class"][id])
// })


router.delete("/:id", (req, res) => {
    console.log("in delete")
    const id = req.params.id
    schoolData["students"].splice(id, 1)
    console.log(schoolData["students"])
    res.send(schoolData["students"])
})


export default router