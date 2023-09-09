import {useReducer} from "react";
import CountsBarChart from "../organism/CountsBarChart";
import {INITIAL_STATE, rollReducer} from "../../utils/diceReducer";
import Controller from "../molecule/Controller";
import {Badge} from "react-bootstrap";
import Footer from "../atom/Footer";


const MainPage = () => {

  const [state, dispatch] = useReducer(rollReducer, INITIAL_STATE);

  return (
    <div>
      <h1 className="text-center m-3 display-3">
        Law of large numbers
      </h1>

      <p className="lead m-3">
        Here's a little application to experiment with the Law of large numbers using randomly rolling dice.
      </p>

      <p className="lead m-3">
        The law itself is commonly known for it's significance in probability theory, where it guarantees that
        when repeating the experiment for large number of times, the result probabilities will match
        the expected (calculated) relative frequency.
      </p>

      <p className="lead m-3">
        This application is focusing on randomized simulation of rolling the dice while calculating the frequency
        for each of the rolls. You can use either the <Badge bg="primary">Mass roll</Badge> option for multiple trials
        or the <Badge bg="success">Single Roll</Badge> button for a single dice roll.
      </p>

      <div style={STYLE}>
        {state.rolls ? <CountsBarChart listOfValues={state.rolls}/> : null}
        <Controller state={state} dispatch={dispatch}/>
      </div>


      <Footer />
    </div>
  );
};

export default MainPage;

const STYLE = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "30px",
  alignItems: "center",
  justifyContent: "center"
}