const { karyawanRepositories } = require("../repositories")

const createKaryawan = async ({ nomor_induk, nama, alamat, tgl_lahir, tgl_join }) => {
  const result = await karyawanRepositories.createKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
  return result
}

module.exports = {createKaryawan}