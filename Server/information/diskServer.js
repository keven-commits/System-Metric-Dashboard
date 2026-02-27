const si = require('systeminformation');

async function DiskUtilisation() {

    const ouvert = await si.fsSize();
    const diskUtilisation = ouvert[0];

  return {
    ts: Date.now(),
    diskUtilisation: Math.round(Number(diskUtilisation?.use) || 0)
  };
}

module.exports = { DiskUtilisation };