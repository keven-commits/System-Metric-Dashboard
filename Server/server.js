const express = require("express")
const app = express()
const port = 3000
const cors = require("cors");
const si = require("systeminformation")
const { CPUUtilisation, getCPUHistory } = require("./information/cpuServer")
const { GPUUtilisation, getGPUHistory } = require("./information/gpuServer");
const { NetworkUtilisation, getNetworkHistory } = require("./information/networkServer");

app.use(cors());

///CPUUtilisation();
///GPUUtilisation();
///NetworkUtilisation();

app.get('/cpu', async (req, res) => {
    res.json("yoyoyo");
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