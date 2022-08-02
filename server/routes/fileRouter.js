const Router = require("express")
const router = new Router()
const fileController = require("../controllers/fileController")
const bufferMiddleware = require("../middleware/bufferMiddleware")

router.put('/:filename', bufferMiddleware , fileController.update_file)
router.get('/:filename', fileController.get_file)

module.exports = router