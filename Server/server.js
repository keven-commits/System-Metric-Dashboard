const express = require("express")
const app = express()
const port = 3000
const osu = require("os-utils");
const cors = require("cors");
const si = require("systeminformation")

app.use(cors());

let cpuUsage = 0;

// update CPU every 10 seconds
setInterval(() => {
    osu.cpuUsage((v) => {
        cpuUsage = (v * 100).toFixed(2);
        console.log("CPU:", cpuUsage + "%");
    });
}, 10000);

// endpoint
app.get("/cpu", (req, res) => {
    res.json({
        usage: cpuUsage,
        time: Date.now()
    });
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