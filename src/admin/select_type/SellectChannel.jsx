import { Col, Input, Form, Flex, Button, Space } from "antd";
import "../../App.css";
import { message, Upload } from "antd";
import { TiUpload } from "react-icons/ti";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

export default function SellectChannel() {
  const onFinish = (data) => {
    console.log(data);
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <div className="container max-w-9xl mx-auto md:px-4 px-2 ">
        <h1 className="text-[28px] font-medium  mb-3">Yopiq kanal qoʻshish</h1>
        <div>
          <Form name="select_channel" onFinish={onFinish}>
            <Flex gap={30} className="w-full">
              <Col span={11}>
                <Form.Item
                  label="Kanal linki"
                  name="link"
                  layout="vertical"
                  rules={[
                    { type: "url", warningOnly: true },
                    {
                      type: "string",
                      min: 6,
                    },
                  ]}
                >
                  <Input type="text" className="w-full selectForm" />
                </Form.Item>
              </Col>
              <Col span={11} height={41}>
                <Form.Item label="Rasm yuklash" name="upload" layout="vertical">
                  <Dragger {...props} height={41}>
                    <p className="p-0 flex justify-center text-[20px]">
                      <TiUpload />
                    </p>
                  </Dragger>
                </Form.Item>
              </Col>
            </Flex>
            <Flex gap={30} className="w-full mt-8">
              <Col span={11}>
                <Form.Item
                  label="Kanal haqida"
                  name="description"
                  layout="vertical"
                >
                  <Input type="text" className="w-full selectForm" />
                </Form.Item>
              </Col>
              <Col span={11} height={41}>
                <Form.Item
                  label="Kanal haqida video link"
                  name="videoLink"
                  layout="vertical"
                  rules={[
                    { type: "url", warningOnly: true },
                    {
                      type: "string",
                      min: 6,
                    },
                  ]}
                >
                  <Input type="text" className="w-full selectForm" />
                </Form.Item>
              </Col>
            </Flex>
            <Flex gap={30} className="w-full mt-8">
              <Col span={11}>
                <Form.Item
                  name="tariffName"
                  label="Tarif qo'shsih"
                  layout="vertical"
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Form.List name="tariffName">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <Space
                            key={key}
                            style={{
                              marginBottom: 0,
                            }}
                            align="baseline"
                            className="w-full grid grid-cols-2 relative items-center"
                          >
                            <Form.Item
                              {...restField}
                              name={[name, "key"]}
                              className="col-span-1 mb-1"
                            >
                              <Input
                                placeholder="Tarif nomini kiriting!"
                                className="selectForm"
                              />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, "value"]}
                              className="col-span-1 mb-1"
                            >
                              <Input
                                placeholder="Ta'rif narxini kiriting!"
                                className="selectForm"
                              />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => remove(name)}
                              className="absolute z-10 top-4 right-1"
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type=""
                            onClick={() => add()}
                            icon={<PlusOutlined />}
                            className="py-2 h-[41px]"
                            style={{ heigth: "41px", width: "100%" }}
                          >
                            Qoʻshish
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
              </Col>
            </Flex>
            <Flex gap={30} className="w-full mt-8">
              <Col span={23}>
                <button
                  style={{ borderRadius: "8px" }}
                  className="py-2.5 mb-4 w-full bg-gradient-to-t from-[#0230C7] to-[#0097FF] border raunded-md text-white hover:shadow-md "
                >
                  Yuborish
                </button>
              </Col>
            </Flex>
          </Form>
        </div>
      </div>
    </div>
  );
}
