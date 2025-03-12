import { PiHandWaving } from "react-icons/pi";

export default function TestemonialsStat() {
  return (
    <div className="grid grid-cols-12 gap-3 text-[#919096] ">
      <div className="col-span-4 flex flex-col  gap-4 rounded-sm ">
        <div className="flex justify-between items-center px-10 py-6 border">
          <div className="flex items-center gap-3">
            <PiHandWaving className="text-[26px]" />
            <p>Likes</p>
          </div>
          <span className="inline-block">16</span>
        </div>
        <div className="flex justify-between items-center px-10 py-6 border">
          <div className="flex items-center gap-3">
            <PiHandWaving className="text-[26px]" />
            <p>Likes</p>
          </div>
          <span className="inline-block">16</span>
        </div>
      </div>
      <div className="col-span-4 flex flex-col  gap-4 rounded-sm ">
        <div className="flex justify-between items-center px-10 py-6 border">
          <div className="flex items-center gap-3">
            <PiHandWaving className="text-[26px]" />
            <p>Likes</p>
          </div>
          <span className="inline-block">16</span>
        </div>
        <div className="flex justify-between items-center px-10 py-6 border">
          <div className="flex items-center gap-3">
            <PiHandWaving className="text-[26px]" />
            <p>Likes</p>
          </div>
          <span className="inline-block">16</span>
        </div>
      </div>
      <div className="col-span-4 flex flex-col  gap-4 rounded-sm ">
        <div className="flex justify-between items-center px-10 py-6 border">
          <div className="flex items-center gap-3">
            <PiHandWaving className="text-[26px]" />
            <p>Likes</p>
          </div>
          <span className="inline-block">16</span>
        </div>
      </div>
    </div>
  );
}
