import { Select } from "antd";
import DailyLineChart from "../../components/reCharts/DailyLineChart";
import "../../App.css";
import WeeklyBarChart from "../../components/reCharts/WeeklyBarChart";

export default function Dashboard() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div>
      <div className="container px-[20px] mx-auto dashboard">
        <div className="grid grid-cols-12 w-full gap-4  ">
          <div className="col-span-8 ">
            {/* search va title qismi */}
            <div className="grid grid-cols-12 items-center mb-[40px]">
              <div className="flex flex-col col-span-8">
                <h1 className="font-semibold text-[30px]">Bosh sahifa</h1>
                <p className="text-[16px] uppercase">Oylik Statistika</p>
              </div>
              <div className="col-span-4">
                <Select
                  showSearch
                  placeholder="App turlari"
                  optionFilterProp="label"
                  onChange={onChange}
                  onSearch={onSearch}
                  className="w-full"
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
            </div>
            {/* haftalik bychart linechart */}
            <div className="grid grid-cols-12 items-center">
              <div className="flex flex-col col-span-8 ">
                <div>
                  <h2 className="text-[20px] font-medium">
                    Kunlik vaqtni sarf qilish!
                  </h2>
                  <p className="text-[#9A9DA3]">Bugun va kecha misolida</p>
                </div>
                <DailyLineChart />
              </div>
              <div className="col-span-4 ">
                <div>
                  <h2 className="text-[20px] font-medium">
                    Haftalik vaqt sarf qilish!
                  </h2>
                  <p className="text-[#9A9DA3]">12 Oct - 24 Nov</p>
                </div>
                <WeeklyBarChart />
              </div>
            </div>
          </div>
          <div className="col-span-4 border h-20 ">oal</div>
        </div>
      </div>
    </div>
  );
}
