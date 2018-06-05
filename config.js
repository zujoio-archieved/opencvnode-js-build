const path = require('path');
const os = require('os');

const rootDir = __dirname;
const opencvRoot = path.join(rootDir, 'opencv');
const opencvSrc = path.join(opencvRoot, 'opencv');
const opencvModules = [
    'opencv_core',
    'opencv_highgui',
    'opencv_imgcodecs',
    'opencv_imgproc',
    'opencv_features2d',
    'opencv_calib3d',
    'opencv_photo',
    'opencv_objdetect',
    'opencv_ml',
    'opencv_video',
    'opencv_videoio',
    'opencv_videostab',
    'opencv_dnn',
    'opencv_face',
    'opencv_text',
    'opencv_tracking',
    'opencv_xfeatures2d',
    'opencv_ximgproc'
]
const opencvContribSrc = path.join(opencvRoot, 'opencv_contrib');
const opencvContribModules = path.join(opencvContribSrc, 'modules');
const opencvBuild = path.join(opencvRoot, 'build');
const opencvInclude = path.join(opencvBuild, 'include');
const opencvIncludeCC = path.join(opencvInclude, 'opencv');
const opencvLibDir = path.join(opencvBuild, 'lib');
const opencvBinDir = path.join(opencvBuild, 'bin');
const opencvTag = '3.4.0';
const opencvRepo = 'https://github.com/opencv/opencv.git';
const opencvContribRepo = 'https://github.com/opencv/opencv_contrib.git';


module.exports = {
    rootDir,
    /**
     * OPENCV CONFIG
     */
    opencvRoot,
    opencvSrc,
    opencvModules,
    /**
     * OPENCV CONTRIB CONFIG
     */
    opencvContribSrc,
    opencvContribModules,
    /**
     * OPENCV BUILD
     */
    opencvBuild,
    opencvInclude,
    opencvIncludeCC,
    opencvLibDir,
    opencvBinDir,
    /**
     * OPENCV REPO
     */
    opencvTag,
    opencvRepo,
    opencvContribRepo,

    numberOfCores: os.cpus().length,
}