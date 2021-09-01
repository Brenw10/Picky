import AsyncStorage from '@react-native-async-storage/async-storage';

export const ACTIONS = {
  INSERT: 'INSERT',
  CLEAR: 'CLEAR',
};

export default function (state, action) {
  switch (action.type) {
    case ACTIONS.INSERT: {
      AsyncStorage.setItem('@token', action.payload);
      return action.payload;
    }
    case ACTIONS.CLEAR: {
      AsyncStorage.removeItem('@token');
      return null;
    }
    default: {
      return state;
    }
  }
}