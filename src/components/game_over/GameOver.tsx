import { connect } from 'react-redux';

import { currentScore, getHistory, IAppState } from '../../getStore';
import { IHistory } from '../../typings/global';
import History from '../history/History';

type Props = {
  score: number[];
  history: IHistory[];
};

export function GameOver({ score, history }: Props) {
  return (
    <div className="text-center">
      <h2>Game is finished with 20 round and totol Score is</h2>
      <h1>
        PLayer(You): {score[0]}| Computer: {score[1]}
        <br />
        Winner is: {score[0] > score[1] ? 'YOU' : 'COMPUTER'}
      </h1>
      <History history={history} />
    </div>
  );
}

export const mapStateToProps = (state: IAppState) => {
  const score = currentScore(state);
  const history = getHistory(state);
  return {
    score,
    history,
  };
};

export default connect(mapStateToProps)(GameOver);
