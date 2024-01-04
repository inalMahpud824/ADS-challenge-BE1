const { Router } = require("express");
const { cutiControllers } = require("../controllers");
const router = Router();
const { validator } = require("../middlewares");
const { validate, requirements } = validator;

router.post('/', [validate(requirements.createCuti)], cutiControllers.createCuti)
router.put('/:id', [validate(requirements.updateCuti)], cutiControllers.updateCutiById)
router.get('/:id', [validate(requirements.getCutiById)], cutiControllers.getCutiById)
router.get('/', cutiControllers.getAllCuti)
router.delete('/:id', cutiControllers.deleteCutiById)
module.exports = router;
