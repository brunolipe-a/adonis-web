import type { HttpContext } from '@adonisjs/core/http'

export default class IndexController {
  async index({ response }: HttpContext) {
    return response.redirect().toRoute('login')
  }
}
