'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Perawat', (faker, index, data) => {
  return {
    nama: data[index].nama,
    golongan_darah: data[index].golongan_darah,
    tinggi_badan: data[index].tinggi_badan,
    berat_badan: data[index].berat_badan
  }
})

Factory.blueprint('App/Models/Pasien', (faker, index, data) => {
  return {
    nama: data[index].nama,
    golongan_darah: data[index].golongan_darah,
    tinggi_badan: data[index].tinggi_badan,
    berat_badan: data[index].berat_badan
  }
})

Factory.blueprint('App/Models/Kunjungan', (faker, index, data) => {
  return {
    nama_pengunjung: data[index].nama_pengunjung,
    jumlah_pengunjung: data[index].jumlah_pengunjung,
    waktu_kunjungan: data[index].waktu_kunjungan,
    pasien: data[index].pasien,
    perawat: data[index].perawat
  }
})