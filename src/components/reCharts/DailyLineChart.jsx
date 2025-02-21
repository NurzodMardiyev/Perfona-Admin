import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", today: 6, yesterday: 4 },
  { month: "Feb", today: 7, yesterday: 5 },
  { month: "Mar", today: 6, yesterday: 6 },
  { month: "Apr", today: 5, yesterday: 7 },
  { month: "May", today: 8, yesterday: 6 },
  { month: "Jun", today: 7, yesterday: 5 },
  { month: "Jul", today: 9, yesterday: 6 },
  { month: "Aug", today: 6, yesterday: 7 },
  { month: "Sep", today: 7, yesterday: 6 },
  { month: "Oct", today: 5, yesterday: 4 },
  { month: "Nov", today: 8, yesterday: 5 },
  { month: "Dec", today: 7, yesterday: 6 },
];

export default function DailyLineChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="4"
                floodColor="rgba(90, 86, 224, 0.5)"
              />
            </filter>
          </defs>

          <CartesianGrid vertical={false} horizontal={false} />

          <XAxis
            dataKey="month"
            stroke="#8884d8"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ dx: -30 }}
            stroke="#8884d8"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{
              stroke: "#4ecfc231",
              strokeWidth: 40,
            }}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              border: "none",
            }}
            labelStyle={{ color: "#8884d8" }}
          />
          <Line
            type="monotone"
            dataKey="today"
            stroke="#5A56E0"
            strokeWidth={3}
            filter="url(#shadow)" // Stroke shadow qo'shis
            dot={false}
            activeDot={{ r: 6, fill: "#5A56E0" }}
          />
          <Line
            type="monotone"
            dataKey="yesterday"
            stroke="#4FD1C5"
            strokeWidth={3}
            filter="url(#shadow)" // Stroke shadow qo'shish
            dot={false}
            activeDot={{ r: 6, fill: "#4FD1C5" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
