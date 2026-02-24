const express = require("express")
const app = express()
const port = 3000
const cors = require("cors");
const si = require("systeminformation")
const { CPUUtilisation } = require("./information/cpuServer")
const { GPUUtilisation } = require("./information/gpuServer");
const { NetworkUtilisation } = require("./information/networkServer");
const { DiskUtilisation } = require("./information/diskServer");

app.use(cors());

app.get('/cpu', async (req, res) => {
    try {
        const dataCPU = await CPUUtilisation();
        res.json(dataCPU);
    } catch (err) {
    }
});

app.get("/gpu", async (req, res) => {
    try {
        const dataGPU = await GPUUtilisation();
        res.json(dataGPU);
    } catch (err) {
    }
});

app.get("/network", async (req, res) => {
    try {
        const dataNetwork = await NetworkUtilisation();
        res.json(dataNetwork);
    } catch (err) {
    }
});

app.get("/disk", async (req, res) => {
    try {
        const dataDisk = await DiskUtilisation();
        res.json(dataDisk);
    } catch (err) {
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})