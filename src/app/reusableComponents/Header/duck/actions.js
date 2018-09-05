import types from './types';

const getValueFromInput = input => ({
  type: types.GET_VALUE_FROM_INPUT,
  payload: input
});

export default {
  getValueFromInput
};
