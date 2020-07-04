'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KunjunganSchema extends Schema {
  up () {
    this.create('kunjungan', (table) => {
      table.increments()
      table.string('nama_pengunjung', 100).notNullable()
      table.integer('jumlah_pengunjung').notNullable()
      table.integer('waktu_kunjungan').notNullable()
      table.integer('pasien').references('id').inTable('pasien')
      table.integer('perawat').references('id').inTable('perawat')
      table.timestamps()
    })
  }

  down () {
    this.drop('kunjungan')
  }
}

module.exports = KunjunganSchema
