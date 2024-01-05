const prisma = require("../src/models");

const removeKaryawan = async () => {
  await prisma.karyawan.deleteMany()
};

const createKaryawan = async () => {
  await prisma.karyawan.create({
    data:{
      nomor_induk: 'test123',
      nama: 'test',
      alamat: 'test alamat',
      tgl_lahir: '2001-02-12T00:00:00.000Z',
      tgl_join: '2012-04-10T00:00:00.000Z',
    }
  })
}

const removeCuti = async() => {
  await prisma.cuti.deleteMany()
}

const createCuti = async () => {
  await prisma.cuti.create({
    data:{
      id: 1,
      nomor_induk: "test123",
      tgl_cuti: "2023-02-11T00:00:00.000Z",
      lama_cuti: 5,
      keterangan: "test",
    }
  })
}

module.exports = {removeKaryawan, createKaryawan, removeCuti, createCuti}