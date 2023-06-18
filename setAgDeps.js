const fs = require('fs')
const projectRoots = ['modules', 'packages'];

const literal = false;
const version = "30.0.1";

const patchDeps = (deps) => {
    Object.keys(deps).forEach(dependencyName => {
        if (dependencyName.startsWith("@ag-") || dependencyName.startsWith("ag-")) {
            const zippedFilename = dependencyName.replaceAll("/", "-").replaceAll("@", "")
            deps[dependencyName] = literal ? version : `../../${zippedFilename}-${version}.tgz`
        }
    })
}

projectRoots.forEach(root => {
    const subDirs = fs.readdirSync(root);
    subDirs.forEach(subDir => {
        const packageJsonFile = `./${root}/${subDir}/package.json`;
        const packageJson = require(packageJsonFile);
        if(packageJson.devDependencies) {
            patchDeps(packageJson.devDependencies);
        }
        if(packageJson.dependencies) {
            patchDeps(packageJson.dependencies);
        }

        fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf-8')
    })
})

