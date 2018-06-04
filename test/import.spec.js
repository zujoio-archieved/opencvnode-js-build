const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const cvBuild = require('../index');

const indexZero = 0;

/**
 * check path is not undefined as well as actually exists,
 * @param {string} dirPath 
 */
const resolvePath = (dirPath) => {
    expect(dirPath).to.not.eql(undefined);
    const resolvedDirPath = path.resolve(dirPath);
    expect(resolvedDirPath).to.not.eql(undefined);
    expect(fs.existsSync(resolvedDirPath)).to.not.eql(undefined);
    expect(fs.existsSync(resolvedDirPath)).to.eql(true);
}

/**
 * check array defined and have elements
 * @param {Array} array 
 */
const checkArrayHaveEle = (array) => {
    expect(array).to.not.eql(undefined);
    expect(array).to.be.an('array');
    expect(array[indexZero]).to.not.eql(undefined);
}

describe('check CPU / GPU mode', () => {
    it('should have either CPU / GPU mode', () => {
        expect(cvBuild.isCPU).to.not.eql(undefined);
    })
})

describe('opencv import libs and includes', () => {
    it('should check opencvSrc is not undefined.', () => {
        resolvePath(cvBuild.opencvSrc);
    });
    it('should check opencvContribSrc is not undefined.', () => {
        resolvePath(cvBuild.opencvContribSrc);
    });
    it('should check opencvBuild is not undefined.', () => {
        resolvePath(cvBuild.opencvBuild);
    });
    it('should check opencvInclude is not undefined.', () => {
        resolvePath(cvBuild.opencvInclude);
    });
    it('should check opencvLibDir is not undefined.', () => {
        resolvePath(cvBuild.opencvLibDir);
    });
    it('should check opencvLibDir is not undefined.', () => {
        checkArrayHaveEle(cvBuild.libs);
    });
});