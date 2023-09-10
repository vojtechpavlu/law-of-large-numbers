import { useReducer } from 'react';
import CountsBarChart from '../organism/CountsBarChart';
import { INITIAL_STATE, rollReducer } from '../../utils/diceReducer';
import Controller from '../molecule/Controller';
import { Badge } from 'react-bootstrap';
import Footer from '../atom/Footer';

const MainPage = () => {
  const [state, dispatch] = useReducer(rollReducer, INITIAL_STATE);

  return (
    <div>
      <h1 className="text-center m-3 display-3">Law of large numbers</h1>

      <p className="lead m-4">
        The <strong>Law of large numbers</strong> (<em>LLN</em>) is commonly
        known for it's significance in probability theory, while it guarantees
        that when repeating the experiment for large number of times, the result
        probabilities will match the expected (calculated) relative frequency.
        Simply put -{' '}
        <em>
          the more of trials performed, the probabilities tend to stabilize with
          their expected value more.
        </em>
      </p>

      <p className="lead m-4">
        Here's a little application to experiment with the LLN using repeatedly
        random dice rolling. This application is focusing on randomized
        simulation of rolling the dice while calculating the frequency for each
        of the rolls. Using this setup, we can expect for each of the outcome to
        be approximately <samp>16.667%</samp> per each of the dice sides. Since
        we're using hexagonal dice (dice with 6 sides), the expected probability
        has to equal to <samp>0.1667</samp>.
      </p>

      <p className="lead m-5 text-center">
        You can use either the <Badge bg="primary">Mass roll</Badge> option for
        multiple trials or the <Badge bg="success">Single Roll</Badge> button
        for a single dice roll.
      </p>

      <div style={STYLE}>
        {state.rolls ? <CountsBarChart listOfValues={state.rolls} /> : null}
        <Controller state={state} dispatch={dispatch} />
      </div>

      <p className="lead m-5 text-center">
        Further information about this topic can be found for example at{' '}
        <a
          href="https://en.wikipedia.org/wiki/Law_of_large_numbers"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia.org
        </a>
        .
      </p>

      <Footer />
    </div>
  );
};

export default MainPage;

const STYLE = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
};
