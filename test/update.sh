#!/bin/bash

npm pack ../
PACKED_FILE_NAME=$(find netux-*.tgz)
mv ${PACKED_FILE_NAME} netux-latest.tgz
npm install ./netux-latest.tgz
rm ./${PACKED_FILE_NAME}
