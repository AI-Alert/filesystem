//TODO: Допилить загрузчик НА сервер

const http = require('http');
const fs = require('fs');

const path = "process.env.FILE_SAVE_PATH" || "files"
const filename = "file"
const extension = "jpg"

const file = fs.createWriteStream(`../${path}/${filename}.${extension}`);
const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
    response.pipe(file);


    const req = http.request({
        hostname: HOSTNAME,
        port: PORT,
        path: UPLOAD_PATH,
        method: 'PUT',
    });

    fs.createReadStream('somefile.zip').pipe(req);

});

