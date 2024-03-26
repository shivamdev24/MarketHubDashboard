import { useEffect } from "react";
import Highcharts from "highcharts";
import Footer from "../footer";
import LineChart from "./highCharts/LineChart";

const traffic = [
  {
    name: "Google",
    traffice: "40%",
  },
  {
    name: "Instagram",
    traffice: "30%",
  },
  {
    name: "FaceBook Ads",
    traffice: "80%",
  },
  {
    name: "Google Ads",
    traffice: "70%",
  },
  {
    name: "Twitter",
    traffice: "50%",
  },
  {
    name: "Youtube",
    traffice: "60%",
  },
  {
    name: "Pintrest",
    traffice: "60%",
  },
  {
    name: "Whatsapp",
    traffice: "60%",
  },
  {
    name: "Telegram",
    traffice: "60%",
  },
];

const productTable = [
  {
    sr: 1,
    product: "Samsung A17 Lite",
    trending: 9,
    sale: 178,
    stock: "200",
    color: "bg-indigo-500",
    text: "text-white",
  },
  {
    sr: 2,
    product: "Samsung A17 Lite",
    trending: 10,
    sale: 178,
    stock: "200",
    color: "bg-white",
    text: "text-blue-800",
  },
  {
    sr: 3,
    product: "Samsung A17 Lite",
    trending: 7,
    sale: 178,
    stock: "200",
    color: "bg-indigo-500",
    text: "text-white",
  },
  {
    sr: 4,
    product: "Samsung A17 Lite",
    trending: 6,
    sale: 178,
    stock: "200",
    color: "bg-gray-200",
    text: "text-blue-800",
  },
  {
    sr: 5,
    product: "Samsung A17 Lite",
    trending: 4,
    sale: 178,
    stock: "200",
    color: "bg-indigo-500",
    text: "text-white",
  },
  {
    sr: 6,
    product: "Samsung A17 Lite",
    trending: 8,
    sale: 178,
    stock: "200",
    color: "bg-gray-200",
    text: "text-blue-800",
  },
  {
    sr: 7,
    product: "Samsung A17 Lite",
    trending: 3,
    sale: 178,
    stock: "200",
    color: "bg-indigo-500",
    text: "text-white",
  },
  {
    sr: 8,
    product: "Samsung A17 Lite",
    trending: 1,
    sale: 178,
    stock: "200",
    color: "bg-green-600",
    text: "text-white",
  },
  {
    sr: 9,
    product: "Samsung A17 Lite",
    trending: 5,
    sale: 178,
    stock: "200",
    color: "bg-indigo-500",
    text: "text-white",
  },
  {
    sr: 10,
    product: "Samsung A17 Lite",
    trending: 10,
    sale: 178,
    stock: "200",
    color: "bg-gray-200",
    text: "text-blue-800",
  },
];

