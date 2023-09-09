import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {randomInteger} from "../../utils/randomNumber";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountsBarChart from "../organism/CountsBarChart";


const MainPage = () => {

  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    handleAutomaticRoll()
  }, [])

  const handleSingleRoll = () => {
    const newRolls = [...rolls, randomInteger()]
    setRolls(newRolls)
  }

  const handleClear = () => {
    setRolls([])
  }

  const handleAutomaticRoll = () => {
    const newRolls = [...rolls]

    for (let i = 0; i < 50; i++) {
      newRolls.push(randomInteger())
    }

    setRolls(newRolls)
  }



  return (
    <div>
      <h1 className="text-center m-3">Main Page</h1>

      {rolls ? <CountsBarChart listOfValues={rolls} /> : null}

      <Button onClick={handleAutomaticRoll} variant="warning">Automatic Roll <FontAwesomeIcon icon="fa-solid fa-dice" /></Button>
      <Button onClick={handleSingleRoll} variant="success">Single Roll <FontAwesomeIcon icon="fa-solid fa-dice" /></Button>
      <Button onClick={handleClear} variant="danger">Clear <FontAwesomeIcon icon="fa-solid fa-trash-can" /></Button>
    </div>
  );
};

export default MainPage;