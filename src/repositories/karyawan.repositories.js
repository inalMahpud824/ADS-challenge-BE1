const prisma = require("../models/index");
const { KaryawanModels } = require("../models/index");

const createKaryawan = async ({
  nomor_induk,
  nama,
  alamat,
  tgl_lahir,
  tgl_join,
}) => {
  const result = await prisma.karyawan.create({
    data: {
      nomor_induk: nomor_induk,
      nama: nama,
      alamat: alamat,
      tgl_lahir: tgl_lahir,
      tgl_join: tgl_join,
    },
  });
  return result;
};

const updateKaryawan = async ({
  nomor_induk,
  nama,
  alamat,
  tgl_lahir,
  tgl_join,
}) => {
  return await prisma.karyawan.update({
    where: {
      nomor_induk: nomor_induk,
    },
    data: {
      nomor_induk: nomor_induk,
      nama: nama,
      alamat: alamat,
      tgl_lahir: tgl_lahir,
      tgl_join: tgl_join,
    },
  });
};

const getKaryawanById = async (nomor_induk) => {
  const result = await prisma.karyawan.findUnique({
    where: {
      nomor_induk: nomor_induk
    },
    include: {
      cuti: true
    }
  })

  if (!result) {
    throw new Error(404);
  }
  return result;
};

const deleteKaryawanById = async ({ nomor_induk }) => {
  return await prisma.karyawan.deleteMany({
    where: {
      nomor_induk: nomor_induk
    }
  })
};

const getAllKaryawan = async () => {
  return await prisma.karyawan.findMany()
};

module.exports = {
  createKaryawan,
  updateKaryawan,
  getKaryawanById,
  deleteKaryawanById,
  getAllKaryawan,
};
