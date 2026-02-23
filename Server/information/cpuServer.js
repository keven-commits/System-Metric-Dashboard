const { cpuUsage } = require('os-utils');
const si = require('systeminformation');

const cpuHistory = []

function CPUUtilisation() {
  setInterval(async () => {
    try {
      const load = await si.currentLoad();
      const cpuUsage = load.currentLoad.toFixed(2);
      const point = {ts: Date.now(), cpuUsage};

      cpuHistory.push(point);

      while (cpuHistory.length > 10) cpuHistory.shift();

      console.log("CPU Usage:", cpuUsage + "%");
    } catch (err) {
      console.error("Error:", err);
    }
  }, 5000);
}

function liveCPUUtilisation() {
  return cpuUsage
}

function getCPUHistory() {
  return cpuHistory
}

module.exports = {  liveCPUUtilisation, CPUUtilisation, getCPUHistory };