function Dashboard() {
 

  
  useEffect(() => {
    Highcharts.chart("pieChart", {
      
      title: {
        text: "Best<br>selling<br>of  <br>month",
        align: "center",
        verticalAlign: "middle",
        y: 60,
        style: {
          fontSize: "1.1em",
        },
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: 50,
            style: {
              fontWeight: "bold",
              color: "black",
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ["50%", "75%"],
          size: "100%",
        },
      },
      series: [
        {
          type: "pie",
          name: "Product",
          innerSize: "50%",
          data: [
            ["Mobile", 73.86],
            ["Clothes", 11.97],
            ["Grocery", 5.52],
            ["Laptops", 2.98],
            ["Jewellery", 1.9],
            ["Other", 3.77],
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="  h-screen px-3 pt-10 ">
      <div className="mx-auto max-w-7xl px-2 flex gap-8 flex-col sm:px-6 lg:px-2  rounded-md">
        <section className="flex w-full gap-2 h-48">
          <div className=" w-1/2 rounded flex gap-2">
            <div className=" bg-green-100 w-1/2 rounded flex flex-col px-2 items-center">
              <div className="mt-12">
                <span className="text-xl font-bold text-green-400 ">Sales</span>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold mt-4 text-green-600">
                    25,798
                  </span>
                  <span className="flex items-center mt-4 text-green-900">
                    <span>+30% </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trending-up"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#16a34a"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-72 h-20"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#00cba9"
                    fillOpacity="1"
                    d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,218.7C560,245,640,267,720,256C800,245,880,203,960,160C1040,117,1120,75,1200,48C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </span> */}
            </div>
            <div className=" bg-blue-100 w-1/2 rounded flex flex-col px-2 items-center">
              <div className="mt-12">
                <span className="text-xl font-bold text-blue-400 ">Visits</span>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold mt-4 text-blue-600">
                    54,434
                  </span>
                  <span className="flex items-center mt-4 text-blue-900">
                    <span>+60% </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trending-up"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2563eb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-72 h-20"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#00cba9"
                    fillOpacity="1"
                    d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,218.7C560,245,640,267,720,256C800,245,880,203,960,160C1040,117,1120,75,1200,48C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </span> */}
            </div>
          </div>
          <div className=" flex gap-2 w-1/2">
            <div className=" bg-indigo-100 w-1/2 rounded flex flex-col px-2 items-center">
              <div className="mt-12">
                <span className="text-lg text-indigo-400 font-bold ">
                  New Users
                </span>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold mt-4 text-indigo-600">
                    3,498
                  </span>
                  <span className="flex items-center mt-4 text-indigo-900">
                    <span>+10% </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trending-up"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#4f46e5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-72 h-20"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#00cba9"
                    fillOpacity="1"
                    d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,218.7C560,245,640,267,720,256C800,245,880,203,960,160C1040,117,1120,75,1200,48C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </span> */}
            </div>
            <div className=" bg-yellow-100 w-1/2 rounded flex flex-col px-2 items-center">
              <div className="mt-12">
                <span className="text-lg text-gray-600 font-bold ">
                  Active Users
                </span>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold mt-4 text-gray-800">
                    4,589
                  </span>
                  <span className="flex items-center mt-4 text-gray-900">
                    <span>+9.00% </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trending-up"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#1f2937"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-72 h-20"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#00cba9"
                    fillOpacity="1"
                    d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,218.7C560,245,640,267,720,256C800,245,880,203,960,160C1040,117,1120,75,1200,48C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </span> */}
            </div>
          </div>
        </section>
        <section className="w-full flex gap-2">
          <div className=" h-auto rounded-md w-[76%]">
            {/* #TODO: check this */}
            <div id="lineChart" className="border rounded-md">
              <LineChart/>
            </div>
          </div>
          <div className="  border rounded-md bg-indigo-100 w-1/4">
            <div className="flex flex-col   mt-5 px-10 gap-3">
              <h1 className="text-xl font-bold text-indigo-500">
                Traffic by Websites
              </h1>
              {traffic.map((props) => (
                <span className="flex items-center gap-10" key={props.name}>
                  <span className="text-md font-semibold text-indigo-700">
                    {props.name}
                  </span>
                  <span className="text-indigo-900 font-semibold">
                    {props.traffice}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex gap-2 ">
          <div className="w-1/2 rounded-md overflow-hidden border border-indigo-500">
            <h1 className="text-2xl px-4 font-bold py-2 text-indigo-500">
              Product List
            </h1>
            <div className=" h-96 overflow-auto p-2">
              <table className="border w-full rounded">
                <tr className="text-indigo-500">
                  <th className="border border-gray-900 p-2 px-4">Sr</th>
                  <th className="border border-gray-900 p-2 px-4">
                    Product Name
                  </th>
                  <th className="border border-gray-900 p-2 px-4">Sale</th>
                  <th className="border border-gray-900 p-2 px-4">Trending</th>
                  <th className="border border-gray-900 p-2 px-4">Stock</th>
                </tr>
                {productTable.map((props) => (
                  // <tr key={props.sr} className={`${props.color} ${props.text}`}>
                  <tr key={props.sr}>
                    <td className="border border-gray-900 p-2 px-4 text-center">
                      {" "}
                      {props.sr}{" "}
                    </td>
                    <td className="border border-gray-900 p-2 px-4 text-center">
                      {" "}
                      {props.product}{" "}
                    </td>
                    <td className="border border-gray-900 p-2 px-4 text-center">
                      {" "}
                      {props.sale}{" "}
                    </td>
                    <td className="border border-gray-900 p-2 px-4 text-center">
                      {" "}
                      {props.trending}{" "}
                    </td>
                    <td className="border border-gray-900 p-2 px-4 text-center">
                      {" "}
                      {props.stock}{" "}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className="w-1/2 rounded-md border border-blue-500  h-auto">
            <div id="pieChart"></div>
          </div>
        </section>
        <section>
          <div>
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
