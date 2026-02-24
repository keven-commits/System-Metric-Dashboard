const si = require('systeminformation');

async function GPUUtilisation() {

    const ouvert = await si.graphics();
    const gpuUtilisationTest = ouvert.controllers[0].utilizationGpu;
    const gpuUtilisation = Number(gpuUtilisationTest ?? 0);

    return {
        ts: Date.now(),
        gpuUtilisation
    }

}

module.exports = { GPUUtilisation };


