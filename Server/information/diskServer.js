const si = require('systeminformation');

async function DiskUtilisation() {

    const ouvert = await si.fsSize();
    const disk = ouvert[0];

  return {
    ts: Date.now(),
    disk: Math.round(Number(disk?.use) || 0)
  };
}

module.exports = { DiskUtilisation };