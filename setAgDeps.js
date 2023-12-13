const fs = require('fs')
const gridProjectRoots = ['modules', 'packages'];
const chartProjectRoots = ['charts'];

const literal = false;
let gridVersion = process.argv.length === 3 ? require(`${process.argv[2]}/grid-community-modules/core/package.json`).version : "31.0.0";
const chartVersion = "latest";

const patchDeps = (deps, version) => {
    Object.keys(deps).forEach(dependencyName => {
        if (dependencyName.startsWith("@ag-") || dependencyName.startsWith("ag-")) {
            const zippedFilename = dependencyName.replaceAll("/", "-").replaceAll("@", "")
            deps[dependencyName] = literal ? version : `../../${zippedFilename}-${version}.tgz`
        }
    })
}

const patchChartsDeps = (deps, version) => {
    Object.keys(deps).forEach(dependencyName => {
        if (dependencyName.startsWith("@ag-") || dependencyName.startsWith("ag-")) {
            const zippedFilename = dependencyName.replaceAll("/", "-").replaceAll("@", "")
            deps[dependencyName] = version;
        }
    })
}

function processProjects(root, version) {
    const subDirs = fs.readdirSync(root);
    subDirs.forEach(subDir => {
        const packageJsonFile = `./${root}/${subDir}/package.json`;
        if (fs.existsSync(packageJsonFile)) {
            const packageJson = require(packageJsonFile);
            if (packageJson.devDependencies) {
                patchDeps(packageJson.devDependencies, version);
            }
            if (packageJson.dependencies) {
                patchDeps(packageJson.dependencies, version);
            }

            fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf-8')
        }
    })
}

function processChartsProjects(root, version) {
    const subDirs = fs.readdirSync(root);
    subDirs.forEach(subDir => {
        const packageJsonFile = `./${root}/${subDir}/package.json`;
        if (fs.existsSync(packageJsonFile)) {
            const packageJson = require(packageJsonFile);
            if (packageJson.devDependencies) {
                patchChartsDeps(packageJson.devDependencies, version);
            }
            if (packageJson.dependencies) {
                patchChartsDeps(packageJson.dependencies, version);
            }

            fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf-8')
        }
    })
}

gridProjectRoots.forEach(root => {
    processProjects(root, gridVersion);
})

chartProjectRoots.forEach(root => {
    processChartsProjects(root, chartVersion);
})

