const express = require("express")
const app = express()
const port = 3000
const cors = require("cors");
const si = require("systeminformation")
const { liveCPUUtilisation, CPUUtilisation, getCPUHistory } = require("./information/cpuServer")

app.use(cors());

CPUUtilisation();

app.get('/cpu', async (req, res) => {
    res.write(getCPUHistory);
});

app.get("/gpu", (req, res) => {
    res.send("Hello World!")
})

app.get("/network", (req, res) => {
    res.send("Hello World!")
})

app.get("/disk", (req, res) => {
    res.send("Hello World!")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})