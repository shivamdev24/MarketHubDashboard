import Footer from "../footer";
import ProductChart from "./highCharts/ProductChart"

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

function Product() {
  return (
    <div className="  h-screen px-3 pt-10 ">
      <div className="mx-auto max-w-7xl px-2 flex gap-8 flex-col sm:px-6 lg:px-2  rounded-md">
        <section className="flex gap-2">
          <div className="w-1/2 border rounded-md border-indigo-500 shadow-md shadow-indigo-100">
            {" "}
            <ProductChart />
          </div>
          <div className="w-1/2  rounded-md flex flex-col gap-2 p-1 ">
            <h1 className="text-xl font-bold text-indigo-500 text-center underline">
              Yearly Sale of trending Product
            </h1>
            <div className="flex gap-2">
              <div className="border rounded text-indigo-800 hover:bg-indigo-800 duration-500 hover:text-white bg-indigo-200 w-1/2 h-48 text-center flex flex-col justify-center items-center">
                <span className="text-xl font-bold ">SAMSUNG A17 LITE</span>
                <span className="text-3xl font-bold ">
                  +{[Math.floor(Math.random() * 500000)]}
                </span>
              </div>
              <div className="border rounded text-green-800 hover:bg-green-800 duration-500 hover:text-white bg-green-200 w-1/2 h-48 text-center flex flex-col justify-center items-center">
                <span className="text-xl font-bold ">SAMSUNG A17 LITE</span>
                <span className="text-3xl font-bold ">
                  +{[Math.floor(Math.random() * 500000)]}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="border rounded text-blue-600 hover:bg-blue-600 duration-500 hover:text-white bg-blue-200 w-1/2 h-48 text-center flex flex-col justify-center items-center">
                <span className="text-xl font-bold ">SAMSUNG A17 LITE</span>
                <span className="text-3xl font-bold ">
                  +{[Math.floor(Math.random() * 500000)]}
                </span>
              </div>
              <div className="border rounded text-gray-900 hover:bg-yellow-400 duration-500 hover:text-black bg-yellow-200 w-1/2 h-48 text-center flex flex-col justify-center items-center">
                <span className="text-xl font-bold ">SAMSUNG A17 LITE</span>
                <span className="text-3xl font-bold ">
                  +{[Math.floor(Math.random() * 500000)]}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
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
                  {props.TotalSale}
                </td>
                <td className="text-center p-1 border text-gray-900">
                  {props.ActualPrice}
                </td>
              </tr>
            ))}
          </table>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Product