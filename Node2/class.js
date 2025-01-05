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

router.put("/", (req, res) => {
    console.log("in put class")
})


router.delete("/:ID", (req, res) => {
    const className = schoolData["class"]
    console.log("in delete")
    console.log(className)
})


export default router