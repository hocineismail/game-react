import { APP_RESTART, APP_START, ON_CHANGE_SCORE } from '../constants/contants';
import { IAppChangeScore, IAppReStartAction, IAppStartAction } from '../typings/global';

// action builder(s)
export const appStartAction: () => IAppStartAction = () => ({
  type: APP_START,
});

export const onRestartAction: () => IAppReStartAction = () => ({
  type: APP_RESTART,
});

export const onChangeScore: (currentBattle: any) => IAppChangeScore = (currentBattle: string) => ({
  type: ON_CHANGE_SCORE,
  payload: {
    currentBattle: currentBattle,
  },
});
