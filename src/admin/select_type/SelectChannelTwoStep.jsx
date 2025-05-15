import { Input, Form, Steps } from "antd";
import "../../App.css";
import { message, Select } from "antd";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PerfonaAdmin } from "../../feature/queries";
import SecureStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function SellectChannelTwoStep() {
  const [channel, setChannel] = useState();
  const [stepStatus, setStepStatus] = useState(1);
  const [currentStatus, setCurrentStatus] = useState();
  const [addTariffBtn, setAddTariffBtn] = useState(0);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: addTariff, isLoading: mutateLoading } = useMutation(
    (value) => PerfonaAdmin.addTariff(value),
    {
      onSuccess: (data) => {
        message.success("Kanal qo'shish ikkinchi qadam muvaffaqiyatli!");
        queryClient.invalidateQueries();
        setStepStatus(2);
        navigate("/admin/select_channel_three-step");
        console.log(data);
      },
      onError: (error) => {
        setCurrentStatus("error");
        message.error("Xatolik yuz berdi. Qaytadan urinib ko'ring!");
        console.log("Kanal qo'shish 2 qadam mutationda xatolik!", error);
      },
    }
  );
  // Formni yuborish
  const onFinish = async (values) => {
    const obj1 = {
      name: values.name,
      content_id: values.content_id,
      type: "subscription",
      duration_days: values.duration_days,
      price: values.price,
    };
    const obj2 = {
      name: values.name2,
      content_id: values.content_id,
      type: "subscription",
      duration_days: values.duration_days2,
      price: values.price2,
    };
    const obj3 = {
      name: values.name3,
      content_id: values.content_id,
      type: "subscription",
      duration_days: values.duration_days3,
      price: values.price3,
    };
    addTariff(obj1);
    if (addTariffBtn === 1) {
      addTariff(obj2);
    } else if (addTariffBtn === 2) {
      addTariff(obj3);
    }
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const channelId = SecureStorage.getItem("channelId");

  const { data, isLoading } = useQuery(
    ["channelData", channelId],
    () => PerfonaAdmin.getChannelData(channelId),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: !!channelId, // channelId mavjud bo‘lsa, query ishga tushadi
    }
  );

  useEffect(() => {
    if (data) {
      console.log("Channel data:", data);
      setChannel(data);
    }
  }, [data]);
  const option = [
    {
      label: channel?.data?.name,
      value: channel?.data?.id,
    },
  ];

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
              current={stepStatus}
              status={currentStatus}
              // size="small"
              items={[
                {
                  title: "Kanal",
                },
                {
                  title: "Tarif qo'shish",
                },
                {
                  title: "Tekshirish",
                },
              ]}
            />
          </div>
        </div>
        {isLoading ||
          (mutateLoading && (
            <div className="absolute  inset-0 bg-white bg-opacity-60 z-10 flex items-center justify-center">
              <div className="loader" />
            </div>
          ))}
        <Form name="select_channel" className="relative" onFinish={onFinish}>
          <div className="overlay relative">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="chanal_img col-span-4 border border-[#E3E3E3] bg-[#FAFAFA] rounded-md p-4">
                <h2 className="text-[22px] font-medium border-b border-[#E3E3E3]">
                  Kanal
                </h2>
                <div className="mt-3">
                  <Form.Item label="Kanal tanlang" name="content_id">
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
                    name="duration_days"
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
                {addTariffBtn >= 1 && (
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="mt-4">
                        <Form.Item
                          name="name2"
                          label="Ikkinchi taʻrif nomi"
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
                          label="Ikkinchi taʻrif narxi"
                          name="price2"
                          className="flex-1 "
                          layout="vertical"
                        >
                          <Input
                            type="text"
                            className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                          />
                        </Form.Item>
                        <Form.Item
                          label="Ikkinchi taʻrif davomiyligi"
                          name="duration_days2"
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
                    <div className="text-[22px] p-[10px] h-[100px] ">
                      <AiOutlineMinusCircle
                        className="cursor-pointer"
                        onClick={() => setAddTariffBtn(addTariffBtn - 1)}
                      />
                    </div>
                  </div>
                )}

                {addTariffBtn >= 2 && (
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="mt-4">
                        <Form.Item
                          name="name3"
                          label="Uchinchi taʻrif nomi"
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
                          label="Uchinchi taʻrif narxi"
                          name="price3"
                          className="flex-1 "
                          layout="vertical"
                        >
                          <Input
                            type="text"
                            className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                          />
                        </Form.Item>
                        <Form.Item
                          label="Uchinchi taʻrif davomiyligi"
                          name="duration_days3"
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
                    <div className="text-[22px] p-[10px] h-[100px] ">
                      <AiOutlineMinusCircle
                        className="cursor-pointer"
                        onClick={() => setAddTariffBtn(addTariffBtn - 1)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <button
                    style={{ borderRadius: "6px" }}
                    className={`py-2 mb-4 w-full mt-3 bg-gradient-to-t ${
                      addTariffBtn > 1
                        ? "from-[#a9bdff] to-[#7aa8c6] cursor-default"
                        : "from-[#0230C7] to-[#0097FF]"
                    }  border raunded-md text-white hover:shadow-md`}
                    onClick={() => {
                      if (addTariffBtn < 2) {
                        setAddTariffBtn(addTariffBtn + 1);
                      }
                    }}
                    type="button"
                  >
                    Qoʻshish
                  </button>
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
