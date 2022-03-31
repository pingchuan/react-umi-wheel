import { Effect, Subscription } from 'dva';
import { Reducer } from 'redux';

export interface AppState {
  test: string;
}

declare module 'react-redux' {
  interface DefaultRootState {
    app: AppState;
  }
}

export interface IndexModelType {
  namespace: 'app';
  state: AppState;
  effects: {
    getTest: Effect;
  };
  reducers: {
    save: Reducer<AppState>;
    clear: Reducer<AppState>;
  };
  subscriptions?: { setup: Subscription };
}

export const initState = (): AppState => {
  return { test: '' };
};

const IndexModel: IndexModelType = {
  namespace: 'app',
  state: initState(),
  effects: {
    *getTest({ payload }, { call, put }) {
      const res = yield call(() => ({}), payload);

      yield put({
        type: 'save',
        payload: { res },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear(state) {
      return {
        ...state,
        ...initState(),
      };
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen(({ pathname }) => {
  //       console.log(pathname, 'subsriptions');
  //     });
  //   },
  // },
};

export default IndexModel;
