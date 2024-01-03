const { cutiServices } = require('../services')

const createCuti = async (req, res) => {
  const {no_induk_karyawan, tgl_cuti, lama_cuti, keterangan} = req.body
  try{
    const result = await cutiServices.createCuti({no_induk_karyawan, tgl_cuti, lama_cuti, keterangan})
    res.status(201).json({
      status: 'Success',
      message: 'Cuti Created'
    });
  }catch(e){
    console.error(e)
  }
}

module.exports = {createCuti}