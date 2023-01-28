import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { onChangeScore } from '../../actions/actions';
import { units } from '../../data/units';

import useDistribution from '../../hooks/useDistribution';
import { IUnitsProps } from '../../typings/global';
import { getRandomInt } from '../../utils/getRandomInt';
import { getScore } from '../../utils/getScore';
import archers from '../../assets/archers.jpg';
import cavarly from '../../assets/cavalry.jpg';
import pikeman from '../../assets/pikeman.jpg';

/**
 * onChangeScore for dispatching the result to store
 * Units component render 3 button to make an action (attack next round)
 */

export const Units: FC<IUnitsProps> = ({ onChangeScore }) => {
  //When the game start it should to distribute units for icrease probability
  //to 50/100 25/100 25/100
  const distribution = useDistribution();
  /**
   *
   * @param unit unit is choosed by player
   */
  const onChooseNextMove = (unit: string): void => {
    // use getRandomInt to choose random number for the computer's move
    let randomNumber = getRandomInt(4);
    // use getScore to get score of this round |
    // Should return [number, number] example: [1, -1]
    let score = getScore(unit + ':' + distribution[randomNumber]);

    let currentBattle = [
      { unit: unit, score: score[0] },
      { unit: distribution[randomNumber], score: score[1] },
    ];
    //dispatch result to store
    onChangeScore(currentBattle);
  };
  // Cavalry;
  // Archers;
  // Pikemen;
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {units.map((unit: string) => {
        return (
          <div key={unit} style={{ cursor: 'pointer' }} onClick={() => onChooseNextMove(unit)}>
            <img
              src={unit === 'Cavalry' ? cavarly : unit === 'Archers' ? archers : pikeman}
              style={{ width: '100px', maxHeight: '130px' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const mapDispatchToProps = {
  onChangeScore: onChangeScore,
};

export default connect(null, mapDispatchToProps)(Units);
