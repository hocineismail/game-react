import { Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { currentRound, getResultCurrentBattle, IAppState } from '../../getStore';
import { IBattleProps } from '../../typings/global';
import archers from '../../assets/archers.jpg';
import cavarly from '../../assets/cavalry.jpg';
import pikeman from '../../assets/pikeman.jpg';

/**
 * resultCurrentBattle and round provided from store
 * Battle display display the current battle with score and result ofr a both (player and computer)
  
*/

export function Battle({ round, resultCurrentBattle }: IBattleProps) {
  return (
    <Card style={{ minHeight: '50vh' }}>
      <Card.Body>
        <Card.Title>
          Round: {round} it left: {20 - round}
        </Card.Title>
        <div
          style={{
            fontSize: '50',
          }}>
          {round ? (
            <Row>
              <Col style={{ marginLeft: '100px' }}>
                <Card>
                  <Card.Body>
                    <Card.Title> YOU </Card.Title>
                  </Card.Body>
                  <h2>{resultCurrentBattle[0].score}</h2>
                  <div style={{ cursor: 'pointer' }}>
                    <img
                      src={
                        resultCurrentBattle[0].unit === 'Cavalry'
                          ? cavarly
                          : resultCurrentBattle[0].unit === 'Archers'
                          ? archers
                          : pikeman
                      }
                      style={{ width: '100px', maxHeight: '130px' }}
                    />{' '}
                    <h3>{resultCurrentBattle[0].unit}</h3>
                  </div>
                </Card>
              </Col>
              <Col style={{ marginRight: '100px' }}>
                <Card>
                  <Card.Body>
                    <Card.Title> COMPTER </Card.Title>
                    <h2>{resultCurrentBattle[1].score}</h2>
                    <div style={{ cursor: 'pointer' }}>
                      <img
                        src={
                          resultCurrentBattle[1].unit === 'Cavalry'
                            ? cavarly
                            : resultCurrentBattle[1].unit === 'Archers'
                            ? archers
                            : pikeman
                        }
                        style={{ width: '100px', maxHeight: '130px' }}
                      />
                    </div>
                    <h3>{resultCurrentBattle[1].unit}</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : (
            <b>CHOOSE YOU NEXT MOVE</b>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
//use mapStateToProps for get state from store
// get round and resultCurrentBattle
export const mapStateToProps = (state: IAppState) => {
  const resultCurrentBattle = getResultCurrentBattle(state);
  const round = currentRound(state);
  return {
    resultCurrentBattle,
    round,
  };
};

export default connect(mapStateToProps)(Battle);
