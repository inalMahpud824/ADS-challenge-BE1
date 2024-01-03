const { cutiServices } = require("../services");

const createCuti = async (req, res) => {
  const { no_induk_karyawan, tgl_cuti, lama_cuti, keterangan } = req.body;
  try {
    const result = await cutiServices.createCuti({
      no_induk_karyawan,
      tgl_cuti,
      lama_cuti,
      keterangan,
    });
    res.status(201).json({
      status: "Success",
      message: "Cuti Created",
    });
  } catch (e) {
    console.error(e);
  }
};
const updateCutiById = async (req, res) => {
  const { no_induk_karyawan, tgl_cuti, lama_cuti, keterangan } = req.body;
  const { id } = req.params;
  try {
    const result = await cutiServices.updateCutiById({
      id,
      no_induk_karyawan,
      tgl_cuti,
      lama_cuti,
      keterangan,
    });
    res.status(200).json({
      status: "Success",
      message: "Cuti updated",
    });
  } catch (e) {
    console.error(e)
  }
};

const getCutiById = async (req, res) => {
  const {id} = req.params
  try{
    const result = await cutiServices.getCutiById({id})
    res.status(200).json({
      status: "Success",
      data: result,
    });
  }catch(e){
    console.error(e)
  }

}
module.exports = { createCuti, updateCutiById, getCutiById};
