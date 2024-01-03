const { CutiModels } = require("../models");

const createCuti = async ({
  no_induk_karyawan,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const result = await CutiModels.create({
    no_induk_karyawan,
    tgl_cuti,
    lama_cuti,
    keterangan,
  });
  return result
};
module.exports = {createCuti}