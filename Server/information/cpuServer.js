const si = require('systeminformation');

async function CPUUtilisation() {

    const ouvert = await si.currentLoad();
    const cpuUtilisation = Number(ouvert?.currentLoad);

  return {
    ts: Date.now(),
    cpuUtilisation: Number.isFinite(cpuUtilisation)
      ? Math.round(cpuUtilisation)
      : null
  }
}

module.exports = { CPUUtilisation };

