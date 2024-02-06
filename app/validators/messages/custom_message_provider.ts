import { SimpleMessagesProvider } from '@vinejs/vine'
import { ValidationFields } from '@vinejs/vine/types'

export function customMessagesProvider(fields?: ValidationFields) {
  return new SimpleMessagesProvider(messages, fields)
}

export const messages = {
  'required': 'O campo {{ field }} deve ser definido',

  'string': 'O campo {{ field }} deve ser um texto',
  'email': 'O campo {{ field }} deve ser um endereço de e-mail válido',
  'mobile': 'O campo {{ field }} deve ser um número de celular válido',
  'creditCard': 'O campo {{ field }} deve ser um número de cartão {{ providersList }} válido',
  'passport': 'O campo {{ field }} deve ser um número de passaporte válido',
  'postalCode': 'O campo {{ field }} deve ser um código postal válido',
  'regex': 'O formato do campo {{ field }} é inválido',
  'ascii': 'O campo {{ field }} deve conter apenas caracteres ASCII',
  'iban': 'O campo {{ field }} deve ser um número de IBAN válido',
  'jwt': 'O campo {{ field }} deve ser um token JWT válido',
  'coordinates': 'O campo {{ field }} deve conter coordenadas de latitude e longitude',
  'url': 'O campo {{ field }} deve ser um URL válido',
  'activeUrl': 'O campo {{ field }} deve ser um URL válido',
  'alpha': 'O campo {{ field }} deve conter apenas letras',
  'alphaNumeric': 'O campo {{ field }} deve conter apenas letras e números',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'maxLength': 'O campo {{ field }} não deve ter mais que {{ max }} caracteres',
  'fixedLength': 'O campo {{ field }} deve ter {{ size }} caracteres',
  'confirmed': 'O campo {{ field }} e o campo {{ otherField }} devem ser iguais',
  'endsWith': 'O campo {{ field }} deve terminar com {{ substring }}',
  'startsWith': 'O campo {{ field }} deve começar com {{ substring }}',
  'sameAs': 'O campo {{ field }} e o campo {{ otherField }} devem ser iguais',
  'notSameAs': 'O campo {{ field }} e o campo {{ otherField }} devem ser diferentes',
  'in': 'O {{ field }} selecionado é inválido',
  'notIn': 'O {{ field }} selecionado é inválido',
  'ipAddress': 'O campo {{ field }} deve ser um endereço de IP válido',
  'uuid': 'O campo {{ field }} deve ser um UUID válido',
  'hexCode': 'O campo {{ field }} deve ser um código de cor hexadecimal válido',

  'boolean': 'O valor deve ser um booleano',

  'number': 'O campo {{ field }} deve ser um número',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',
  'max': 'O campo {{ field }} não deve ser maior que {{ max }}',
  'range': 'O campo {{ field }} deve estar entre {{ min }} e {{ max }}',
  'positive': 'O campo {{ field }} deve ser positivo',
  'negative': 'O campo {{ field }} deve ser negativo',
  'decimal': 'O campo {{ field }} deve ter {{ digits }} casas decimais',
  'withoutDecimals': 'O campo {{ field }} deve ser um número inteiro',

  'accepted': 'O campo {{ field }} deve ser aceito',

  'enum': 'O {{ field }} selecionado é inválido',

  'literal': 'O campo {{ field }} deve ser {{ expectedValue }}',

  'object': 'O campo {{ field }} deve ser um objeto',

  'array': 'O campo {{ field }} deve ser um array',
  'array.minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} itens',
  'array.maxLength': 'O campo {{ field }} não deve ter mais que {{ max }} itens',
  'array.fixedLength': 'O campo {{ field }} deve conter {{ size }} itens',
  'notEmpty': 'O campo {{ field }} não deve estar vazio',
  'distinct': 'O campo {{ field }} possui valores duplicados',

  'record': 'O campo {{ field }} deve ser um objeto',
  'record.minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} itens',
  'record.maxLength': 'O campo {{ field }} não deve ter mais que {{ max }} itens',
  'record.fixedLength': 'O campo {{ field }} deve conter {{ size }} itens',

  'tuple': 'O campo {{ field }} deve ser um array',
  'union': 'Valor inválido fornecido para o campo {{ field }}',
  'unionGroup': 'Valor inválido fornecido para o campo {{ field }}',
  'unionOfTypes': 'Valor inválido fornecido para o campo {{ field }}',

  'date': 'O campo {{ field }} deve ser um valor de data e hora',
  'date.equals': 'O campo {{ field }} deve ser uma data igual a {{ expectedValue }}',
  'date.after': 'O campo {{ field }} deve ser uma data após {{ expectedValue }}',
  'date.before': 'O campo {{ field }} deve ser uma data antes de {{ expectedValue }}',
  'date.afterOrEqual': 'O campo {{ field }} deve ser uma data após ou igual a {{ expectedValue }}',
  'date.beforeOrEqual':
    'O campo {{ field }} deve ser uma data antes ou igual a {{ expectedValue }}',

  'date.sameAs': 'O campo {{ field }} e o campo {{ otherField }} devem ser iguais',
  'date.notSameAs': 'O campo {{ field }} e o campo {{ otherField }} devem ser diferentes',
  'date.afterField': 'O campo {{ field }} deve ser uma data após {{ otherField }}',
  'date.afterOrSameAs': 'O campo {{ field }} deve ser uma data após ou igual a {{ otherField }}',
  'date.beforeField': 'O campo {{ field }} deve ser uma data antes de {{ otherField }}',
  'date.beforeOrSameAs': 'O campo {{ field }} deve ser uma data antes ou igual a {{ otherField }}',

  'date.weekend': 'O campo {{ field }} não é um fim de semana',
  'date.weekday': 'O campo {{ field }} não é um dia de semana',
}
