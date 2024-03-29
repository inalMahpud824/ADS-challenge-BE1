const { cutiServices } = require("../services");

const createCuti = async (req, res) => {
  const { nomor_induk, tgl_cuti, lama_cuti, keterangan } = req.body;
  try {
    const result = await cutiServices.createCuti({
      nomor_induk,
      tgl_cuti,
      lama_cuti,
      keterangan,
    });
    res.status(201).json({
      status: "Success",
      message: "Cuti Created",
    });
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
};
const updateCutiById = async (req, res) => {
  const { nomor_induk, tgl_cuti, lama_cuti, keterangan } = req.body;
  const { id } = req.params;
  try {
    const result = await cutiServices.updateCutiById({
      id,
      nomor_induk,
      tgl_cuti,
      lama_cuti,
      keterangan,
    });
    res.status(200).json({
      status: "Success",
      message: "Cuti updated",
    });
  } catch (e) {
    console.error(e);
  }
};

const getCutiById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await cutiServices.getCutiById({ id });
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (e) {
    if (e.message == 404) {
      return res.status(404).json({
        status: "failed",
        message: "Not found",
      });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
      });
    }
  }
};

const deleteCutiById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await cutiServices.deleteCutiById({ id });
    res.status(200).json({
      status: "Success",
      message: "Cuti deleted",
    });
  } catch (e) {
    if (e.message == 404) {
      return res.status(404).json({
        status: "failed",
        message: "Not found",
      });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
      });
    }
  }
};

const getAllCuti = async (req, res) => {
  const {sortby} = req.query
  try {
    const result = await cutiServices.getAllCuti(sortby);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
};
module.exports = { createCuti, updateCutiById, getCutiById, deleteCutiById, getAllCuti };
