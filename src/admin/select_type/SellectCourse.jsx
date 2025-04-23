import { Input, Form, Flex, Select, Steps } from "antd";
import "../../App.css";
import { message, Upload } from "antd";
import { TiUpload } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";
const { Dragger } = Upload;
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { PerfonaAdmin } from "../../feature/queries";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function SellectCourse() {
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [valueDesc, setValueDesc] = useState("");
  const [stepStatus, setStepStatus] = useState(0);
  const [currentStatus, setCurrentStatus] = useState();
  const navigation = useNavigate();

  const convertToWebPBlob = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;
      };

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const targetAspectRatio = 16 / 9;
        if (Math.abs(aspectRatio - targetAspectRatio) >= 0.01) {
          reject(new Error("Rasm o‘lchamlari 16:9 bo‘lishi kerak!"));
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const webpFile = new File([blob], "image.webp", {
                type: "image/webp",
              });
              resolve(webpFile);
            } else {
              reject(new Error("WebP blob yaratib bo‘lmadi"));
            }
          },
          "image/webp",
          0.8
        );
      };

      img.onerror = (error) => reject(error);
      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  // Rasmni base64 ga o'tkazish
  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  // Upload handler
  const handleUpload = async (info) => {
    const { file } = info;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      message.error("Faqat JPG, PNG yoki WebP formatdagi rasm yuklash mumkin!");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      message.error("Rasm hajmi 2MB dan kichik bo‘lishi kerak!");
      return;
    }

    try {
      setIsUploading(true);
      const webpFile = await convertToWebPBlob(file);

      // Preview uchun
      const previewReader = new FileReader();
      previewReader.onloadend = () => {
        setImagePreview(previewReader.result);
      };
      previewReader.readAsDataURL(webpFile);

      form.setFieldsValue({ photo: webpFile });
      message.success("Rasm muvaffaqiyatli yuklandi");
    } catch (err) {
      console.error("Rasmni siqishda xatolik:", err);
      message.error(
        "Rasmni yuklashda xatolik yuz berdi, O'lchamlarga etibor bering!"
      );
    } finally {
      setIsUploading(false);
    }
  };

  const queryClient = useQueryClient();
  const {
    mutate: addCourse,
    isLoading,
    // isError,
    // error,
    // isSuccess,
  } = useMutation((value) => PerfonaAdmin.createCourse(value), {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      message.success("Kanal muvaffaqiyatli qo'shildi");
      setStepStatus(1);
      // navigation("admin/select_channel_two-step");
      console.log(data);
    },
    onError: () => {
      setCurrentStatus("error");
      message.error("Xatolik yuz berdi. Qaytadan urinib ko'ring!");
      console.log("Kanal yaratishning mutationida xatolik!");
    },
  });

  // Formni yuborish
  const onFinish = async (values) => {
    console.log(values);
    try {
      console.log("Yuborilayotgan ma'lumotlar:", values);

      // Backendga yuborish (misol uchun)

      const formData = new FormData();

      formData.append("photo", values.photo.file);
      values.category.forEach((id) => {
        formData.append("category_ids", id);
      });
      // formData.append("category_ids ", values.category);
      formData.append("course_link  ", values.link);
      formData.append("name", values.name);
      formData.append("description ", values.about);
      formData.append("about_video", values.video_link);
      formData.append("price", values.price);
      formData.append("is_active", "true");

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      addCourse(formData);
    } catch (error) {
      console.error("Xatolik:", error);
      message.error("Xatolik yuz berdi");
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { data } = useQuery(
    ["catrgories"],
    () => PerfonaAdmin.categoriesList(),
    {
      staleTime: Infinity, // Ma'lumot hech qachon eski hisoblanmaydi
      cacheTime: Infinity,
    }
  );

  const newDataOption = data?.data.map((item) => {
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
              Kurs qoʻshish
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

        {isLoading && (
          <div className="absolute  inset-0 bg-white bg-opacity-60 z-10 flex items-center justify-center">
            <div className="loader" />
          </div>
        )}
        <Form name="select_channel" className="relative" onFinish={onFinish}>
          <div className="overlay relative">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="chanal_img col-span-4 border border-[#E3E3E3] bg-[#FAFAFA] rounded-md p-4">
                <h2 className="text-[22px] font-medium border-b border-[#E3E3E3]">
                  Kurs rasmi
                </h2>
                <div className="mt-3">
                  <Form.Item label="Kategoriya" name="category">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={newDataOption}
                    />
                  </Form.Item>
                </div>
                <div className="mt-5">
                  <p className="text-[14px] font-[400] mb-1.5">Rasm yuklash</p>
                  <div onClick={handleUpload}>
                    {imagePreview ? (
                      <div className="w-full">
                        <img
                          src={imagePreview}
                          alt="Yuklangan rasm"
                          className="w-full h-auto max-h-48 border rounded "
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ) : (
                      <div className="max-w-full h-auto h-40 border rounded bg-[#f4f4f4] flex justify-center items-center text-center">
                        <p>
                          Kiritiladigan rasm: <br />{" "}
                          <span className="font-semibold text-[18px]">
                            16:9
                          </span>{" "}
                          <br />
                          formatda boʻlsin!
                        </p>
                      </div>
                    )}
                  </div>
                  <Form.Item name="photo" className="mt-3">
                    <Dragger
                      name="photo"
                      multiple={false}
                      showUploadList={false}
                      beforeUpload={() => false} // Avtomatik yuklashni o'chirish
                      onChange={handleUpload}
                      accept="image/jpeg,image/png,image/webp"
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid #E3E3E3",
                        backgroundColor: "white",
                        padding: "5px 15px",
                        textAlign: "center",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p className="p-0 flex justify-center text-[20px]">
                          <TiUpload />
                        </p>
                        <p className="ant-upload-text">
                          Rasmni tashlang yoki tanlang
                        </p>
                      </div>
                    </Dragger>
                  </Form.Item>
                </div>
              </div>
              <div className=" col-span-8 border border-[#E3E3E3] bg-[#FAFAFA] rounded-md p-4">
                <h2 className="text-[22px] font-medium border-b border-[#E3E3E3]">
                  Kurs maʻlumotlari
                </h2>
                <div className="mt-4">
                  <Form.Item label="Kanal nomi" name="name" layout="vertical">
                    <Input
                      type="text"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                </div>

                <div className="mt-4 flex gap-3">
                  <Form.Item
                    label="Kurs linki"
                    name="link"
                    className="flex-1 "
                    layout="vertical"
                    rules={[
                      { type: "url", warningOnly: true },
                      {
                        type: "string",
                        min: 6,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Kurs haqida video link"
                    name="video_link"
                    className="flex-1"
                    layout="vertical"
                    rules={[
                      { type: "url", warningOnly: true },
                      {
                        type: "string",
                        min: 6,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4">
                  <Form.Item
                    label="Kurs haqida"
                    className="col-span-1"
                    name="about"
                    layout="vertical"
                  >
                    <ReactQuill
                      theme="snow"
                      value={valueDesc}
                      onChange={setValueDesc}
                      className="w-full  border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4">
                  <Form.Item
                    name="price"
                    label="Kurs narxi"
                    className="col-span-1"
                    layout="vertical"
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Input
                      type="number"
                      className="w-full h-[39px] border-[#E3E3E3] focus:outline-none focus:ring-0 hover:ring-0"
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
