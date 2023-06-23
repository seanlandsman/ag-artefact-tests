# ag-artefact-tests

## Setup

Make sure that you have run the following in your AG Grid repo for all the modules you wish to test.

```
npm run build && npm run package
```

Then run the update script pointing at the path to the root of your AG Grid repo code that you just built.

```
run ./update.sh <path to your target directory>
```

Then

```
npm run clean && npm run build
```

Then 

```
npm run start-server
```