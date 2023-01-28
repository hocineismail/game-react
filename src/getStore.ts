import { Action, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { APP_RESTART, APP_START, ON_CHANGE_SCORE } from './constants/contants';
import { IHistory, ISingleResult, TAppActions } from './typings/global';


// state definition
export interface IAppState {
  started: boolean;
  score: number[];
  history: IHistory[];
  resultCurrentBattle: [ISingleResult, ISingleResult];
  round: number;
}

export const initialState: IAppState = {
  started: false,
  score: [0, 0],
  history: [],
  resultCurrentBattle: [
    { unit: '', score: 0 },
    { unit: '', score: 0 },
  ],
  round: 0,
};

// app reducer
export function appReducer(state: IAppState = initialState, action: any) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        started: true,
      };
    case ON_CHANGE_SCORE:
      return {
        ...state,
        history: [...state.history, {
          player: action.payload.currentBattle[0].unit,
          player_score: action.payload.currentBattle[0].score,
          computer: action.payload.currentBattle[1].unit,
          computer_score: action.payload.currentBattle[1].score,
        }],
        resultCurrentBattle: action.payload.currentBattle,
        round: state.round + 1,
        score: [
          state.score[0] + action.payload.currentBattle[0].score,
          state.score[1] + action.payload.currentBattle[1].score,
        ],
      };
    case APP_RESTART:
      return {
        started: false,
        score: [0, 0],
        history: [],
        resultCurrentBattle: [
          { unit: '', score: 0 },
          { unit: '', score: 0 },
        ],
        round: 0,
      };
    default:
      return state;
  }
}

// started state selector
export const isAppStarted = (state: IAppState) => state.started;
export const currentScore = (state: IAppState) => state.score;
export const getHistory = (state: IAppState) => state.history;
export const getResultCurrentBattle = (state: IAppState) => state.resultCurrentBattle;
export const currentRound = (state: IAppState) => state.round;

export type AppStore = Store<IAppState, TAppActions | Action>;

export default function getStore(): AppStore {
  const store = createStore(appReducer, composeWithDevTools(applyMiddleware()));
  return store;
}
