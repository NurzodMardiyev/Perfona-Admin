import { Col, Input, Form, Flex, Button, Space } from "antd";
import "../../App.css";
import { message, Upload } from "antd";
import { TiUpload } from "react-icons/ti";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
const { Dragger } = Upload;

export default function SellectChannel() {
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  console.log(imagePreview);

  // Rasmni base64 ga o'tkazish
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Upload handler
  const handleUpload = async (info) => {
    const { file } = info;

    // Rasm formatini tekshirish
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      message.error(
        "Faqat JPG, PNG yoki WebP formatidagi rasmlar yuklanishi mumkin!"
      );
      return;
    }

    // Fayl hajmini tekshirish (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      message.error("Rasm hajmi 5MB dan kichik bo'lishi kerak!");
      return;
    }

    try {
      setIsUploading(true);

      // Base64 ga konvertatsiya qilish
      const base64Image = await convertToBase64(file);

      // Formga saqlash
      form.setFieldsValue({ photo: base64Image });
      setImagePreview(base64Image);

      message.success("Rasm muvaffaqiyatli yuklandi");
    } catch (error) {
      console.error("Rasmni o'qishda xatolik:", error);
      message.error("Rasmni yuklashda xatolik yuz berdi");
    } finally {
      setIsUploading(false);
    }
  };

  // Formni yuborish
  const onFinish = async (values) => {
    const token = localStorage.getItem("accessToken");
    try {
      console.log("Yuborilayotgan ma'lumotlar:", values);

      // Backendga yuborish (misol uchun)

      const response = await axios.post(
        "https://perfonabackend.pythonanywhere.com/main/channels/",
        {
          ...values,
          photo: imagePreview, // base64 formatdagi rasm
          category: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      message.success("Kanal muvaffaqiyatli qo'shildi");
      console.log(response.data);
    } catch (error) {
      console.error("Xatolik:", error);
      message.error("Xatolik yuz berdi");
    }
  };

  return (
    <div>
      <div className="container max-w-9xl mx-auto md:px-4 px-2 ">
        <h1 className="text-[28px] font-medium  mb-3">Yopiq kanal qoʻshish</h1>
        <div className="">
          <Form name="select_channel" onFinish={onFinish}>
            <div className="grid grid-cols-2 md:gap-x-10 gap-y-3">
              <Form.Item
                label="Kanal nomi"
                name="name"
                className="col-span-1"
                layout="vertical"
              >
                <Input type="text" className="w-full selectForm" />
              </Form.Item>

              <Form.Item
                label="Kanal linki"
                name="link"
                className="col-span-1"
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

              <Form.Item
                label="Rasm yuklash"
                name="photo"
                rules={[{ required: true, message: "Iltimos, rasm yuklang!" }]}
                className="col-span-1"
              >
                <Dragger
                  name="photo"
                  multiple={false}
                  showUploadList={false}
                  beforeUpload={() => false} // Avtomatik yuklashni o'chirish
                  onChange={handleUpload}
                  accept="image/jpeg,image/png,image/webp"
                >
                  <p className="p-0 flex justify-center text-[20px]">
                    <TiUpload />
                  </p>
                  <p className="ant-upload-text">
                    Rasmni shu yerga tashlang yoki tanlang
                  </p>
                  <p className="ant-upload-hint">
                    JPG, PNG yoki WebP formatida, maksimum 5MB
                  </p>
                </Dragger>
              </Form.Item>

              {imagePreview && (
                <div className="col-span-1">
                  <div className="mb-2 font-medium">Rasm korinishi:</div>
                  <img
                    src={imagePreview}
                    alt="Yuklangan rasm"
                    className="max-w-full h-auto max-h-40 border rounded"
                  />
                </div>
              )}

              <Form.Item
                label="Kanal haqida"
                className="col-span-1"
                name="about"
                layout="vertical"
              >
                <Input type="text" className="w-full selectForm" />
              </Form.Item>

              <Form.Item
                label="Kanal haqida video link"
                name="video_link"
                className="col-span-1"
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

              <Form.Item
                name="tariffs"
                label="Tarif qo'shsih"
                className="col-span-1"
                layout="vertical"
                style={{
                  marginBottom: 10,
                }}
              >
                <Form.List name="tariffs" className="col-span-1">
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
                            name={[name, "name"]}
                            className="col-span-1 mb-1"
                          >
                            <Input
                              placeholder="Tarif nomini kiriting!"
                              className="selectForm"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "price"]}
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
            </div>

            <Flex gap={30} className="w-full mt-8">
              <button
                style={{ borderRadius: "8px" }}
                className="py-2.5 mb-4 w-full bg-gradient-to-t from-[#0230C7] to-[#0097FF] border raunded-md text-white hover:shadow-md "
              >
                Yuborish
              </button>
            </Flex>
          </Form>
        </div>
      </div>
    </div>
  );
}
