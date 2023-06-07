// @ts-check
const FileSystem = require('fs')
const Path = require('path')


const SRC_PATH = Path.resolve(__dirname, 'src')
const DIST_PATH = Path.resolve(__dirname, 'dist')

function directoryToJson(path) {
  const result = {}
  const fileNameList = FileSystem.readdirSync(path)

  for (let fileName of fileNameList) {
    const filePath = Path.resolve(path, fileName)
    const pathStats = FileSystem.statSync(filePath)
    const fileNameNoExt = fileName.replace(/\..+$/, '')

    if (result.hasOwnProperty(fileNameNoExt)) {
      throw new Error([
        `${ fileName } overwrites a previously set \`${ fileNameNoExt }\` property.`,
        `Remove ${ Path.resolve(path, fileNameNoExt) } or ${ Path.resolve(fileName === fileNameNoExt ? `${ fileName }.json` : fileName) } and rebuild.`
      ].join('\n'))
    }

    if (pathStats.isDirectory()) {
      result[fileNameNoExt] = directoryToJson(filePath)
    } else if (pathStats.isFile()) {
      const contents = FileSystem.readFileSync(filePath, 'utf8')
      const jsonContents = JSON.parse(contents)

      result[fileNameNoExt] = jsonContents
    }
  }

  return result
}

function mkdirp(path) {
  /** @type {string} */
  let traveled = Path.sep

  for (const part of path.split(Path.sep).slice(0, -1)) {
    traveled = Path.join(traveled, part)

    if (!FileSystem.existsSync(traveled)) {
      FileSystem.mkdirSync(traveled)
    }
  }
}

function writeToPath(path, contents) {
  mkdirp(path)

  FileSystem.writeFileSync(path, contents, 'utf8')
}


const result = directoryToJson(SRC_PATH)

writeToPath(Path.resolve(DIST_PATH, 'index.json'), JSON.stringify(result))
