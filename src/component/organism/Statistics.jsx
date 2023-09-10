import {mapToDiceIcon} from "../../utils/iconMapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Statistics = ({listOfValues}) => {
  return (
    <div style={STYLE}>
      <table style={{width: "100%"}}>
        <tr>
          <td className="lead">Total number of rolls</td>
          <td>{formatNumber(listOfValues.length)}</td>
        </tr>

        <hr />

        {mapProbabilitiesTableRecords(listOfValues)}
      </table>

    </div>
  );
};

export default Statistics;

const STYLE = {
  width: "400px"
}

const group = (listOfValues) => {
  const result = {}

  listOfValues.forEach(
    (value) =>
      (result[value] = result[value] ? result[value] + 1 : 1)
  )

  return result;
}

const probabilityPerResult = (listOfValues) => {
  const length = listOfValues.length
  const grouped = group(listOfValues)
  const probabilities = {}

  Object.keys(grouped).forEach((key) => probabilities[key] = grouped[key] / length)

  return probabilities
}

const roundToPlaces = (num, places = 5) => {
  return num.toFixed(places)
}

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}


const mapProbabilitiesTableRecords = (listOfValues) => {
  const groupedProbabilities = probabilityPerResult(listOfValues);

  return Object.keys(groupedProbabilities).map(
    (key) => {
      const icon = mapToDiceIcon(key).icon
      const prob = groupedProbabilities[key];

      return (
        <tr>
          <td className="lead text-muted">
            Probability of <FontAwesomeIcon icon={icon} />
          </td>
          <td>{roundToPlaces(prob)}</td>
        </tr>
      )
    }
  )
}