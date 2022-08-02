module.exports = function (req, res, next) {
    let buffer = new Buffer('')
    req.on('data', (chunk) => {
        buffer = Buffer.concat([buffer, chunk])
    })

    req.on('end', () => {
        req.buffer = buffer
        next()
    })
}