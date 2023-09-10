import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ACTIONS } from '../../utils/diceReducer';
import IterationController from '../atom/IterationController';

const Controller = ({ state, dispatch }) => {
  const handleClear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const handleSingleRoll = () => {
    dispatch({ type: ACTIONS.ROLL });
  };

  const handleAutomaticRoll = () => {
    dispatch({ type: ACTIONS.AUTO_ROLL });
  };

  return (
    <div style={STYLE} className="m-3">
      <Button onClick={handleAutomaticRoll} variant="primary">
        Mass Roll <FontAwesomeIcon icon="fa-solid fa-rotate-right" spin />
      </Button>

      <Button onClick={handleSingleRoll} variant="success">
        Single Roll <FontAwesomeIcon icon="fa-solid fa-dice" shake />
      </Button>

      <Button onClick={handleClear} variant="danger">
        Clear <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </Button>

      <IterationController state={state} dispatch={dispatch} />
    </div>
  );
};

export default Controller;

const STYLE = {
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignContent: 'center',
};
