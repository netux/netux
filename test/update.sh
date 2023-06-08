#!/bin/bash

rm -r ./node_modules/netux # just in case
npm pack ../
PACKED_FILE_NAME=$(find netux-*.tgz)
mv $PACKED_FILE_NAME netux-latest.tgz
npm install file:./netux-latest.tgz
