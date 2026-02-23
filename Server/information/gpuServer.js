const si = require('systeminformation');

const gpuHistory = []
const gpuTableau = []

function GPUUtilisation() {
    setInterval(async () => {
        try {
            const ouvert = await si.graphics();
            const gpuUtilisationTest = ouvert.controllers[0].utilizationGpu;
            const gpuUtilisation = Number(gpuUtilisationTest ?? 0);
            const temps = { ts: Date.now(), gpuUtilisation };

            gpuHistory.push(temps);
            gpuTableau.push(temps);

            while (gpuTableau.length > 10) gpuTableau.shift();

            console.log(gpuTableau)

        } catch (err) {
            console.error("Error:", err);
        }
    }, 1000);
}

function getGPUHistory() {
    return gpuHistory;
}
module.exports = { GPUUtilisation, getGPUHistory };

