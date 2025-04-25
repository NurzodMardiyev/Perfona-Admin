import { IoIosTrendingUp } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Select, Table } from "antd";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import WeeklyBarChart from "../../components/reCharts/WeeklyBarChart";
const dataChart = [
  {
    name: "unknow",
    uv: 60,
    pv: 4800,
    fill: "#0189F8",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    date: "+998883923383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "2",
    name: "Jim Green",
    date: "+998884921583",
    amount: "10.000 so'm",
    account: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "2",
    name: "Jim Green",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "3",
    name: "Joe Black",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    date: "+998883921383",
    amount: "10.000 so'm",
    account: ["active"],
  },
];

const columns = [
  {
    title: "No",
    dataIndex: "number",
    render: (_, __, index) => <a className="font-medium">{index + 1}</a>,
  },
  {
    title: "Ism",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Sana/vaqt",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Acoount",
    dataIndex: "account",
    key: "account",
  },

  {
    title: "To'lov summasi",
    dataIndex: "amount",
    key: "amount",
  },
];

const optionsMonth = [
  { value: "yanvar", label: "Yanvar" },
  { value: "fevral", label: "Fevral " },
];

export default function Transfers() {
  const paginationConfig = data.length > 10 ? { pageSize: 10 } : false;
  return (
    <div>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-8">
          {/* Headerni malumotlari va card ko'rinishi */}
          <div className="grid grid-cols-7 gap-[30px]">
            <div className="balans col-span-3 ">
              <div>
                <h2 className="md:text-[24px] font-medium">Card hisoboti</h2>
                <p className="text-[#8B8B8B] md:text-[14px]">
                  Bu yerda siz hisobotlarni nazorat qila olasiz
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 mt-2">
                <h3 className="text-[20px] font-medium">Balans</h3>
                <p className="text-[12px]">Feb, 2025</p>

                <p className="md:text-[30px] font-semibold my-2">$345075</p>
                <p className="flex items-center gap-3">
                  <span className="text-white h-[24px]  flex gap-1 px-2 items-center justify-center text-[14px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                    <IoIosTrendingUp />{" "}
                    <span className="text-[10px]">+5.2%</span>
                  </span>
                  <span className="flex text-[12px]">
                    Oldingi oyga nisbatan
                  </span>
                </p>
              </div>
            </div>
            <div className="card-img col-span-4 flex  items-stretch">
              <div className="p-6 rounded-[20px] bg-gradient-to-t from-[#0230C7] to-[#0097FF] text-white w-full h-full flex flex-col justify-between">
                <p className="text-[30px] md:pt-[20px]">9860 0101 3212 6534</p>
                <div className="flex justify-between w-full items-end">
                  <div>
                    <p>John Brown</p>
                    <p>03/28</p>
                  </div>
                  <div className="text-[18px]">Humo</div>
                </div>
              </div>
            </div>
          </div>

          {/* sof daromat va investitsiya samaradorligi */}
          <div className="grid grid-cols-8 gap-[30px] my-[30px]">
            <div className="col-span-3 p-4 rounded-xl bg-slate-100">
              <h3 className="text-[20px] font-medium">Sof daromad</h3>
              <p className="md:text-[32px] font-semibold my-2">$ 845,075</p>
              <p className="flex items-center gap-3 justify-between">
                <span className="flex text-[12px]">Taxminiy</span>
                <span className="text-white h-[24px]  flex gap-1 px-2 items-center justify-center text-[14px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                  <IoIosTrendingUp />
                  <span className="text-[10px]">+8.2%</span>
                </span>
              </p>
            </div>
            <div className="col-span-5 p-4 rounded-xl bg-slate-100 flex justify-between gap-[30px]">
              <div className="flex flex-col justify-between">
                <h3 className="text-[18px] font-medium">
                  Ivestitsiya <br /> samaradorligi
                </h3>
                <GiWallet className="text-[36px]" />
              </div>
              <div className="flex flex-col flex-1 ">
                <h3 className="text-[18px] font-medium">Umumiy balans</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[20px] h-[20px] bg-blue-600 rounded-full block "></div>
                    <p>Yopiq kurs</p>
                  </div>
                  <p>(60%)</p>
                </div>
              </div>
              <div style={{ height: 130, width: 130 }} className="">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%" // Aylanani kattalashtirish
                    outerRadius="100%" // To‘liq dumaloq qilish
                    startAngle={90} // Boshlanish nuqtasi
                    endAngle={-60 - dataChart[0].uv}
                    barSize={30} // Qalinligi
                    data={dataChart} // 60% progress
                  >
                    <RadialBar
                      minAngle={15}
                      label={{ position: "center", fill: "#000" }}
                      background
                      clockWise
                      dataKey="uv"
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Oxirgi to'lovlar ro'yhati */}
          <div>
            <div className="flex justify-between mb-[20px]">
              <h3 className="md:text-[24px] font-medium">
                Oxirgi Toʻlovlar roʻyhati
              </h3>
              <Select
                options={optionsMonth}
                defaultValue="Oyma-oy saralang"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="transfers">
              <Table
                columns={columns}
                dataSource={data}
                pagination={paginationConfig}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="flex bg-slate-100 p-7 rounded-xl justify-between min-h-[130px] items-stretch mb-[30px]">
            <div className="flex flex-col justify-between ">
              <div>
                <h3 className="font-medium text-[20px]">Kirim</h3>
              </div>
              <FaArrowUpLong className="text-green-500" />
            </div>
            <h2 className="text-[30px] font-semibold h-full items-center flex my-auto">
              $ 32.000
            </h2>
            <div className="flex flex-col justify-between">
              <span className="text-white h-[24px]  flex gap-1 px-2 items-center justify-center text-[14px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                <IoIosTrendingUp /> <span className="text-[10px]">+5.2%</span>
              </span>
              <p>Oxirgi Oy</p>
            </div>
          </div>
          <div className="flex bg-slate-100 p-7 rounded-xl justify-between min-h-[130px] items-stretch mb-[30px]">
            <div className="flex flex-col justify-between ">
              <div>
                <h3 className="font-medium text-[20px]">Chiqim</h3>
              </div>
              <FaArrowDownLong className="text-red-500" />
            </div>
            <h2 className="text-[30px] font-semibold h-full items-center flex my-auto">
              $ 32.000
            </h2>
            <div className="flex flex-col justify-between">
              <span className="text-white h-[24px]  flex gap-1 px-2 items-center justify-center text-[14px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                <IoIosTrendingUp /> <span className="text-[10px]">+5.2%</span>
              </span>
              <p>Oxirgi Oy</p>
            </div>
          </div>
          <WeeklyBarChart />
        </div>
      </div>
    </div>
  );
}
