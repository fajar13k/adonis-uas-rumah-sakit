'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pasien extends Model {

  static get table() {
    return 'pasien'
  }

  static get primaryKey() {
    return 'id'
  }

  /* Relasi Kunjungan */
  kunjungan() {
    return this.belongsTo(
      'App/Models/Kunjungan',
      'id',
      'pasien'
    )
  }

}

module.exports = Pasien
