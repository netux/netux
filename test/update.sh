npm pack ../
PACKED_FILE_NAME=$(find netux-*.tgz)
npm install --no-save ./${PACKED_FILE_NAME}
rm ./${PACKED_FILE_NAME}
