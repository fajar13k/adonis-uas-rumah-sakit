'use strict'

/*
|--------------------------------------------------------------------------
| PasienSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PasienSeeder {
  async run () {
    await Factory
      .model('App/Models/Pasien')
      .createMany(4, [
          {
            nama: 'Farel Sebastian',
            golongan_darah: 'O',
            tinggi_badan: 170,
            berat_badan: 52
          },
          {
            nama: 'Mahonny Mohammed',
            golongan_darah: 'AB',
            tinggi_badan: 178,
            berat_badan: 59
          },
          {
            nama: 'Andhika Catur Pamungkas',
            golongan_darah: 'A',
            tinggi_badan: 184,
            berat_badan: 105
          },
          {
            nama: 'Fitri Yuni',
            golongan_darah: 'O',
            tinggi_badan: 153,
            berat_badan: 54
          },
      ]);
  }
}

module.exports = PasienSeeder
