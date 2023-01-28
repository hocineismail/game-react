import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { IAppState, isAppStarted, currentRound } from './getStore';
import { Container } from 'react-bootstrap';

//import actions
import { appStartAction } from './actions/actions';
import background from './assets/9zly_8ztc_210511.jpg';
//import types
import { IAppProps } from './typings/global';
//import components
import Units from './components/units/Units';
import Loading from './components/loading/Loading';
import Score from './components/score/Score';
import GameOver from './components/game_over/GameOver';
import Battle from './components/battle/Battle';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/**
 * started false by default before starting game
 * round the count of round start from 0 to 20 and after reaching 20 the game will finished (commping from store)
 * onStart a function to start our game
 * AppFC is the global component for this game
 */

export const AppFC: FC<IAppProps> = ({ started, round, onStart }) => {
  useEffect(() => {
    if (!started) {
      onStart();
    }
  }, [started, onStart]);

  //Render loading component the start of game
  if (!started) {
    return <Loading />;
  }

  //After 20 of rounds should display the end of this game with the history and the score
  if (round === 20) return <GameOver />;

  //Render the game
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <Container className="text-center">
        <Score />
        <Battle />
        <Units />
      </Container>
    </div>
  );
};

//use mapStateToProps for get state from store
export const mapStateToProps = (state: IAppState) => {
  const started = isAppStarted(state);
  const round = currentRound(state);
  return {
    started,
    round,
  };
};

//use mapDispatchToProps for dispatching data to store
export const mapDispatchToProps = {
  onStart: appStartAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppFC);
export default App;
