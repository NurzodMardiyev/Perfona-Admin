import { Select } from "antd";
import DailyLineChart from "../../components/reCharts/DailyLineChart";
import "../../App.css";
import WeeklyBarChart from "../../components/reCharts/WeeklyBarChart";
import Metriks from "../../components/metriks_&_testemonials/Metriks";
import TestemonialsStat from "../../components/metriks_&_testemonials/TestemonialsStat";

export default function Dashboard() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div>
      <div className="mt-[50px] md:mt-[0px] container px-[20px] mx-auto dashboard">
        <div className="grid grid-cols-12 w-full md:gap-4  ">
          <div className="md:col-span-8 col-span-12">
            {/* search va title qismi */}
            <div className="grid grid-cols-12 items-center mb-[40px]">
              <div className="flex flex-col md:col-span-8 col-span-6">
                <h1 className="font-semibold md:text-[30px] text-[22px]">
                  Bosh sahifa
                </h1>
                <p className="md:text-[16px] text-[12px] uppercase">
                  Oylik Statistika
                </p>
              </div>
              <div className="md:col-span-4 col-span-6">
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
              <div className="flex flex-col md:col-span-8 col-span-12">
                <div>
                  <h2 className="md:text-[20px] text-[18px] font-medium">
                    Kunlik vaqtni sarf qilish!
                  </h2>
                  <p className="text-[#9A9DA3] text-[13px] md:text-[16px]">
                    Bugun va kecha misolida
                  </p>
                </div>
                <div className="mr-4">
                  <DailyLineChart />
                </div>
              </div>
              <div className="md:col-span-4 col-span-12">
                <div>
                  <h2 className="text-[20px] font-medium">
                    Haftalik vaqt sarf qilish!
                  </h2>
                  <p className="text-[#9A9DA3]">12 Oct - 24 Nov</p>
                </div>
                <WeeklyBarChart />
              </div>
            </div>

            {/* Metriks */}
            <div className="grid grid-cols-12 gap-3 mb-10">
              <Metriks />
              <Metriks />
              <Metriks />
              <Metriks />
            </div>

            {/* chesni odziflar */}
            <div className=" mb-10">
              <TestemonialsStat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
