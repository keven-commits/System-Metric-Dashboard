const express = require("express");
const osu = require("os-utils");
const cors = require("cors");

const app = express();
app.use(cors());

let cpuUsage = 0;

// update CPU every 10 seconds
setInterval(() => {
  osu.cpuUsage((v) => {
    cpuUsage = (v * 100).toFixed(2);
    console.log("CPU:", cpuUsage + "%");
  });
}, 10000);

