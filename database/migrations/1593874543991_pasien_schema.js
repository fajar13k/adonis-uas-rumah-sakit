'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasienSchema extends Schema {
  up () {
    this.create('pasien', (table) => {
      table.increments()
      table.string('nama', 100)
      table.string('golongan_darah', 2)
      table.integer('tinggi_badan', 3)
      table.integer('berat_badan', 3)
      table.timestamps()
    })
  }

  down () {
    this.drop('pasien')
  }
}

module.exports = PasienSchema
