const Router = require("express")
const router = new Router()
const fileUploadRouter = require("./fileRouter")

router.use('/files', fileUploadRouter);

module.exports = router