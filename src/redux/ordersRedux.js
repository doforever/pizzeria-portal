import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({orders}) => orders.data;
export const getLoadingState = ({orders}) => orders.loading;
export const getOrderForId = ({orders}, id) => orders.find(order => order.id === id);

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD = createActionName('ADD');
const ADD_ERROR = createActionName('ADD_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addOrder = payload => ({ payload, type: ADD });
export const addError = payload => ({ payload, type: ADD_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.order}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchOrderFromAPI = (id) => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.order}/${id}`)
      .then(res => {
        dispatch(fetchSuccess([res.data]));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const addAPIOrder = (order) => {
  return dispatch => {

    Axios
      .post(`${api.url}/api/${api.order}/${order.id}`, order)
      .then(res => {
        dispatch(addOrder(res.data));
      })
      .catch(err => {
        dispatch(addError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD: {

      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case ADD_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
