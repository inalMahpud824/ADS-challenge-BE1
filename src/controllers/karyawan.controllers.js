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

module.exports = {createKaryawan}