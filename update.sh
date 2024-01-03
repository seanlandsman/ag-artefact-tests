#!/usr/bin/env bash

SOURCE_FOLDER=$1

CWD=`pwd`;

rm *.tgz

node setAgDeps.js $SOURCE_FOLDER

cd $SOURCE_FOLDER

function packModule() {
  local PARENT_DIRECTORY=$1
  local MODULE=$2

  cd "$PARENT_DIRECTORY/$MODULE"
  npm pack --pack-destination $CWD
  cd -
}

function packModules() {
  local PARENT_DIRECTORY=$1
  shift
  local MODULES=("$@")

  for MODULE in "${MODULES[@]}";
  do
     packModule $PARENT_DIRECTORY $MODULE;
  done
}

GRID_COMMUNITY_MODULES=("core" "client-side-row-model" "react" "angular/dist/ag-grid-angular" "styles" "react" "vue" "vue3")
packModules "grid-community-modules" "${GRID_COMMUNITY_MODULES[@]}"

GRID_ENTERPRISE_MODULES=("core" "status-bar" "master-detail" "excel-export" "filter-tool-panel" "master-detail" "menu" "multi-filter" "range-selection" "rich-select" "row-grouping" "row-grouping" "side-bar" "set-filter" "charts")
packModules "grid-enterprise-modules" "${GRID_ENTERPRISE_MODULES[@]}"

GRID_PACKAGES=("ag-grid-community" "ag-grid-enterprise" "ag-grid-react" "ag-grid-angular/dist/ag-grid-angular" "ag-grid-vue" "ag-grid-vue3")
packModules "grid-packages" "${GRID_PACKAGES[@]}"

cd $CWD

for directory in 'modules' 'packages' 'charts';
do
  for subDirectory in ./$directory/*;
  do
	  cd "$subDirectory/node_modules" > /dev/null
	  rm -rf ag-charts-community ag-charts-enterprise ag-charts-angular ag-charts-react ag-charts-vue ag-charts-vue3 @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise > /dev/null
	  cd - > /dev/null
	done
done

npx lerna bootstrap --no-ci --registry http://54.194.75.252:4873

