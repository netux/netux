#!/bin/bash

ROOT_DIR=$(dirname "$0")
pushd $ROOT_DIR > /dev/null

rm -r ./node_modules/netux # just in case
npm pack ../
PACKED_FILE_NAME=$(find netux-*.tgz)
mv $PACKED_FILE_NAME netux-latest.tgz
npm install file:./netux-latest.tgz

popd
