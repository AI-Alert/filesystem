const https = require("https");
const fs = require("fs");

// URL of the image
const url = "https://www.tutorialspoint.com/cg/images/cgbanner.jpg";




https.get(url, (res, req) => {
    const filename = "downloaded-images"
    const extension = "jpg"
    const path = `../modules/FileStorage/uploads/${filename}.${extension}`;
    const writeStream = fs.createWriteStream(path);

    res.pipe(writeStream);
    writeStream.on("open", () => {
        console.log("Upload Started...");
    })

    writeStream.on("finish", () => {
        writeStream.close();
        console.log("Upload Completed!");
    })
})