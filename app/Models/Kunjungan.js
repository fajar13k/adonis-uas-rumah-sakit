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

  static get createdAtColumn() {
    return 'tanggal_kunjungan'
  }

  static get updatedAtColumn() {
    return null
  }

  static get dates() {
    return super.dates.concat(['tanggal_kunjungan'])
  }

  static castDates(field, value) {
    if (field === 'tanggal_kunjungan') {
      return value.format('DD MMMM YYYY')
    }
  }

}

module.exports = Kunjungan
