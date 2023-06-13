cd /Users/seanlandsman/dev/ag-grid/latest/charts-community-modules/ag-charts-community
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/charts-enterprise-modules/ag-charts-enterprise
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/client-side-row-model
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/core
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/angular/dist/ag-grid-angular
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/styles
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-enterprise-modules/status-bar
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/react
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/vue
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-community-modules/vue3
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-enterprise-modules/core
npm pack
cd /Users/seanlandsman/dev/ag-grid/latest/grid-packages/ag-grid-community
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-packages/ag-grid-enterprise
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-packages/ag-grid-react
npm pack
cd -
cd /Users/seanlandsman/dev/ag-grid/latest/grid-packages/ag-grid-angular
npm pack
cd -

cd packages/charts-community/node_modules
rm -rf ag-charts-community ag-charts-enterprise
cd -
cd packages/charts-enterprise/node_modules
rm -rf ag-charts-community ag-charts-enterprise
cd -
cd modules/angular/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -
cd modules/react/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -
cd modules/webpack-ts/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -
cd packages/angular/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -
cd packages/react/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -
cd packages/webpack-ts/node_modules
rm -rf @ag-grid-community @ag-grid-enterprise ag-grid-community ag-grid-enterprise
cd -

npx lerna bootstrap