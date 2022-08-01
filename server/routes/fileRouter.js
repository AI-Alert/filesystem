const Router = require("express")
const router = new Router()
const fileController = require("../controllers/fileController")

router.put('/', fileController.file_upload)
router.get('/:filename', fileController.file_download)
router.get('/', (req, res) => {


    console.log("Подключено")
})

module.exports = router