import {useState} from "react";
import {Button} from "react-bootstrap";
import {randomInteger} from "../../utils/randomNumber";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BarChart from "../organism/BarChart";


const MainPage = () => {

  const [rolls, setRolls] = useState([1, 5, 6]);

  const handleRoll = () => {
    const newRolls = [...rolls, randomInteger()]
    setRolls(newRolls)
  }

  const handleClear = () => {
    setRolls([])
  }

  const dice = {
    "1": <FontAwesomeIcon icon="fa-solid fa-dice-one" />,
    "2": <FontAwesomeIcon icon="fa-solid fa-dice-two" />,
    "3": <FontAwesomeIcon icon="fa-solid fa-dice-three" />,
    "4": <FontAwesomeIcon icon="fa-solid fa-dice-four" />,
    "5": <FontAwesomeIcon icon="fa-solid fa-dice-five" />,
    "6": <FontAwesomeIcon icon="fa-solid fa-dice-six" />
  }

  return (
    <div>
      <h1 className="text-center m-3">Main Page</h1>

      {rolls ? <BarChart listOfValues={rolls} /> : null}

      <Button onClick={handleRoll} variant="success">Roll <FontAwesomeIcon icon="fa-solid fa-dice" /></Button>
      <Button onClick={handleClear} variant="danger">Clear <FontAwesomeIcon icon="fa-solid fa-trash-can" /></Button>

      <pre>{JSON.stringify(rolls)}</pre>

      {Object.keys(dice).map((k) => <p key={k}>{k} {dice[k]}</p>)}
    </div>
  );
};

export default MainPage;