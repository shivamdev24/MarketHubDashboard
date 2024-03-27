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

const productList = [
  {
    sr: 1,
    ProductName: "laptop",
    StockAvailable: "2314",
    SoldProduct: "1278",
    TotalSale: "330,627",
    ActualPrice: "258",
  },
  {
    sr: 2,
    ProductName: "laptop",
    StockAvailable: "2534",
    SoldProduct: "1547",
    TotalSale: "400,719",
    ActualPrice: "259",
  },
  {
    sr: 3,
    ProductName: "mobile",
    StockAvailable: "2768",
    SoldProduct: "1863",
    TotalSale: "482,262",
    ActualPrice: "259",
  },
  {
    sr: 4,
    ProductName: "electronic gadget",
    StockAvailable: "2912",
    SoldProduct: "2191",
    TotalSale: "567,469",
    ActualPrice: "259",
  },
  {
    sr: 5,
    ProductName: "laptop",
    StockAvailable: "3121",
    SoldProduct: "2456",
    TotalSale: "634,864",
    ActualPrice: "258",
  },
  {
    sr: 6,
    ProductName: "monitor",
    StockAvailable: "3357",
    SoldProduct: "2743",
    TotalSale: "710,207",
    ActualPrice: "259",
  },
  {
    sr: 7,
    ProductName: "monitor",
    StockAvailable: "3582",
    SoldProduct: "3038",
    TotalSale: "784,812",
    ActualPrice: "259",
  },
  {
    sr: 8,
    ProductName: "laptop",
    StockAvailable: "3214",
    SoldProduct: "1378",
    TotalSale: "330,727",
    ActualPrice: "258",
  },
  {
    sr: 9,
    ProductName: "mobile",
    StockAvailable: "2500",
    SoldProduct: "1156",
    TotalSale: "300,656",
    ActualPrice: "260",
  },
  {
    sr: 10,
    ProductName: "electronic gadget",
    StockAvailable: "2763",
    SoldProduct: "1892",
    TotalSale: "380,727",
    ActualPrice: "201",
  },
  {
    sr: 11,
    ProductName: "monitor",
    StockAvailable: "2892",
    SoldProduct: "2431",
    TotalSale: "470,607",
    ActualPrice: "197",
  },
  {
    sr: 12,
    ProductName: "laptop",
    StockAvailable: "3001",
    SoldProduct: "2138",
    TotalSale: "450,827",
    ActualPrice: "211",
  },
  {
    sr: 13,
    ProductName: "monitor",
    StockAvailable: "3145",
    SoldProduct: "2767",
    TotalSale: "520,719",
    ActualPrice: "189",
  },
  {
    sr: 14,
    ProductName: "mobile",
    StockAvailable: "3421",
    SoldProduct: "2956",
    TotalSale: "590,205",
    ActualPrice: "199",
  },
  {
    sr: 15,
    ProductName: "electronic gadget",
    StockAvailable: "3671",
    SoldProduct: "3301",
    TotalSale: "620,507",
    ActualPrice: "187",
  },
  {
    sr: 16,
    ProductName: "laptop",
    StockAvailable: "3889",
    SoldProduct: "3512",
    TotalSale: "705,912",
    ActualPrice: "201",
  },
  {
    sr: 17,
    ProductName: "mobile",
    StockAvailable: "4132",
    SoldProduct: "3897",
    TotalSale: "800,916",
    ActualPrice: "206",
  },
  {
    sr: 18,
    ProductName: "mobile",
    StockAvailable: "4312",
    SoldProduct: "4232",
    TotalSale: "870,627",
    ActualPrice: "205",
  },
  {
    sr: 19,
    ProductName: "monitor",
    StockAvailable: "4512",
    SoldProduct: "4567",
    TotalSale: "920,737",
    ActualPrice: "201",
  },
  {
    sr: 20,
    ProductName: "monitor",
    StockAvailable: "4712",
    SoldProduct: "4921",
    TotalSale: "960,827",
    ActualPrice: "196",
  },
  {
    sr: 21,
    ProductName: "electronic gadget",
    StockAvailable: "4923",
    SoldProduct: "5124",
    TotalSale: "1,005,347",
    ActualPrice: "196",
  },
  {
    sr: 22,
    ProductName: "monitor",
    StockAvailable: "5111",
    SoldProduct: "5323",
    TotalSale: "1,055,816",
    ActualPrice: "198",
  },
  {
    sr: 23,
    ProductName: "laptop",
    StockAvailable: "5322",
    SoldProduct: "5546",
    TotalSale: "1,100,716",
    ActualPrice: "198",
  },
  {
    sr: 24,
    ProductName: "electronic gadget",
    StockAvailable: "5523",
    SoldProduct: "5782",
    TotalSale: "1,150,607",
    ActualPrice: "199",
  },
  {
    sr: 25,
    ProductName: "mobile",
    StockAvailable: "5712",
    SoldProduct: "6054",
    TotalSale: "1,200,916",
    ActualPrice: "198",
  },
  {
    sr: 26,
    ProductName: "mobile",
    StockAvailable: "5892",
    SoldProduct: "6356",
    TotalSale: "1,250,727",
    ActualPrice: "197",
  },
  {
    sr: 27,
    ProductName: "electronic gadget",
    StockAvailable: "6012",
    SoldProduct: "6677",
    TotalSale: "1,300,819",
    ActualPrice: "195",
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
            ["Mobile", 8488840],
            ["Monitor", 3165443],
            ["Electronic Gadgets", 2376962],
            ["Laptops", 11087779],
            ["Other", 4587779],
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
              <LineChart />
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
              <table className="w-full">
                <tr>
                  <th className="border">sr</th>
                  <th className="border">Product Name</th>
                  <th className="border">Stock Available</th>
                  <th className="border">Sold Product</th>
                  <th className="border">Total Sale</th>
                  <th className="border">Actual Price</th>
                </tr>
                {productList.map((props) => (
                  <tr key={props.sr}>
                    <td className="text-center p-1 border text-blue-700">
                      {props.sr}
                    </td>
                    <td className="text-center p-1 border text-blue-700">
                      {props.ProductName}
                    </td>
                    <td className="text-center p-1 border text-blue-700">
                      {props.StockAvailable}
                    </td>
                    <td className="text-center p-1 border text-indigo-500">
                      {props.SoldProduct}
                    </td>
                    <td className="text-center p-1 border text-gray-800 font-semibold">
                      Rs. {props.TotalSale}
                    </td>
                    <td className="text-center p-1 border text-gray-900">
                      Rs. {props.ActualPrice}
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
