const {
    opencvSrc,
    opencvContribSrc,
    opencvBuild,
    opencvInclude,
    opencvIncludeCC,
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
    opencvIncludeCC,

    // libs
    opencvLibDir,

    // fetching required libs
    libs: opencvModules,

    // GPU / CPU
    isCPU: isCPU()
}