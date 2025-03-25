import { Input, Table, Tag, Form, Select, Button } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import "../../App.css";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
  },
  {
    key: "1",
    name: "John Brown",
    age: "+998883921383",
    address: "10.000 so'm",
    tags: ["active"],
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
    title: "Tel raqam",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "To'lov summasi",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "To'lov summasi",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let icon = "";
          let color = "";
          if (tag === "active") {
            color = "green";
            icon = <CheckCircleOutlined />;
          } else {
            color = "volcano";
            icon = <ExclamationCircleOutlined />;
          }
          return (
            <Tag icon={icon} color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
];
export default function ActiveUsers() {
  const paginationConfig = data.length > 10 ? { pageSize: 10 } : false;

  return (
    <div id="users">
      <div className="mb-3 flex justify-between">
        <div>
          <Form className="flex">
            <Form.Item name="user">
              <Input className="rounded-l-md rounded-r-none md:h-[39px] border-r-0" />
            </Form.Item>
            <Button className="rounded-l-none rounded-r-md md:h-[39px] text-white bg-gradient-to-t from-[#0230C7] to-[#0097FF] ">
              Izlash...
            </Button>
          </Form>
        </div>
        <Select
          options={[
            { value: "active", label: "Active obunachilar" },
            { value: "passive", label: "Obunani bekor qilganlar " },
          ]}
          defaultValue="Foydalanuvchilar"
          className="w-[200px] cursor-pointer"
        />
      </div>
      <div className="users ">
        <Table
          columns={columns}
          dataSource={data}
          pagination={paginationConfig}
        />
      </div>
    </div>
  );
}
