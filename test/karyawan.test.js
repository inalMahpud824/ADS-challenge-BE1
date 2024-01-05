const {app} = require('../src/index')
const supertest = require('supertest')
const { removeKaryawan, createKaryawan } = require('./test.util')

describe('POST /karyawan', function() {
  afterEach(async () => {
    await removeKaryawan()
  })
  it('should can create karyawan', async () => {
    const result = await supertest(app)
    .post('/karyawan/')
    .send({
      nomor_induk: 'test123',
      nama: 'test',
      alamat: 'test alamat',
      tgl_lahir: '2001-02-12T00:00:00.000Z',
      tgl_join: '2012-04-10T00:00:00.000Z',
    })

    expect(result.status).toBe(201)
    expect(result.body.message).toBe('karyawan Created')
  })
})

describe('PUT /karyawan', function() {
  beforeEach(async () => {
    await createKaryawan()
  })
  afterEach(async () => {
    await removeKaryawan()
  })
  it('should can update karyawan', async () => {
    const result = await supertest(app)
    .put('/karyawan/test123')
    .send({
      nama: 'test update',
      alamat: 'test alamat update',
      tgl_lahir: '2001-02-12T00:00:00.000Z',
      tgl_join: '2012-04-10T00:00:00.000Z',
    })

    expect(result.status).toBe(200)
    expect(result.body.message).toBe('karyawan updated')
    
  })
})


describe('DELETE /karyawan', function() {
  beforeEach(async () => {
    await createKaryawan()
  })
  afterEach(async () => {
    await removeKaryawan()
  })
  it('should can delete karyawan', async () => {
    const result = await supertest(app)
    .delete('/karyawan/test123')

    expect(result.status).toBe(200)
    expect(result.body.message).toBe('karyawan deleted')
  })
})


describe('Get /karyawan', function() {
  beforeEach(async () => {
    await createKaryawan()
  })
  afterEach(async () => {
    await removeKaryawan()
  })
  it('should can get karyawan by nomor induk', async () => {
    const result = await supertest(app)
    .get('/karyawan/test123')

    expect(result.status).toBe(200)
    expect(result.body.status).toBe('Success')
    expect(result.body.data).toBeDefined()
  })
})