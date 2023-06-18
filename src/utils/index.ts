import {MESSAGE_SUCCESS, VALIDATOR} from './constants/message.ts';

const ListMessageError = { ...VALIDATOR() }

const ListMessageSuccess = { ...MESSAGE_SUCCESS() }

export { ListMessageError, ListMessageSuccess }
