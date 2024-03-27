import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function LineChart() {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Yearly Average Sales & Expense",
    },
    subtitle: {
      text: 'Source: <a href="#" target="_blank">MarketHub.com</a>',
    },
    xAxis: {
      categories: [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
    yAxis: {
      title: {
        text: "Track Record",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "Sales",
        data: [
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
        ],
      },
      {
        name: "Expense",
        data: [
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
          Math.floor(Math.random() * 500000),
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default LineChart;
