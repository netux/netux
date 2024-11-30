// @ts-check
const fs = require('node:fs')
const path = require('node:path')


const SRC_PATH = path.resolve(__dirname, 'src')
const DIST_PATH = path.resolve(__dirname, 'dist')

function directoryToJson(dirPath) {
  const result = {}
  const fileNameList = fs.readdirSync(dirPath)

  for (let fileName of fileNameList) {
    const filePath = path.resolve(dirPath, fileName)
    const pathStats = fs.statSync(filePath)
    const fileNameNoExt = fileName.replace(/\..+$/, '')

    if (result.hasOwnProperty(fileNameNoExt)) {
      throw new Error([
        `${ fileName } overwrites a previously set \`${ fileNameNoExt }\` property.`,
        `Remove ${ path.resolve(dirPath, fileNameNoExt) } or ${ path.resolve(fileName === fileNameNoExt ? `${ fileName }.json` : fileName) } and rebuild.`
      ].join('\n'))
    }

    if (pathStats.isDirectory()) {
      result[fileNameNoExt] = directoryToJson(filePath)
    } else if (pathStats.isFile()) {
      const contents = fs.readFileSync(filePath, 'utf8')
      const jsonContents = JSON.parse(contents)

      delete jsonContents['$schema']

      result[fileNameNoExt] = jsonContents
    }
  }

  return result
}

function mkdirp(filePath) {
  /** @type {string} */
  let traveled = path.sep

  for (const part of filePath.split(path.sep).slice(0, -1)) {
    traveled = path.join(traveled, part)

    if (!fs.existsSync(traveled)) {
      fs.mkdirSync(traveled)
    }
  }
}

function writeToPath(filePath, contents) {
  mkdirp(filePath)

  fs.writeFileSync(filePath, contents, 'utf8')
}


const result = directoryToJson(SRC_PATH)

writeToPath(path.resolve(DIST_PATH, 'index.json'), JSON.stringify(result))
