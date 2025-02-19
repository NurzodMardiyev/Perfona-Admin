import logo from "../../images/perfona.png";
import google from "../../images/icons8-google.svg";
import "../../App.css";
import { Checkbox, Form, Input } from "antd";
import { AnimatedTestimonialsDemo } from "../../components/ui/AnimatedTestimonialsDemo";
import { useState } from "react";
export default function Auth() {
  const [login, setLogin] = useState(false);
  const [form] = Form.useForm();
  const handleTakeValue = (data) => {
    console.log(data);
  };
  const handleTakeValueLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="container max-w-9xl mx-auto flex items-center justify-between flex-col md:flex-row gap-6 md:h-[100vh]">
        {/* login or Sign up page */}
        <div className="login flex flex-col md:w-1/2 w-full px-[10px] md:px-auto ">
          <div>
            <div className="w-[200px] mb-5 mt-10">
              {/* logo */}
              <img src={logo} alt="" className="w-full h-full" loading="lazy" />
            </div>
          </div>
          {/* Form */}
          {login ? (
            <div className="flex justify-center flex-col text-center md:px-20">
              <div>
                <h1 className="text-[32px] font-[500]">Roʻyhatdan oʻtish</h1>
                <p className="text-[#979797]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="w-full flex justify-center items-center py-2 gap-1.5 rounded-full border my-5 hover:shadow-md">
                  <img
                    loading="lazy"
                    src={google}
                    alt=""
                    className="w-[25px]"
                  />
                  <span className="pt-1">Login with google</span>
                </button>
              </div>
              <div className="flex">
                <span className="or flex items-center justify-center w-full gap-3">
                  or
                </span>
              </div>
              <div id="loginForm">
                <Form form={form} onFinish={handleTakeValue} autoComplete="off">
                  <Form.Item
                    name="phone"
                    label="Telefon raqamingiz"
                    required={true}
                    layout="vertical"
                    className="flex flex-col"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    <input
                      type="text"
                      className="w-full outline-[0.5px] focus:border-inherit hover:border-1 focus"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Parolingiz"
                    layout="vertical"
                    required={true}
                    className="flex flex-col"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="rePassword"
                    label="Parolingizni takrorlang"
                    layout="vertical"
                    required={true}
                    className="flex flex-col"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="provicy"
                    // required={true}
                    valuePropName="checked"
                    label={null}
                    className="w-full flex items-start"
                  >
                    <Checkbox>Qoidalarni qabul qilish</Checkbox>
                  </Form.Item>
                  <button
                    type="submit"
                    className="pb-2.5 pt-3.5 bg-black text-white rounded-full border w-full"
                  >
                    Roʻyhatdan oʻtish
                  </button>
                  <div className="flex items-start mt-4">
                    <p>
                      Agar sizda account mavjudmi?{" "}
                      <button
                        onClick={() => setLogin(false)}
                        className="text-blue-500"
                      >
                        Kirish
                      </button>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          ) : (
            <div className="flex justify-center flex-col text-center md:px-20">
              <div>
                <h1 className="text-[32px] font-[500]">Accountga kirish</h1>
                <p className="text-[#979797]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="w-full flex justify-center items-center py-2 gap-1.5 rounded-full border my-5 hover:shadow-md">
                  <img
                    loading="lazy"
                    src={google}
                    alt=""
                    className="w-[25px]"
                  />
                  <span className="pt-1">Log in with google</span>
                </button>
              </div>
              <div className="flex">
                <span className="or flex items-center justify-center w-full gap-3">
                  or
                </span>
              </div>
              <div id="loginForm">
                <Form
                  form={form}
                  onFinish={handleTakeValueLogin}
                  autoComplete="off"
                  className="flex flex-col gap-3"
                >
                  <Form.Item
                    name="phone"
                    label="Telefon raqamingiz"
                    required={true}
                    className="flex flex-col"
                    layout="vertical"
                  >
                    <input
                      type="text"
                      className="w-full outline-[0.5px] focus:border-inherit hover:border-1 focus"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Parolingiz"
                    layout="vertical"
                    required={true}
                    className="flex flex-col"
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="provicy"
                    // required={true}
                    valuePropName="checked"
                    label={null}
                    className="w-full flex items-start"
                  >
                    <Checkbox>Qoidalarni qabul qilish</Checkbox>
                  </Form.Item>
                  <button
                    type="submit"
                    className="py-2.5  bg-black text-white rounded-full border w-full"
                  >
                    Accountga kirish
                  </button>
                  <div className="flex items-start mt-4">
                    <p>
                      Agar sizda account mavjudmi?{" "}
                      <button
                        onClick={() => setLogin(true)}
                        className="text-blue-500"
                      >
                        Roʻyhatdan oʻtish
                      </button>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col md:w-1/2 w-[67%] ">
          <AnimatedTestimonialsDemo />
        </div>

        {/* Picture section */}
        <div></div>
      </div>
    </div>
  );
}
