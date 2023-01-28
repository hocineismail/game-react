import { connect } from 'react-redux';

import { currentScore, IAppState } from '../../getStore';
import { IScoreProps } from '../../typings/global';
import './Score.css';

/**
 * score provided by store
 * Score component display the current score of our battle between player and computer

 */

export function Score({ score }: IScoreProps) {
  return (
    <div className="score">
      <div style={{ float: 'left' }}>You: {score[0]}</div>
      <div style={{ float: 'right' }}>Copmuter: {score[1]}</div>
    </div>
  );
}

//use mapStateToProps for get state from store
export const mapStateToProps = (state: IAppState) => {
  const score = currentScore(state);
  return {
    score,
  };
};

export default connect(mapStateToProps)(Score);
