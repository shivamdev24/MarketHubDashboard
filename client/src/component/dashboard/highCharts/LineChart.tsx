
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function LineChart() {
  const options = {
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
          10000, 12000, 12344, 16434, 17000, 18450, 16000, 15000, 18598, 19563,
          23764, 25798,
        ],
      },
      {
        name: "Expense",
        data: [
          20000, 20593, 19987, 17344, 16834, 14343, 13242, 11043, 10000, 12034,
          11282, 11882,
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
