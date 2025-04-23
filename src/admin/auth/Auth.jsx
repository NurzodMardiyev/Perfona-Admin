import logo from "../../../public/images/perfona.webp";
import "../../App.css";
import { Form, Input, message, Spin } from "antd";
import { AnimatedTestimonialsDemo } from "../../components/ui/AnimatedTestimonialsDemo";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { PerfonaAdmin } from "../../feature/queries";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";

export default function Auth() {
  const [login, setLogin] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState("");
  const [check, setCheck] = useState(null);

  const queryClient = useQueryClient();
  const { mutate: registerMutate, isLoading: registerLoading } = useMutation(
    (obj) => PerfonaAdmin.authRegister(obj),
    {
      onSuccess: (status) => {
        console.log(status);
        queryClient.invalidateQueries();
        message.success("Registratsiyadan muvaffaqiyatli o'tdingiz!");
        setLogin(false);
        console.log("Registratsiyadan o'tildi");
      },
      onError: (status) => {
        message.error(status);
        console.log("Mutation  Xato");
      },
    }
  );

  const { mutate: loginMutate, isLoading: loginLoading } = useMutation(
    (obj) => PerfonaAdmin.authLogin(obj),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        navigate("/admin/dashboard");
        console.log("Access olindi Loginniki");
      },
      onError: () => {
        console.log("Mutation  Xato");
      },
    }
  );

  const handleTakeValue = (data) => {
    const maskPhone = "+" + data.phone.replace(/\D/g, "");
    console.log(maskPhone);

    const value = {
      ...data,
      phone: maskPhone,
    };
    console.log(value);
    registerMutate(value);
  };
  const handleTakeValueLogin = (data) => {
    const maskPhone = "+" + data.phoneLogin.replace(/\D/g, "");
    console.log(maskPhone);
    const value = {
      phone: maskPhone,
      password: data.passwordLogin,
    };
    loginMutate(value);
  };

  const phoneMask = [
    "+",
    "9",
    "9",
    "8",
    " ",
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  const changePassword = (e) => {
    setCheckPassword(e.target.value);
  };

  const changeCheckPassword = (e) => {
    setTimeout(() => {
      if (checkPassword === e.target.value) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }, 2000);
  };
  return (
    <div>
      <div
        id="auth"
        className="container max-w-9xl mx-auto flex items-center justify-between flex-col md:flex-row gap-6 md:h-[100vh] "
      >
        {/* login or Sign up page */}
        <div className="login flex flex-col md:w-1/2 w-full md:px-auto ">
          <div>
            <div className="md:w-[200px] w-[160px] mb-5 mt-10">
              {/* logo */}
              <img src={logo} alt="" className="w-full h-full" loading="lazy" />
            </div>
          </div>
          {/* Form */}
          {login ? (
            <div className="flex justify-center flex-col text-center ">
              <div className="mb-3">
                <h1 className="md:text-[32px] text-[24px] font-[500]">
                  Roʻyhatdan oʻtish
                </h1>
                <p className="text-[#979797] md:text-[1rem] text-[0.85rem]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div id="registerForm" className="mt-3">
                <Form form={form} onFinish={handleTakeValue} autoComplete="off">
                  <Form.Item
                    name="phone"
                    label="Telefon raqamingiz"
                    required={true}
                    layout="vertical"
                    className="flex flex-col"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    <MaskedInput
                      mask={phoneMask}
                      placeholder="+998 (__) ___-__-__"
                      className="w-full outline-[0.5px] focus:border-inherit hover:border-1 py-2.5 focus focus:outline-none focus:border-none border-none bg-[#eee]  focus:ring-[0px]"
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
                    <Input.Password
                      onChange={changePassword}
                      style={{
                        border: `1px solid #eeeeee`,
                        borderColor: `${
                          check === null ? "#eee" : check ? "#3CEC85" : "red"
                        }`,
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    // name="repassword"
                    label="Parolingizni takrorlang"
                    layout="vertical"
                    required={true}
                    className="flex flex-col"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    <Input.Password
                      onChange={changeCheckPassword}
                      style={{
                        border: `1px solid #eeeeee`,
                        borderColor: `${
                          check === null ? "#eee" : check ? "#3CEC85" : "red"
                        }`,
                      }}
                    />
                  </Form.Item>
                  <button
                    // to="/admin/dashboard"
                    disabled={check ? false : true}
                    type={`${registerLoading ? "button" : "submit"}`}
                    className="py-2.5  bg-gradient-to-t from-[#0230C7] to-[#0097FF] text-white rounded-[8px] border w-full authSpin mt-4"
                  >
                    {registerLoading ? <Spin /> : "Roʻyhatdan oʻtish"}
                  </button>
                  <div className="flex items-start mt-4">
                    <p>
                      Sizda account mavjudmi?{" "}
                      <button
                        onClick={() => setLogin(false)}
                        className="text-blue-500"
                      >
                        Accountga kirish
                      </button>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          ) : (
            <div
              id="loginForm"
              className="flex justify-center flex-col text-center"
            >
              <div className="mb-3">
                <h1 className=" font-[500] md:text-[32px] text-[24px] ">
                  Accountga kirish
                </h1>
                <p className="text-[#979797] md:text-[1rem] text-[0.85rem]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                {/* <button className="w-full flex justify-center items-center py-2 gap-1.5 rounded-full border my-5 hover:shadow-md">
                  <img
                    loading="lazy"
                    src={google}
                    alt=""
                    className="w-[25px]"
                  />
                  <span className="pt-1">Log in with google</span>
                </button> */}
              </div>
              {/* <div className="flex">
                <span className="or flex items-center justify-center w-full gap-3">
                  or
                </span>
              </div> */}
              <div className="mt-3">
                <Form
                  form={form}
                  onFinish={handleTakeValueLogin}
                  autoComplete="off"
                  className="flex flex-col gap-3"
                >
                  <Form.Item
                    name="phoneLogin"
                    label="Telefon raqamingiz"
                    required={true}
                    className="flex flex-col"
                    layout="vertical"
                  >
                    <MaskedInput
                      mask={phoneMask}
                      placeholder="+998 (__) ___-__-__"
                      className="w-full outline-[0.5px] focus:border-inherit hover:border-1 py-2.5 focus focus:outline-none focus:border-none border-none bg-[#eee]  focus:ring-[0px]"
                    />
                  </Form.Item>
                  <Form.Item
                    name="passwordLogin"
                    label="Parolingiz"
                    layout="vertical"
                    required={true}
                    className="flex flex-col"
                  >
                    <Input.Password />
                  </Form.Item>

                  {/* <Form.Item
                    // name="provicy"
                    // required={true}
                    valuePropName="checked"
                    label={null}
                    className="w-full flex items-start"
                  >
                    <Checkbox>Qoidalarni qabul qilish</Checkbox>
                  </Form.Item> */}
                  <button
                    // to="/admin/dashboard"
                    type={`${loginLoading ? "button" : "submit"}`}
                    className="py-2.5  bg-gradient-to-t from-[#0230C7] to-[#0097FF] text-white rounded-[8px] border w-full authSpin"
                  >
                    {loginLoading ? <Spin /> : "Accountga kirish"}
                  </button>
                  <div className="flex items-start mt-4">
                    <p>
                      Agar sizda boʻlmasa?{" "}
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
      </div>
    </div>
  );
}
