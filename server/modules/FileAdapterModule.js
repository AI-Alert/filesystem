const path = require('path')
const fs = require('fs')
const fileType = require('./FileTypeModule')
const allMimeTypes = require('./AllExtensionsModule')

class FileAdapterModule {

//Функция записи файла (для обновления в контроллере - МЕТОД PUT/:filename)
    writeFile(reqFile, data = "empty1",) {
        const filenamePath = path.join(__dirname, '..', 'data')
        const ws = fs.createWriteStream(path.join(filenamePath, reqFile))
        ws.write(data)

        ws.on('finish', async () => {
            const file = path.join(__dirname, '..', 'data', reqFile)
            const filename = path.basename(file)
            const ext = allMimeTypes.getExtension(filename)
            const contentType = allMimeTypes.getContentType(ext)
            const fileSize = fs.statSync(file).size

            await fileType.saveFileData({
                filename: filename,
                mime_type: contentType,
                size: fileSize
            })
        })
        ws.end()
    }

//TODO: Реализовать поток для чтения

    readFile(filename) {
        const filenamePath = path.join(__dirname, '..', 'data')
        const rs = fs.createReadStream(path.join(filenamePath, filename))
        return rs
    }


//Функция для чтения файла из базы (для получения в контроллере - МЕТОД GET/:filename)
    async getFile(filename) {
        const existFile = fs.existsSync(path.join(__dirname, '..', 'data', filename))
        if (existFile) {
            const filePath = path.join(__dirname, '..', 'data', filename)
            const fileMeta = await fileType.getFileFromDb(filename)
            return {
                filePath,
                mime_type: fileMeta.mime_type,
                size: fileMeta.size
            }
        } else {
            return new Error('Файла не существует')
        }

    }
}

module.exports = new FileAdapterModule()