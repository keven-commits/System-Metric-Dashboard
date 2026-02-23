const si = require('systeminformation');

const networkHistory = []
const networkTableau = []

let derniereStat = null
let dernierTemps = null

function NetworkUtilisation() {
    setInterval(async () => {
        try {
            const ouvert = await si.networkStats();
            const networkUtilisation = ouvert[0];

            const now = Date.now();

            if (derniereStat && dernierTemps) {
                const timeDiff = (now - dernierTemps) / 1000;

                const bytesUploadDiff = networkUtilisation.tx_bytes - derniereStat.tx_bytes;
                const bytesDownloadDiff = networkUtilisation.rx_bytes - derniereStat.rx_bytes;

                const mbUploadParSec = (bytesUploadDiff / 1024 / 1024) / timeDiff;
                const mbDownloadParSec = (bytesDownloadDiff / 1024 / 1024) / timeDiff;

                const temps = {
                    ts: now,
                    upload: Number(mbUploadParSec.toFixed(2)),
                    download: Number(mbDownloadParSec.toFixed(2))
                };

                networkHistory.push(temps);
                networkTableau.push(temps);

                while (networkTableau.length > 10) networkTableau.shift();

                console.log(networkTableau)
            }

            derniereStat = networkUtilisation;
            dernierTemps = now;

        } catch (err) {
            console.error("Error:", err);
        }
    }, 1000);
}

function getNetworkHistory() {
    return networkHistory;
}
module.exports = { NetworkUtilisation, getNetworkHistory };

