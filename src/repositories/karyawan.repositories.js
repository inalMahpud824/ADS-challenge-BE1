const { KaryawanModels } = require("../models/index");

const createKaryawan = async ({ nomor_induk, nama, alamat, tgl_lahir, tgl_join }) => {
  const result = await KaryawanModels.create({
    nomor_induk, nama, alamat, tgl_lahir, tgl_join
  })
  return result
};

module.exports = {createKaryawan}
