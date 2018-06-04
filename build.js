const log = require('npmlog')
const fs = require('fs');

const {
    exec,
    spawn,

    getMakeDirCommand,
    getRmDirCommand,

    getCvSharedCmakeFlags,
    getCvCmakeArgs
} = require('./native');
const {
    rootDir,
    opencvRoot,
    opencvSrc,
    opencvContribSrc,

    opencvBuild,
    opencvTag,
    opencvRepo,
    opencvContribRepo,

    numberOfCores
} = require('./config');


const build = async () => {

    log.silly('install', 'installing opencv');
    /**
    * create dir opencv
    */
    if (!fs.existsSync(opencvRoot)) {
        await exec(getMakeDirCommand('opencv'), { cwd: rootDir });
    }
    /**
     * create dir for build
     */
    if (!fs.existsSync(opencvBuild)) {
        await exec(getMakeDirCommand('build'), { cwd: opencvRoot });
    }

    /**
     * clone and checkout opencv_contrib repo
     */
    if (!fs.existsSync(opencvContribSrc)) {
        await exec(getRmDirCommand('opencv_contrib'), { cwd: opencvRoot });
        await spawn('git', ['clone', '--progress', opencvContribRepo], { cwd: opencvRoot });
        await spawn('git', ['checkout', `tags/${opencvTag}`, '-b', `v${opencvTag}`], { cwd: opencvContribSrc });
    }

    /**
     * clone and checkout opencv repo
     */
    if (!fs.existsSync(opencvSrc)) {
        await exec(getRmDirCommand('opencv'), { cwd: opencvRoot });
        await spawn('git', ['clone', '--progress', opencvRepo], { cwd: opencvRoot });
        await spawn('git', ['checkout', `tags/${opencvTag}`, '-b', `v${opencvTag}`], { cwd: opencvSrc });
    }

    /**
     * compile
     */
    console.log("opencvBuild", opencvBuild)
    await spawn('cmake', getCvCmakeArgs(getCvSharedCmakeFlags()), { cwd: opencvBuild });
    await spawn('make', ['install', `-j${numberOfCores}`], { cwd: opencvBuild });

    await spawn('make', ['all', `-j${numberOfCores}`], { cwd: opencvBuild });
}

module.exports = {
    build: build
}