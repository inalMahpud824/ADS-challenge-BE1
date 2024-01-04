-- CreateTable
CREATE TABLE "karyawan" (
    "nomor_induk" TEXT NOT NULL,
    "nama" VARCHAR(100),
    "tgl_lahir" DATE,
    "tgl_join" DATE,
    "alamat" VARCHAR(200),

    CONSTRAINT "karyawan_pkey" PRIMARY KEY ("nomor_induk")
);

-- CreateTable
CREATE TABLE "cuti" (
    "id" SERIAL NOT NULL,
    "nomor_induk" VARCHAR(100),
    "tgl_cuti" DATE,
    "lama_cuti" INTEGER,
    "keterangan" VARCHAR(100),

    CONSTRAINT "cuti_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cuti" ADD CONSTRAINT "cuti_nomor_induk_fkey" FOREIGN KEY ("nomor_induk") REFERENCES "karyawan"("nomor_induk") ON DELETE SET NULL ON UPDATE CASCADE;
