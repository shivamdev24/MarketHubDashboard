import BarChart from "./highCharts/BarChart";

export default function Sale() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 flex gap-8 flex-col sm:px-6 lg:px-2  mt-10 rounded-md">
        <section>
          <div className="border rounded w-3/4">
            <BarChart />
          </div>
          <div className=""></div>
        </section>
      </div>
    </div>
  );
}
