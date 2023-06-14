SOURCE_FOLDER=$1

CWD=`pwd`;

rm *.tgz

cd $SOURCE_FOLDER

cd charts-community-modules/ag-charts-community
npm pack --pack-destination $CWD
cd -
cd charts-enterprise-modules/ag-charts-enterprise
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/client-side-row-model
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/core
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/angular/dist/ag-grid-angular
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/styles
npm pack --pack-destination $CWD
cd -
cd grid-enterprise-modules/status-bar
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/react
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/vue
npm pack --pack-destination $CWD
cd -
cd grid-community-modules/vue3
npm pack --pack-destination $CWD
cd -
cd grid-enterprise-modules/core
npm pack --pack-destination $CWD
cd -
cd grid-packages/ag-grid-community
npm pack --pack-destination $CWD
cd -
cd grid-packages/ag-grid-enterprise
npm pack --pack-destination $CWD
cd -
cd grid-packages/ag-grid-react
npm pack --pack-destination $CWD
cd -
cd grid-packages/ag-grid-angular/dist/ag-grid-angular
npm pack --pack-destination $CWD

cd $CWD

for directory in 'esm' 'modules' 'packages';
do
  for subDirectory in ./$directory/*;
  do
	  cd "$subDirectory/node_modules"
	  rm -rf ag-charts-community ag-charts-enterprise @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
	  cd -
	done
done

npx lerna bootstrap --no-ci