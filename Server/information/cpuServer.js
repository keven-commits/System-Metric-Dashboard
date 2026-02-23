const si = require('systeminformation');

const cpuHistory = []
const cpuTableau = []

function CPUUtilisation() {
  setInterval(async () => {
    try {
      const ouvert = await si.currentLoad();
      const cpuUtilisation = ouvert.currentLoad.toFixed(0);
      const temps = { ts: Date.now(), cpuUtilisation };

      cpuHistory.push(temps);
      cpuTableau.push(temps);

      while (cpuTableau.length > 10) cpuTableau.shift();

      console.log(cpuTableau)
    } catch (err) {
      console.error("Error:", err);
    }
  }, 1000);
}

function getCPUHistory() {
  return cpuHistory;
}
module.exports = { CPUUtilisation, getCPUHistory };

