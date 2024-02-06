import vine from '@vinejs/vine'

export const userLogin = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)
