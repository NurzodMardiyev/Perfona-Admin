import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "12 Oct", value: 25000 },
  { name: "19 Oct", value: 27000 },
  { name: "26 Oct", value: 24000 },
  { name: "03 Nov", value: 28170 },
  { name: "10 Nov", value: 26000 },
  { name: "17 Nov", value: 25500 },
  { name: "24 Nov", value: 24500 },
];

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      {/* Shadow uchun birinchi bar */}
      <rect
        x={x + 0} // Soyani o'ngga va pastga biroz suramiz
        y={y + 4}
        width={width}
        height={height}
        fill="rgba(0, 0, 0, 0.4)" // Soyaning rangi va tarqatilishi
        rx={5} // Yumuq burchaklar
        ry={5}
        style={{ filter: "blur(4px)" }}
      />
      {/* Asl bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stdDeviation="4"
        fill={fill}
        rx={5} // Yumuq burchaklar
        ry={5}
      />
    </g>
  );
};

const colors = ["#51459E", "#84E8F4"];
export default function WeeklyBarChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: -0 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#8884d8" }}
            axisLine={false}
            tickLine={false}
          />
          {/* <CartesianGrid /> */}
          <Tooltip cursor={{ fill: "#4ecfc231" }} />
          <Bar
            dataKey="value"
            barSize={25}
            radius={[5, 5, 5, 5]}
            fill={colors[0]}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex justify-between  text-gray-500 text-sm h-[100px] ">
        <div className="flex gap-2 items-center">
          <div className="w-[60px] h-[40px] rounded-md bg-[#F2F7FF]"></div>
          <div className="flex flex-col">
            <span>Minimum</span>
            <strong>24,170</strong>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[60px] h-[40px] rounded-md bg-[#F2F7FF]"></div>
          <div className="flex flex-col">
            <span>Maximum</span>
            <strong>28,170</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
