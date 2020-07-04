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

}

module.exports = Kunjungan
