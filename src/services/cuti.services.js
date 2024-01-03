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
const getCutiById = async ( {id} ) => {
  const uid = parseInt(id);
  const result = await cutiRepositories.getCutiById( uid );
  return result;
};

const updateCutiById = async (
  {id,
  no_induk_karyawan,
  tgl_cuti,
  lama_cuti,
  keterangan}
) => {
  const uid = parseInt(id)
  const cekId = await cutiRepositories.getCutiById(uid)
  if(!cekId){
    return
  }
  const result = await cutiRepositories.updateCutiById({
    id,
    no_induk_karyawan,
    tgl_cuti,
    lama_cuti,
    keterangan,
  });
  return result
};

const deleteCutiById = async ({id}) => {
  const uid = parseInt(id)
  const cekId = await cutiRepositories.getCutiById(uid)
  if(!cekId){
    return
  }
  const result = await cutiRepositories.deleteCutiById(uid)
  return result
}
module.exports = { createCuti, getCutiById, updateCutiById, deleteCutiById };
