const si = require('systeminformation');

async function NetworkUtilisation() {

    const ouvert = await si.networkStats();
    const net = ouvert[0];

    return {
        ts: Date.now(),
        upload: net?.tx_sec ?? 0,
        download: net?.rx_sec ?? 0
    };
}

module.exports = { NetworkUtilisation };
