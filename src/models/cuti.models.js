const { DataTypes } = require("sequelize");
const { db } = require("../config");
const Karyawan = require("./karyawan.models");

const Cuti = db.define("cuti", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  no_induk_karyawan: {
    type: DataTypes.STRING,
    references: {
      model: Karyawan,
      key: "nomor_induk",
    },
  },
  tgl_cuti: {
    type: DataTypes.DATE,
  },
  lama_cuti: {
    type: DataTypes.INTEGER,
  },
  keterangan: {
    type: DataTypes.STRING,
  },
});
Cuti.belongsTo(Karyawan, { foreignKey: "nomor_induk" });
module.exports = Cuti;
