const { app } = require("../src/index");
const supertest = require("supertest");
const { removeCuti, createKaryawan, removeKaryawan, createCuti } = require("./test.util");

describe("POST /cuti", function () {
  beforeEach(async () => {
    await createKaryawan()
  })
  afterEach(async () => {
    await removeCuti();
    await removeKaryawan()
  });
  it("should can create cuti", async () => {
    const result = await supertest(app).post("/cuti/").send({
      nomor_induk: "test123",
      tgl_cuti: "2023-02-11T00:00:00.000Z",
      lama_cuti: 5,
      keterangan: "sakit",
    });

    expect(result.status).toBe(201);
    expect(result.body.message).toBe("Cuti Created");
    expect(result.body.status).toBe('Success')
  });
});

describe("DELETE /cuti", function () {
  beforeEach(async () => {
    await createKaryawan()
    await createCuti()
  })
  afterEach(async () => {
    await removeCuti();
    await removeKaryawan()
  });
  it("should can update cuti", async () => {
    const result = await supertest(app).put("/cuti/" + 1).send({
      nomor_induk: "test123",
      keterangan: "test update",
    });

    expect(result.status).toBe(200);
    expect(result.body.message).toBe("Cuti updated");
    expect(result.body.status).toBe('Success')
  });
});


describe("DELETE /cuti", function () {
  beforeEach(async () => {
    await createKaryawan()
    await createCuti()
  })
  afterEach(async () => {
    await removeCuti();
    await removeKaryawan()
  });
  it("should can delete cuti by id", async () => {
    const result = await supertest(app).delete("/cuti/" + 1)

    expect(result.status).toBe(200);
    expect(result.body.status).toBe('Success')
    expect(result.body.message).toBe("Cuti deleted");
  });
});

describe("GET /cuti", function () {
  beforeEach(async () => {
    await createKaryawan()
    await createCuti()
  })
  afterEach(async () => {
    await removeCuti();
    await removeKaryawan()
  });
  it("should can get cuti by id", async () => {
    const result = await supertest(app).get("/cuti/" + 1)

    expect(result.status).toBe(200);
    expect(result.body.status).toBe('Success')
    expect(result.body.data).toBeDefined()
  });
});