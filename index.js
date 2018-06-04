const {
    opencvSrc,
    opencvContribSrc,
    opencvBuild,
    opencvInclude,
    opencvLibDir,
    opencvModules
} = require('./config');
const {
    isCPU: isCPU
} = require('./native');

module.exports = {
    //src
    opencvSrc,
    opencvContribSrc,
    
    // build
    opencvBuild,

    // includes
    opencvInclude,

    // libs
    opencvLibDir,

    // fetching required libs
    libs: opencvModules,

    // GPU / CPU
    isCPU: isCPU()
}