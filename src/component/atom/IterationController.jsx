import { Button } from 'react-bootstrap';
import { ACTIONS } from '../../utils/diceReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IterationController = ({ state, dispatch }) => {
  const handleDecrease = () => {
    if (state.iterations > 1) {
      dispatch({
        type: ACTIONS.SET_ITERATIONS,
        payload: { iterations: Math.floor(state.iterations / 10) },
      });
    }
  };

  const handleIncrease = () => {
    if (state.iterations <= 100_000) {
      dispatch({
        type: ACTIONS.SET_ITERATIONS,
        payload: { iterations: state.iterations * 10 },
      });
    }
  };

  return (
    <div style={STYLE}>
      <div>
        <Button
          className="m-2"
          variant="outline-dark"
          onClick={handleDecrease}
          disabled={state.iterations <= 1}
        >
          <span className="lead">
            <strong>-</strong>
          </span>
        </Button>

        <Button
          className="m-2"
          variant="outline-dark"
          onClick={handleIncrease}
          disabled={state.iterations >= 100_000}
        >
          <span className="lead">
            <strong>+</strong>
          </span>
        </Button>
      </div>

      <div>
        <span className="lead">
          {state.iterations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </span>
      </div>
    </div>
  );
};

export default IterationController;

const STYLE = {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'space-between',
};
