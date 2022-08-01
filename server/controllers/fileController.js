const File = require("../models/File")
const fs = require("fs");
const path = require("path")
const p = require("path");


class FileController {

    async file_download(req, res, next){
        try{




            function seeFileNameAndExtension(filePath, newFileName){

                const ext = path.extname(filePath)
                const filename = path.basename(filePath, ext)
                console.log(`Имя файла: ${filename}`)
                console.log(`Расширение файла: ${ext}`)

                //Потоки
                const readStream = fs.createReadStream(filePath)
                const writeStream = fs.createWriteStream(`./uploads/${newFileName}${ext}`)
                readStream.pipe(writeStream)

                console.log("Файл успешно записан")

            }

            seeFileNameAndExtension('nest-cli.json', 'json')


            const check = File.findOne({
                filename: req.params.filename
            }).exec(function (err, file){

                res.json(post);


                const filename = req.params.filename;
                const p = require("path")
                const ext = path.extname(filePath)
                const path = `../modules/FileStorage/downloads/${filename}.${ext}`;
                const writeStream = fs.createWriteStream(path);

                res.pipe(writeStream);

                writeStream.on("open", () => {
                    console.log("Download started!");
                })

                writeStream.on("finish", () => {
                    writeStream.close();
                    console.log("File uploaded successfully!");
                })
            });
        } catch (e) {
            next(e)
        }
    }

    // async file_upload(req, res, next){
    //     try{
    //         const newFile = new File();
    //         newFile.name = path.extname(req.files.name);;
    //         newFile.mime_type = path.extname(req.files.name.name);
    //         newFile.size = req.files.size;
    //         newFile.save(function(err, file){
    //             if(err) {
    //                 res.send('File is Already downloaded');
    //             } else {
    //                 console.log(file);
    //                 res.send(file);
    //             }
    //         });
    //
    //     } catch (e) {
    //         next(e)
    //     }
    // }



    async file_upload(req, res, next){
        try{


            const http = require('http');
            const fs = require('fs');

            const filename = req.body.filename;
            const p = require("path")
            const extension = p.extname(req.files.name);

            const path = `../modules/FileStorage/uploads/${filename}.${extension}`

            const file = fs.createWriteStream(path);
            res.pipe(file);

            file.on("finish", () => {
                file.close();
                console.log("Download Completed");
            });
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new FileController()