import React from "react";
import InputCustom from "../../components/Input/InputCustom";
import * as registerAnimation from "./../../assets/animation/register.json";
import Lottie from "react-lottie";

const SignIn = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen flex">
      <div className="animation_signIn w-7/12 flex items-center justify-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="form_signIn w-5/12 flex items-center justify-center flex-col">
        <div className="p-10 border border-gray-500 rounded-md space-y-5">
          <h1>Dang nhap vao movie CyberSoft</h1>
          <form action="" className="space-y-5">
            <InputCustom
              placeholder="Vui long nhap tai khoan"
              id="taiKhoan"
              label="taiKhoan"
            />
            <InputCustom
              placeholder="Vui long nhap mat khau"
              id="matKhau"
              label="matKhau"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
