const { cutiRepositories } = require("../repositories");

const createCuti = async ({
  nomor_induk,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const result = await cutiRepositories.createCuti({
    nomor_induk,
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
    nomor_induk,
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
    nomor_induk,
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

const getAllCuti = async (query) => {
  const result = await cutiRepositories.getAllCuti(query)
  return result 
}
module.exports = { createCuti, getCutiById, updateCutiById, deleteCutiById, getAllCuti };
