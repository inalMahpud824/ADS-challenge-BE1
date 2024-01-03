const {karyawanServices} = require('../services')

const createKaryawan = async (req, res) => {
  const { nomor_induk, nama, alamat, tgl_lahir, tgl_join } = req.body;
  try{
    const result = await karyawanServices.createKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
    res.status(201).json({
      status: 'Success',
      message: 'karyawan Created'
    });
  }catch(e){
    console.log(e)
  }
}

const updateKaryawan = async (req, res) => {
  const { nama, alamat, tgl_lahir, tgl_join } = req.body;
  const {nomor_induk} = req.params
  console.log(nomor_induk)
  try{
    const result = await karyawanServices.updateKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
    console.log(result)
    res.status(201).json({
      status: 'Success',
      message: 'karyawan updated',
    });
  }catch(e){
    if(e.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    console.log(e)
  }
}

module.exports = {createKaryawan, updateKaryawan}