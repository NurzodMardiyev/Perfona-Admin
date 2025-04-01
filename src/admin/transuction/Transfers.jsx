import { IoIosTrendingUp } from "react-icons/io";

export default function Transfers() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          {/* Headerni malumotlari va card ko'rinishi */}
          <div className="grid grid-cols-7 gap-[30px]">
            <div className="balans col-span-3 ">
              <div>
                <h2 className="md:text-[24px] font-medium">Card hisoboti</h2>
                <p className="text-[#8B8B8B] md:text-[14px]">
                  Bu yerda siz hisobotlarni nazorat qila olasiz
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 mt-2">
                <h3 className="text-[20px] font-medium">Balans</h3>
                <p className="text-[12px]">Feb, 2025</p>

                <p className="md:text-[30px] font-semibold my-2">$845075</p>
                <p className="flex items-center gap-3">
                  <span className="text-white h-[24px]  flex gap-1 px-2 items-center justify-center text-[14px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                    <IoIosTrendingUp />{" "}
                    <span className="text-[10px]">+5.2%</span>
                  </span>
                  <span className="flex text-[12px]">
                    Oldingi oyga nisbatan
                  </span>
                </p>
              </div>
            </div>
            <div className="card-img col-span-4 flex  items-stretch">
              <div className="p-6 rounded-[20px] bg-gradient-to-t from-[#0230C7] to-[#0097FF] text-white w-full h-full flex flex-col justify-between">
                <p className="text-[30px] md:pt-[20px]">9860 0101 2511 5195</p>
                <div className="flex justify-between w-full items-end">
                  <div>
                    <p>Nurzod Mardiyev</p>
                    <p>03/28</p>
                  </div>
                  <div className="text-[18px]">Humo</div>
                </div>
              </div>
            </div>
          </div>

          {/* sof daromat va investitsiya samaradorligi */}
          <div className="grid grid-cols-8">
            <div className="col-span-3 p-4 rounded-xl bg-slate-100">
              <h3 className="text-[20px] font-medium">Sof daromad</h3>
              <p className="md:text-[30px] font-semibold my-2">$845075</p>
              <p className="flex items-center gap-3 justify-between">
                <span className="flex text-[12px]">Taxminiy</span>
                <span className="text-white h-[24px] w-[50px] flex  items-center justify-center text-[13px] bg-gradient-to-t rounded-md from-[#0230C7] to-[#0097FF]">
                  <IoIosTrendingUp />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
