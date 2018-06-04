const path = require('path')
const fs = require('fs')
const log = require('npmlog')

//if (process.env.npm_config_loglevel === 'silly') {
log.level = 'silly'
//}

const {
    requireGit,
    requireCmake,
    isWindows,
    isOSX,
} = require('./native');
const {
    build
} = require('./build');

const install_ = async () => {
    log.silly('install', 'install');
    try {
        await requireGit();
        await requireCmake();
        await build();
    }
    catch (err) {
        log.error(err);
        process.exit(1);
    }
}
install_();