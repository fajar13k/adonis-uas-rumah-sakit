'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Kunjungan extends Model {

  static get table() {
    return 'kunjungan'
  }

  static get primaryKey() {
    return 'id'
  }

  static get updatedAtColumn() {
    return null
  }

  static castDates(field, value) {
    if (field === 'created_at') {
      return value.format('DD MMMM YYYY')
    }
  }

  /* Relasi dengan pasien */
  prwt() {
    return this.hasOne(
      'App/Models/Perawat',
      'perawat',
      'id'
    )
  }

  /* Relasi dengan pasien */
  psn() {
    return this.hasOne(
      'App/Models/Pasien',
      'pasien',
      'id'
    )
  }

}

module.exports = Kunjungan
