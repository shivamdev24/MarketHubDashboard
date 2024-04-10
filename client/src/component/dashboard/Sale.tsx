import ProductList from "./ProductList";
import BarChart from "./highCharts/BarChart";


const countryList = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        className="rounded-full"
      >
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <g transform="translate(256 256) scale(3.41333)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="in-d">
            <g id="in-c">
              <g id="in-b">
                <g id="in-a" fill="#008">
                  <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5L.6 7 0 2l-.6 5z"></path>
                </g>
                <use
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                  xlinkHref="#in-a"
                ></use>
              </g>
              <use
                width="100%"
                height="100%"
                transform="rotate(30)"
                xlinkHref="#in-b"
              ></use>
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(60)"
              xlinkHref="#in-c"
            ></use>
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(120)"
            xlinkHref="#in-d"
          ></use>
          <use
            width="100%"
            height="100%"
            transform="rotate(-120)"
            xlinkHref="#in-d"
          ></use>
        </g>
      </svg>
    ),
    profit: (
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
    ),
    name: "India",
    sale: Math.floor(Math.random() * 500000),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        className="rounded-full"
      >
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <g transform="translate(256 256) scale(3.41333)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="in-d">
            <g id="in-c">
              <g id="in-b">
                <g id="in-a" fill="#008">
                  <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5L.6 7 0 2l-.6 5z"></path>
                </g>
                <use
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                  xlinkHref="#in-a"
                ></use>
              </g>
              <use
                width="100%"
                height="100%"
                transform="rotate(30)"
                xlinkHref="#in-b"
              ></use>
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(60)"
              xlinkHref="#in-c"
            ></use>
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(120)"
            xlinkHref="#in-d"
          ></use>
          <use
            width="100%"
            height="100%"
            transform="rotate(-120)"
            xlinkHref="#in-d"
          ></use>
        </g>
      </svg>
    ),
    profit: (
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
    ),
    name: "India",
    sale: Math.floor(Math.random() * 500000),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        className="rounded-full"
      >
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <g transform="translate(256 256) scale(3.41333)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="in-d">
            <g id="in-c">
              <g id="in-b">
                <g id="in-a" fill="#008">
                  <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5L.6 7 0 2l-.6 5z"></path>
                </g>
                <use
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                  xlinkHref="#in-a"
                ></use>
              </g>
              <use
                width="100%"
                height="100%"
                transform="rotate(30)"
                xlinkHref="#in-b"
              ></use>
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(60)"
              xlinkHref="#in-c"
            ></use>
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(120)"
            xlinkHref="#in-d"
          ></use>
          <use
            width="100%"
            height="100%"
            transform="rotate(-120)"
            xlinkHref="#in-d"
          ></use>
        </g>
      </svg>
    ),
    profit: (
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
    ),
    name: "India",
    sale: Math.floor(Math.random() * 500000),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        className="rounded-full"
      >
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <g transform="translate(256 256) scale(3.41333)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="in-d">
            <g id="in-c">
              <g id="in-b">
                <g id="in-a" fill="#008">
                  <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5L.6 7 0 2l-.6 5z"></path>
                </g>
                <use
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                  xlinkHref="#in-a"
                ></use>
              </g>
              <use
                width="100%"
                height="100%"
                transform="rotate(30)"
                xlinkHref="#in-b"
              ></use>
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(60)"
              xlinkHref="#in-c"
            ></use>
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(120)"
            xlinkHref="#in-d"
          ></use>
          <use
            width="100%"
            height="100%"
            transform="rotate(-120)"
            xlinkHref="#in-d"
          ></use>
        </g>
      </svg>
    ),
    profit: (
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
    ),
    name: "India",
    sale: Math.floor(Math.random() * 500000),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        className="rounded-full"
      >
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <g transform="translate(256 256) scale(3.41333)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="in-d">
            <g id="in-c">
              <g id="in-b">
                <g id="in-a" fill="#008">
                  <circle r="0.9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5L.6 7 0 2l-.6 5z"></path>
                </g>
                <use
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                  xlinkHref="#in-a"
                ></use>
              </g>
              <use
                width="100%"
                height="100%"
                transform="rotate(30)"
                xlinkHref="#in-b"
              ></use>
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(60)"
              xlinkHref="#in-c"
            ></use>
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(120)"
            xlinkHref="#in-d"
          ></use>
          <use
            width="100%"
            height="100%"
            transform="rotate(-120)"
            xlinkHref="#in-d"
          ></use>
        </g>
      </svg>
    ),
    profit: (
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
    ),
    name: "India",
    sale: Math.floor(Math.random() * 500000),
  },
];

export default function Sale() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 flex gap-8 flex-col sm:px-6 lg:px-2  mt-10 rounded-md">
        <section className="flex  gap-2">
          <div className="border rounded w-3/4">
            <BarChart />
          </div>
          <div className="border rounded border-indigo-500 w-1/4">
            <div className="flex flex-col text-center pl-4 pt-4 ">
              <span className="text-3xl font-bold flex flex-start text-indigo-500" >Sales By Countries</span>
              <span className="text-xl font-semibold flex flex-start text-gray-500" >Monthly Sales Overview</span>
            </div>
            <div className="flex flex-col gap-2 mt-6 p-1">
              {countryList.map((props) => (
                <div className="flex justify-between items-center px-4 hover:bg-gray-200 rounded">
                  <span className="h-10 w-10 ">{props.svg}</span>
                  <div className="flex flex-col leading-1">
                    <span>Rs.{props.sale}</span>
                    <span className="text-gray-500">{props.name}</span>
                  </div>
                  <div>
{props.profit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <ProductList/>
        </section>
      </div>
    </div>
  );
}
