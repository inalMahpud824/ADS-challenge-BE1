const prisma = require("../models");
// const { CutiModels } = require("../models");

const createCuti = async ({
  nomor_induk,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const result = await prisma.cuti.create({
    data: {
      tgl_cuti: tgl_cuti,
      lama_cuti: lama_cuti,
      keterangan: keterangan,
      karyawan: {
        connect: {nomor_induk: nomor_induk}
      }
    },
  });
  return result;
};

const getCutiById = async (id) => {
  const result = await prisma.cuti.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new Error(404);
  }
  return result;
};

const updateCutiById = async ({
  id,
  nomor_induk,
  tgl_cuti,
  lama_cuti,
  keterangan,
}) => {
  const uid = parseInt(id);
  return await prisma.cuti.update({
    where: {
      id: uid,
    },
    data: {
      tgl_cuti: tgl_cuti,
      lama_cuti: lama_cuti,
      keterangan: keterangan,
      karyawan: {
        connect: {nomor_induk: nomor_induk}
      }
    },
  });
};

const deleteCutiById = async (id) => {
  return await prisma.cuti.deleteMany({
    where: {
      id: id
    },
  });
};

const getAllCuti = async (query) => {
  if(query === 'tgl_cuti') {
    return await prisma.cuti.findMany({
      orderBy: {
        tgl_cuti: 'desc'
      }
    });
  }
  return await prisma.cuti.findMany();
};
module.exports = {
  createCuti,
  getCutiById,
  updateCutiById,
  deleteCutiById,
  getAllCuti,
};
