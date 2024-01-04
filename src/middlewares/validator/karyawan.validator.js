const { body, param, query } = require("express-validator");

const requirements = {
  createKaryawan: [
    body('nomor_induk').isString().isLength({ min: 5 }),
    body('nama').isString().isLength({ min: 3 }),
    body('tgl_lahir').isISO8601(),
    body('tgl_join').isISO8601(),
    body('alamat').isString().isLength({ min: 5 }),
  ],
  updateKaryawan: [
    param('nomor_induk').isString({ min: 1 }),
    body('nama').isString().isLength({ min: 3 }).optional({ nullable: true }),
    body('tgl_lahir').isISO8601().optional({ nullable: true }),
    body('tgl_join').isISO8601().optional({ nullable: true }),
    body('alamat').isString().isLength({ min: 5 }).optional({ nullable: true }),
  ],
  getKaryawanById: [
    param('nomor_induk').isString({ min: 1 }),
  ],
  // getAllKaryawan: [
  //   param('nomor_induk').isString({ min: 1 }),
  // ]
};

module.exports = requirements;
