import { APP_RESTART, APP_START, ON_CHANGE_SCORE } from '../constants/contants';
import { Action } from 'redux';

export type APP_START_TYPE = typeof APP_START;
export type APP_RESTART_TYPE = typeof APP_RESTART;
export type APP_CHANGE_SCORE = typeof ON_CHANGE_SCORE;





export interface IAppStartAction extends Action<APP_START_TYPE> {
  type: APP_START_TYPE;
}
//IAppAction builder type of action
export interface IAppAction extends Action<APP_START_TYPE | APP_RESTART_TYPE | APP_CHANGE_SCORE> {
  type: APP_START_TYPE | APP_RESTART_TYPE | APP_CHANGE_SCORE;
  payload: { currentBattle: [ISingleResult, ISingleResult] } | undefined;
}

export interface IAppReStartAction extends Action<APP_RESTART_TYPE> {
  type: APP_RESTART_TYPE;
}
export interface IAppChangeScore extends Action<APP_CHANGE_SCORE> {
  type: APP_CHANGE_SCORE;
}

export type TAppActions = IAppStartAction;

export type TScoreActions = IAppChangeScore;


export interface ISingleResult {
    unit: string;
    score: number;
  }
  export interface IHistory {
    player: string;
    player_score: number;
    computer: string;
    computer_score: number;
  }
  export interface IResultCurrentBattle {

  }
//==================================//
//props type //

//Props interface App Component
export interface IAppProps {
  started: boolean;
  round: number;
  onStart: () => void;
}
//props interface History componenet //
export interface IHistoryProps {
  history: IHistory[];
}

// props interface score component //
export interface IScoreProps {
  score: number[];
}

// Props interface battke component //
export interface IBattleProps {
  round: number;
  resultCurrentBattle: [{ unit: string; score: number }, { unit: string; score: number }];
}

// Props interface battke component //
export interface IBattleProps {
  round: number;
  resultCurrentBattle: [{ unit: string; score: number }, { unit: string; score: number }];
}
// Props interface battke component //
export interface IUnitsProps {
  onChangeScore: (currentBattle: any) => void;
}
