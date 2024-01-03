const { KaryawanModels } = require("../models/index");

const createKaryawan = async ({
  nomor_induk,
  nama,
  alamat,
  tgl_lahir,
  tgl_join,
}) => {
  const result = await KaryawanModels.create({
    nomor_induk,
    nama,
    alamat,
    tgl_lahir,
    tgl_join,
  });
  return result;
};

const updateKaryawan = async ({
  nomor_induk,
  nama,
  alamat,
  tgl_lahir,
  tgl_join,
}) => {
  return await KaryawanModels.update(
    {
      nomor_induk,
      nama,
      alamat,
      tgl_lahir,
      tgl_join,
    },
    {
      where: {
        nomor_induk
      },
    }
  );
};

const getKaryawanById = async (nomor_induk) => {
  const result = await KaryawanModels.findByPk(nomor_induk);

  if (!result) {
    throw new Error(404);
  }
  return result;
};

const deleteKaryawanById = async ({nomor_induk}) => {
  return await KaryawanModels.destroy({
    where:{
      nomor_induk
    }
  })
}

module.exports = { createKaryawan, updateKaryawan, getKaryawanById, deleteKaryawanById };
