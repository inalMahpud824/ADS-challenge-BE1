const { cutiRepositories } = require("../repositories");

const createCuti = async ({
  no_induk_karyawan,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const result = await cutiRepositories.createCuti({
    no_induk_karyawan,
    tgl_cuti,
    lama_cuti,
    keterangan,
  });
  return result;
};

module.exports = {createCuti}