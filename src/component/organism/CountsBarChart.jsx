import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import {mapToDiceIcon} from "../../utils/iconMapper";


const CountsBarChart = ({listOfValues}) => {

  const counts = aggregate(listOfValues);

  ChartJS.defaults.font.family = "'FontAwesome', 'Font Awesome 6 Free', 'Helvetica', 'Helvetica Neue'"

  return (
    <div className="m-2" style={CONTAINER_STYLE}>
      <Bar data={counts} options={options}/>
    </div>
  );
};

export default CountsBarChart;

const CONTAINER_STYLE = {
  minWidth: "500px",
  height: "300px"
}

const options = {
  maintainAspectRatio : false,
  scales: {
    x: {
      ticks: {
        font: {
          size: 35
        }
      }
    }
  },
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        return String.fromCharCode(parseInt(value, 16));
      }
    }
  }
}

const aggregate = (listOfValues) => {
  const countsObject = {}
  const labels = []
  const data = []

  listOfValues.forEach((value) => countsObject[value] = countsObject[value] ? countsObject[value] + 1 : 1);

  Object.keys(countsObject).forEach((key) => {
    labels.push(mapToDiceIcon(key).code)
    data.push(countsObject[key])
  })

  return {
    labels,
    datasets: [{
      label: "Number of Dice Rolls",
      data
    }]
  };
}