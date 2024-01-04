const { body, param } = require("express-validator");

const requirements = {
  createCuti: [
    body('nomor_induk').isString().isLength({ min: 5 }),
    body('tgl_cuti').isISO8601(),
    body('lama_cuti').isInt().isLength({ min: 1 }),
    body('keterangan').isString().isLength({ min: 5 }),
  ],
  updateCuti: [
    param('id').isInt({ min: 1 }),
    body('nomor_induk').isString().isLength({ min: 5 }),
    body('tgl_cuti').isISO8601().optional({ nullable: true }),
    body('lama_cuti').isInt().isLength({ min: 1 }).optional({ nullable: true }),
    body('keterangan').isString().isLength({ min: 5 }).optional({ nullable: true }),
  ],
  getCutiById: [
    param('id').isInt({ min: 1 }),
  ],
};

module.exports = requirements;
