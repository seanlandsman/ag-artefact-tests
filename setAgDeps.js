const fs = require('fs')
const gridProjectRoots = ['modules', 'packages'];
const chartProjectRoots = ['charts'];

const literal = false;
const gridVersion = "30.0.6";
const chartVersion = "8.0.6";

const patchDeps = (deps, version) => {
    Object.keys(deps).forEach(dependencyName => {
        if (dependencyName.startsWith("@ag-") || dependencyName.startsWith("ag-")) {
            const zippedFilename = dependencyName.replaceAll("/", "-").replaceAll("@", "")
            deps[dependencyName] = literal ? version : `../../${zippedFilename}-${version}.tgz`
        }
    })
}

function processProjects(root, version) {
    const subDirs = fs.readdirSync(root);
    subDirs.forEach(subDir => {
        const packageJsonFile = `./${root}/${subDir}/package.json`;
        const packageJson = require(packageJsonFile);
        if (packageJson.devDependencies) {
            patchDeps(packageJson.devDependencies, version);
        }
        if (packageJson.dependencies) {
            patchDeps(packageJson.dependencies, version);
        }

        fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf-8')
    })
}

gridProjectRoots.forEach(root => {
    processProjects(root, gridVersion);
})

chartProjectRoots.forEach(root => {
    processProjects(root, chartVersion);
})

