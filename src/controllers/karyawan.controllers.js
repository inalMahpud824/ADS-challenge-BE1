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
    if(e.message == 400) {
      return res.status(400).json({
        status: 'failed',
        message: 'No induk alredy exist'
      });
    }
    return res.status(500).json({
      status: 'failed',
      message: 'internal server error'
    });
  }
}

const updateKaryawan = async (req, res) => {
  const { nama, alamat, tgl_lahir, tgl_join } = req.body;
  const {nomor_induk} = req.params
  try{
    const result = await karyawanServices.updateKaryawan({ nomor_induk, nama, alamat, tgl_lahir, tgl_join })
    res.status(200).json({
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
  }
}

const deleteKaryawanById = async (req, res) => {
  const {nomor_induk} = req.params
  try{
    const result = await karyawanServices.deleteKaryawanById({ nomor_induk })
    res.status(200).json({
      status: 'Success',
      message: 'karyawan deleted',
    });
  }catch(e){
    if(e.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
  }
}

const getAllKaryawan = async (req, res) => {
  const {sortby} = req.query
  try{
    const result = await karyawanServices.getAllKaryawan(sortby)
    res.status(200).json({
      status: 'Success',
      data: result
    });
  }catch(e){
      return res.status(500).json({
        status: 'failed',
        message: 'internal server error'
      });
  }
}

const getKaryawanById = async (req, res) => {
  const {nomor_induk} = req.params
  try{
    const result = await karyawanServices.getKaryawanById({ nomor_induk })
    res.status(200).json({
      status: 'Success',
      data: result
    });
  }catch(e){
    if(e.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      })
    }else{
      return res.status(500).json({
        status: 'failed',
        message: 'internal server error'
      })
    }
  }
}



module.exports = {createKaryawan, updateKaryawan, deleteKaryawanById, getAllKaryawan, getKaryawanById}