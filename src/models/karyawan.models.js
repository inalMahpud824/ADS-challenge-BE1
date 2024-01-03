const { DataTypes } = require("sequelize");
const { db } = require("../config");

const Karyawan = db.define("karyawan", {
  nomor_induk: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
  },
  alamat: {
    type: DataTypes.STRING,
  },
  tgl_lahir: {
    type: DataTypes.DATE,
  },
  tgl_join: {
    type: DataTypes.DATE,
  },
});
module.exports = Karyawan;
