
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const BarChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Yearly Sales Record From 2012 to 2023",
    },
    subtitle: {
      text: 'Source: <a href="#">MarketHub</a>',
    },
    xAxis: {
      type: "category",
    },
    caption: {
      text: "Yearly Average Sales Records.",
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Total Profit",
        data: [
          ["2012", Math.floor(Math.random() * 500000)],
          ["2013", Math.floor(Math.random() * 500000)],
          ["2014", Math.floor(Math.random() * 500000)],
          ["2015", Math.floor(Math.random() * 500000)],
          ["2016", Math.floor(Math.random() * 500000)],
          ["2017", Math.floor(Math.random() * 500000)],
          ["2018", Math.floor(Math.random() * 500000)],
          ["2019", Math.floor(Math.random() * 500000)],
          ["2020", Math.floor(Math.random() * 500000)],
          ["2021", Math.floor(Math.random() * 500000)],
          ["2022", Math.floor(Math.random() * 500000)],
          ["2023", Math.floor(Math.random() * 500000)],
        ],
        dataLabels: {
          enabled: true,
          format: "Rs {point.y:.0f}",
        },
        tooltip: {
          pointFormat: "Total Profit : <b>Rs {point.y}/year</b><br>",
        },
        borderRadius: 3,
        colorByPoint: true,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
