import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Sellect() {
  return (
    <div className="flex w-full h-[100vh] flex-col gap-10 max-w-7xl mx-auto">
      <div className="flex items-start mt-[100px]">
        <Link to="/admin" className="flex items-center">
          <span className="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center">
            <IoIosArrowBack />
          </span>{" "}
          Orqaga
        </Link>
      </div>
      <div className="flex gap-3 justify-center ">
        <Link
          to=""
          className="w-[300px] h-[130px] italic text-[18px] rounded-md flex justify-center items-center bg-gradient-to-t from-[#0230C7] to-[#0097FF] text-white"
        >
          Yopiq kanal qoʻshish
        </Link>
        <Link
          to=""
          className="w-[300px] h-[130px] italic text-[18px] rounded-md flex justify-center items-center bg-gray-200"
        >
          Kurs qo'shish
        </Link>
      </div>
    </div>
  );
}
