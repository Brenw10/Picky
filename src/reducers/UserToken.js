export const ACTIONS = {
  INSERT: 'INSERT',
  CLEAR: 'CLEAR',
};

export default function (state, action) {
  switch (action.type) {
    case ACTIONS.INSERT: {
      return action.payload;
    }
    case ACTIONS.CLEAR: {
      return null;
    }
    default: {
      return state;
    }
  }
}