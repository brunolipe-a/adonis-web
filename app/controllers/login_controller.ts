// import { clientLogin } from '#validators/client_login'
import User from '#models/user'
import { userLogin } from '#validators/user_login'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async index({ inertia }: HttpContext) {
    return inertia.render('login/page')
  }

  async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(userLogin)

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toRoute('home')
  }

  async logout({ response, auth }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().toRoute('login')
  }
}
