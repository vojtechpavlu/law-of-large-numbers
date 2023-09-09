import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {mapToDiceIcon} from "../../utils/iconMapper";


const CountsBarChart = ({listOfValues}) => {

  const counts = aggregate(listOfValues);

  ChartJS.defaults.font.family = "'FontAwesome', 'Font Awesome 6 Free', 'Helvetica', 'Helvetica Neue'"

  return (
    <div className="m-2">
      <Bar data={counts} options={options}/>
    </div>
  );
};

export default CountsBarChart;

const options = {
  scales: {
    x: {
      ticks: {
        font: {
          size: 40
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
      data,
    }]
  };
}