// @ts-check
const FileSystem = require('fs')
const Path = require('path')


const SRC_PATH = Path.resolve(__dirname, 'src')
const DIST_PATH = Path.resolve(__dirname, 'dist')

function directoryToJson (path) {
  const result = {}
  const fileNameList = FileSystem.readdirSync(path)
  const dirName = path.match(/[/\\](.+)$/)[1]

  for (let fileName of fileNameList) {
    const filePath = Path.resolve(path, fileName)
    const pathStats = FileSystem.statSync(filePath)
    const fileNameNoExt = fileName.replace(/\..+$/, '')
    
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

function writeToPath (path, contents) {
  const splitPath = path.split(/[/\\]/)

  for (let i in splitPath) {
    const dirPath = Path.resolve('\\', ... splitPath.slice(0, i))

    try {
      FileSystem.statSync(dirPath)
    } catch (err) {
      if (err.code === 'ENOENT') {
        FileSystem.mkdirSync(dirPath)
      } else {
        return err
      }
    }
  }

  FileSystem.writeFileSync(path, contents, 'utf8')
}


const result = directoryToJson(SRC_PATH)

writeToPath(Path.resolve(DIST_PATH, 'index.json'), JSON.stringify(result))
