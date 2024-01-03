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
  return result;
};

const getCutiById = async (id) => {
  const result = await CutiModels.findByPk(id);

  if (!result) {
    throw new Error(404);
  }
  return result;
};

const updateCutiById = async ({
  id,
  no_induk_karyawan,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const uid = parseInt(id)
  return await CutiModels.update(
    { no_induk_karyawan, tgl_cuti, lama_cuti, keterangan },
    {
      where: {
        id: uid
      },
    }
  );
};

const deleteCutiById = async (id) => {
  return await CutiModels.destroy({
    where: {
      id
    }
  })
}
module.exports = { createCuti, getCutiById, updateCutiById, deleteCutiById };
