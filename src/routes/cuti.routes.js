const { Router } = require("express");
const { cutiControllers } = require("../controllers");
const router = Router();

router.post('/', cutiControllers.createCuti)
router.get('/:id', cutiControllers.getCutiById)
router.put('/:id', cutiControllers.updateCutiById)
router.delete('/:id', cutiControllers.deleteCutiById)
module.exports = router;
