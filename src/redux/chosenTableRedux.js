// selectors
export const getChosenTable = ({chosenTable}) => chosenTable;

// action name creator
const reducerName = 'chosenTable';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHOOSE = createActionName('CHOOSE');

// action creators
export const chooseTable = payload => ({payload, type: CHOOSE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHOOSE:
      return action.payload;
    default:
      return statePart;
  }
}
