'use strict'

/*
|--------------------------------------------------------------------------
| KunjunganSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class KunjunganSeeder {
  async run () {
    await Factory
      .model('App/Models/Kunjungan')
      .createMany(2, [
          {
            nama_pengunjung: 'Laksamana Andhika',
            jumlah_pengunjung: 14,
            waktu_kunjungan: 30,
            pasien: 3,
            perawat: 3,
          },
          {
            nama_pengunjung: 'Putri Desianti',
            jumlah_pengunjung: 6,
            waktu_kunjungan: 45,
            pasien: 2,
            perawat: 1,
          },
      ]);
  }
}

module.exports = KunjunganSeeder
