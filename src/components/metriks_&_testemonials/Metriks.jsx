import { RiPieChart2Fill } from "react-icons/ri";

export default function Metriks() {
  return (
    <>
      <div className="col-span-3  shadow-md  p-5 bg-[#F2F8FF] rounded-sm">
        <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-[#EFEFFD] text-[23px]">
          <RiPieChart2Fill />
        </div>
        <h3 className="text-[#A8A9AD] uppercase my-4">Bajarilgan mashqlar </h3>
        <div className="flex flex-col">
          <p className="text-[43px] leading-10">27</p>
          <span className="text-red-400">-12%</span>
        </div>
      </div>
    </>
  );
}
