import { Col, Input, Form, Flex } from "antd";
import "../../App.css";
import { message, Upload } from "antd";

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
        <h1>Yopiq kanal qoʻshish</h1>
        <div>
          <Form name="select_channel" onFinish={onFinish}>
            <Flex gap={30} className="w-full">
              <Col span={11}>
                <Form.Item label="Link" name="link" layout="vertical">
                  <Input type="text" className="w-full selectForm" />
                </Form.Item>
              </Col>
              <Col span={11} height={41}>
                <Form.Item label="Rasm yuklash" name="upload" layout="vertical">
                  <Dragger {...props} height={41}>
                    <p className="p-0">Rasm Yuklash</p>
                  </Dragger>
                </Form.Item>
              </Col>
            </Flex>
          </Form>
        </div>
      </div>
    </div>
  );
}
