const { Router } = require("express");
const { karyawanControllers } = require("../controllers");
const { validator } = require("../middlewares");
const router = Router();
const { validate, requirements } = validator;

router.post(
  "/",
  [validate(requirements.createKaryawan)],
  karyawanControllers.createKaryawan
);
router.get(
  "/:nomor_induk",
  [validate(requirements.getKaryawanById)],
  karyawanControllers.getKaryawanById
);
router.get("/", karyawanControllers.getAllKaryawan);
router.put(
  "/:nomor_induk",
  [validate(requirements.updateKaryawan)],
  karyawanControllers.updateKaryawan
);
router.delete("/:nomor_induk", karyawanControllers.deleteKaryawanById);
module.exports = router;
