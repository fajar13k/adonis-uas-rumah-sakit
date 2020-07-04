'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Perawat extends Model {

  static get table() {
    return 'perawat'
  }

  static get primaryKey() {
    return 'id'
  }

}

module.exports = Perawat
