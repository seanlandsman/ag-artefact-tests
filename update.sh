#!/usr/bin/env bash

SOURCE_FOLDER=$1

CWD=`pwd`;

rm *.tgz

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

packModule "charts-community-modules" "ag-charts-community"
packModule "charts-enterprise-modules" "ag-charts-enterprise"

GRID_COMMUNITY_MODULES=("core" "client-side-row-model" "react" "angular/dist/ag-grid-angular" "styles" "react" "vue" "vue3")
packModules "grid-community-modules" "${GRID_COMMUNITY_MODULES[@]}"

GRID_ENTERPRISE_MODULES=("core" "status-bar" "master-detail")
packModules "grid-enterprise-modules" "${GRID_ENTERPRISE_MODULES[@]}"

GRID_PACKAGES=("ag-grid-community" "ag-grid-enterprise" "ag-grid-react" "ag-grid-angular/dist/ag-grid-angular" "ag-grid-vue")
packModules "grid-packages" "${GRID_PACKAGES[@]}"

cd $CWD

for directory in 'modules' 'packages' 'charts';
do
  for subDirectory in ./$directory/*;
  do
	  cd "$subDirectory/node_modules"
	  rm -rf ag-charts-community ag-charts-enterprise @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
	  cd -
	done
done

npx lerna bootstrap --no-ci
