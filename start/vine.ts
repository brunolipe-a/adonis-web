import vine from '@vinejs/vine'

import { customMessagesProvider } from '#validators/messages/custom_message_provider'

/**
 * Register the translated
 * messages for VineJS
 */
vine.messagesProvider = customMessagesProvider()
