import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PieChart() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Yearly Average Sales & Expense",
    },
    subtitle: {
      text: 'Source: <a href="#" target="_blank">MarketHub.com</a>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Trending Product ",
        colorByPoint: true,
        data: [
          { name: "HP Pavilion Laptop", y: 310 },
          { name: "Samsung Mobile A17 Lite", y: 300 },
          { name: "iPhone 9", y: 100 },
          { name: "Electronic Gadgets", y: 100 },
          { name: "Monitor", y: 90 },
          { name: "Other", y: 200 },
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

export default PieChart;
