/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import { middleware } from './kernel.js'
const LoginController = () => import('#controllers/login_controller')

const IndexController = () => import('#controllers/index_controller')
const HomeController = () => import('#controllers/home_controller')

router
  .group(() => {
    router.get('/', [IndexController, 'index']).as('index').middleware(middleware.guest())

    router.get('login', [LoginController, 'index']).as('login')
    router.post('login', [LoginController, 'login']).as('login.post')
  })
  .middleware(middleware.guest())

router
  .group(() => {
    router.get('/home', [HomeController, 'index']).as('home')
    router.post('logout', [LoginController, 'logout']).as('logout')
  })
  .middleware(middleware.auth())
