import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"


const BarChart = ({listOfValues}) => {

  const counts = aggregate(listOfValues);

  const counts1 = {
    labels: ["1", "2", "3"],
    datasets: [{
      label: "Number of Dice Rolls",
      data: [3, 6, 4]
    }]
  }

  return (
    <div style={{width: "500px"}}>
      <Bar data={counts}/>
    </div>
  );
};

export default BarChart;

const aggregate = (listOfValues) => {
  const countsObject = {}
  const labels = []
  const data = []

  listOfValues.forEach((value) => countsObject[value] = countsObject[value] ? countsObject[value] + 1 : 1);

  Object.keys(countsObject).forEach((key) => {
    labels.push(key)
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