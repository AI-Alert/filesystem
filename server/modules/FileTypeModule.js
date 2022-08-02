const fileSchema = require('../models/File')

class FileType {
    //Сохранение данных в базу - МЕТОД PUT/:filename
    async saveFileData({filename, mime_type, size}) {
        const file = await fileSchema.findOne({ name: filename })
        if (file) {
            file.mime_type = mime_type
            file.size = size
            await file.save()
            return file

        } else {
            const newFile = new fileSchema({
                name: filename,
                mime_type: mime_type,
                size: size
            })
            await newFile.save()
            return newFile
        }
    }

    //Вывод файла из монго (базы) - МЕТОД GET/:filename
    async getFileFromDb(filename) {
        const file = await fileSchema.findOne({ name: filename })
        if (file) {
            return file
        } else {
            return new Error('Имя файла некорректно или файла не существует')
        }

    }
}


module.exports = new FileType()