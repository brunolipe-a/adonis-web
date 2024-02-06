import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'bruno@test.com',
      password: '12345678',
      fullName: 'Bruno Felipe',
    })
  }
}
