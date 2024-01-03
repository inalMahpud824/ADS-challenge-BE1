const { karyawanRepositories } = require("../repositories")

const createKaryawan = async ({ nomor_induk, nama, alamat, tgl_lahir, tgl_join }) => {
  const result = await karyawanRepositories.createKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
  return result
}
const updateKaryawan = async ({ nomor_induk, nama, alamat, tgl_lahir, tgl_join }) => {
  const cekId = await karyawanRepositories.getKaryawanById(nomor_induk)
  if(!cekId){
    return cekId
  }
  const result = await karyawanRepositories.updateKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
  return result
}
const deleteKaryawanById = async ({ nomor_induk}) => {
  const cekId = await karyawanRepositories.getKaryawanById(nomor_induk)
  if(!cekId){
    return cekId
  }
  const result = await karyawanRepositories.deleteKaryawanById({ nomor_induk})
  return result
}
module.exports = {createKaryawan, updateKaryawan, deleteKaryawanById}