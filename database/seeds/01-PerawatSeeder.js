'use strict'

/*
|--------------------------------------------------------------------------
| PerawatSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PerawatSeeder {
  async run () {
    await Factory
      .model('App/Models/Perawat')
      .createMany(3, [
          {
            nama: 'Alya',
            golongan_darah: 'B',
            tinggi_badan: 159,
            berat_badan: 51
          },
          {
            nama: 'Shaula',
            golongan_darah: 'O',
            tinggi_badan: 154,
            berat_badan: 39
          },
          {
            nama: 'Tommy',
            golongan_darah: 'O',
            tinggi_badan: 168,
            berat_badan: 65
          },
      ]);
  }
}

module.exports = PerawatSeeder
