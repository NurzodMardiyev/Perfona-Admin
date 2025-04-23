import { Col, Input, Form, Flex, Button, Space, Steps } from "antd";
import "../../App.css";
import { message, Upload, Select } from "antd";
import { TiUpload } from "react-icons/ti";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import axios from "axios";
const { Dragger } = Upload;
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PerfonaAdmin } from "../../feature/queries";
import SecureStorage from "react-secure-storage";
import { ModalContext } from "../../context/ContextApi";

export default function SellectChannelTwoStep() {
  const { channels } = useContext(ModalContext);

  const queryClient = useQueryClient();
  const addTariff = useMutation((value) => PerfonaAdmin.addTariff(value), {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      console.log(data);
    },
  });
  // Formni yuborish
  const onFinish = async (values) => {
    const obj = { ...values, type: "subscription" };
    console.log(obj);
    addTariff.mutate(obj);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const option = channels?.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  return (
    <div id="addChannel">
      <div className="container max-w-9xl mx-auto md:px-4 px-2 ">
        <div className="flex justify-between w-full items-center">
          <div className="mb-4">
            <h1 className="md:text-[28px] font-medium leading-[36px] ">
              Yopiq kanal qoʻshish
            </h1>
            <p className="">Yaxshi kontent obuna talab qiladi</p>
          </div>
          <div>
            <Steps
              labelPlacement="vertical"
              current={1}
              // status={currentStatus}
              // size="small"
              items={[
                {
                  title: "Finished",
                },
                {
                  title: "In Progress",
                },
                {
                  title: "Waiting",
                },
              ]}
            />
          </div>
        </div>
        <Form name="select_channel" className="relative" onFinish={onFinish}>
          <div className="overlay relative">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="chanal_img col-span-4 border border-[#E3E3E3] bg-[#FAFAFA] rounded-md p-4">
                <h2 className="text-[22px] font-medium border-b border-[#E3E3E3]">
                  Kanal
                </h2>
                <div className="mt-3">
                  <Form.Item label="Kanal tanlang" name="channel_id">
                    <Select
                      showSearch
                      placeholder=""
                      optionFilterProp="label"
                      onChange={onChange}
                      onSearch={onSearch}
                      options={option}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className=" col-span-8 border border-[#E3E3E3] bg-[#FAFAFA] rounded-md p-4">
                <h2 className="text-[22px] font-medium border-b border-[#E3E3E3]">
                  Kanal uchun taʻrif
                </h2>

                <div className="mt-4">
                  <Form.Item
                    name="name"
                    label="Taʻrif nomi"
                    className="col-span-1"
                    layout="vertical"
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Input
                      type="text"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4 flex gap-3">
                  <Form.Item
                    label="Taʻrif narxi"
                    name="price"
                    className="flex-1 "
                    layout="vertical"
                  >
                    <Input
                      type="text"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Taʻrif davomiyligi"
                    // name="duration_days"
                    className="flex-1"
                    layout="vertical"
                  >
                    <Select
                      showSearch
                      placeholder=""
                      optionFilterProp="label"
                      onChange={onChange}
                      onSearch={onSearch}
                      options={[
                        { label: "1 oylik", value: 1 },
                        { label: "6 oylik", value: 6 },
                        { label: "1 yillik", value: 12 },
                      ]}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <button
              style={{ borderRadius: "6px" }}
              className="py-2.5 mb-4 w-[200px] bg-gradient-to-t from-[#0230C7] to-[#0097FF] border raunded-md text-white hover:shadow-md "
            >
              Keyingi
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
