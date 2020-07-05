'use strict'

const Kunjungan = use('App/Models/Kunjungan');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with kunjungans
 */
class KunjunganController {
  /**
   * Show a list of all kunjungans.
   * GET kunjungans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const row = await Kunjungan.query().with('psn').with('prwt').fetch()

    return view.render('dashboard', {
      title: "Kunjungan",
      kunjungan: row.toJSON(),
    });
  }
}

module.exports = KunjunganController
