module.exports = function () {
    //Сет доступных расширений файла
    const extTypes = {
        "avi": "video/x-msvideo", "bin": "application/octet-stream", "bmp": "image/bmp", "class": "application/octet-stream", "com": "application/x-msdownload", "css": "text/css", "csv": "text/csv", "djv": "image/vnd.djvu", "djvu": "image/vnd.djvu", "doc": "application/msword", "dot": "application/msword", "exe": "application/x-msdownload", "gif": "image/gif", "gz": "application/x-gzip", "html": "text/html", "ico": "image/vnd.microsoft.icon", "iso": "application/octet-stream", "jar": "application/java-archive", "java": "text/x-java-source", "jpeg": "image/jpeg", "jpg": "image/jpeg", "js": "application/javascript", "json": "application/json", "log": "text/plain", "m4v": "video/mp4", "mp3": "audio/mpeg", "mp4": "video/mp4", "mp4v": "video/mp4", "mpeg": "video/mpeg", "pdf": "application/pdf", "png": "image/png", "pps": "application/vnd.ms-powerpoint", "ppt": "application/vnd.ms-powerpoint", "ps": "application/postscript", "psd": "image/vnd.adobe.photoshop", "py": "text/x-script.python", "rar": "application/x-rar-compressed", "svg": "image/svg+xml", "tar": "application/x-tar", "text": "text/plain", "tif": "image/tiff", "tiff": "image/tiff", "torrent": "application/x-bittorrent", "txt": "text/plain", "vcf": "text/x-vcard", "vcs": "text/x-vcalendar", "war": "application/java-archive", "wav": "audio/x-wav", "wmv": "video/x-ms-wmv", "wsdl": "application/wsdl+xml", "xhtml": "application/xhtml+xml", "xls": "application/vnd.ms-excel", "xml": "application/xml", "yaml": "text/yaml", "yml": "text/yaml", "zip": "application/zip"
    }
    return {
        getExtension: function (path) {
            const i = path.lastIndexOf('.');
            return (i < 0) ? '' : path.substring(i);
        },
        getContentType: function (ext) {
            return extTypes[ext.substring(1).toLowerCase()] || 'application/octet-stream';
        }
    };
}();