import express from "express"
import schoolData from "./data/schoolData.js"


const router = express.Router()

router.get("/", (req, res) => {
    console.log("in get class")
    res.send(schoolData["class"])
})

router.post("/", (req, res) => {
    console.log("in post class")
    // add class
    if (req.body["name"] !== undefined){
        schoolData["class"].push(req.body)
        console.log(schoolData["class"])
        res.send("added class")
    }else {
        res.send("Missing information")
    }

})

router.put("/:id", (req, res) => {
    const id = req.params.id
    console.log(id, req.body)
    schoolData["class"][id].name = req.body.name
    schoolData["class"][id].students = req.body.students
    res.send(schoolData["class"][id])
})


router.delete("/:id", (req, res) => {
    console.log("in delete")
    const id = req.params.id
    console.log(req.params.id)
    schoolData["class"].splice(id, 1)
    console.log(schoolData["class"])
    res.send(schoolData["class"])
})


export default router