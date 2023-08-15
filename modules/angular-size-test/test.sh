#!/bin/bash

BUNDLE_SIZE=`ls -l dist/v30-app/main.*.js | cut -d ' ' -f 8`
SIZE_CHECKPOINT=1400000

# as of 30.0.6 it's ~137k - if it's much bigger than this we should investigate
if (( $BUNDLE_SIZE > $SIZE_CHECKPOINT )); then
    echo "Generated bundle size is $BUNDLE_SIZE - this is bigger than $SIZE_CHECKPOINT. Check the generated bundle and ensure the contents are what's expected"
    exit 1;
fi

exit 0;
