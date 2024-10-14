import Image from "next/image";
import DashboardHeader from "../templates/layout/DashboardHeader";
import bank from "@/public/icons/Bank.svg";
import whiteBank from "@/public/icons/whiteBank.svg";
import exportSvg from "@/public/icons/export.svg";
import search from "@/public/icons/search.svg"

export default function DashboardLayout() {
  return (
    <section className="w-full">
      <DashboardHeader />
      <section className="p-8">
        <section className="flex items-center gap-8">
          <div className="bg-white p-3.5 rounded-lg flex flex-col items-start gap-2 w-64">
            <Image src={bank} alt="bank icon" />
            <h4 className="text-xl font-semibold text-[#1E1E2D]">0</h4>
            <p className="text-xs font-medium text-[#94A0B4]">Total Institutions</p>
          </div>
          <div className="bg-[#5BC2BC] p-3.5 rounded-lg flex flex-col items-start gap-2 w-64">
            <Image src={whiteBank} alt="bank icon" />
            <h4 className="text-xl font-semibold text-white">0</h4>
            <p className="text-xs font-medium text-white">Active</p>
          </div>
          <div className="bg-[#E35B64] p-3.5 rounded-lg flex flex-col items-start gap-2 w-64">
            <Image src={whiteBank} alt="bank icon" />
            <h4 className="text-xl font-semibold text-white">0</h4>
            <p className="text-xs font-medium text-white">Deactivated</p>
          </div>
        </section>
        <section className="bg-white rounded-xl my-6 px-10 py-4">
             <div className="flex items-center justify-between">
                <h5 className="text-xl text-[#101828] font-semibold">Institutions</h5>
                <button className="border border-[#D0D5DD] rounded py-3 px-5">
                    <div className="flex items-center gap-2">
                      <Image src={exportSvg} alt="bank icon" />
                       Export
                    </div>   
                </button>
             </div>
            <div className="flex justify-between my-5">
                <div className="relative">
                    <input type="text" className="w-80 pl-8 py-2 border border-[#D0D5DD] rounded" placeholder="Search"/>
                    <Image className="absolute top-2.5 left-2" src={search}/>
                </div>
                <div className="flex gap-5">
                    <select className="border border-[#D0D5DD] rounded py-2 px-4 text-[#667085] text-sm">
                        <option>Trans type</option>
                    </select>
                    <select className="border border-[#D0D5DD] rounded py-2 px-4 text-[#667085] text-sm">
                        <option>Status</option>
                    </select>
                    <div className="flex">
                        <input type="date" placeholder="Start Date" className="border border-[#D0D5DD] rounded hidden"/>
                        <input type="date" placeholder="Ebd Date" className="border border-[#D0D5DD] rounded"/>
                    </div>
                    <button className="border border-[#03AB27] rounded py-2 px-3 text-[#03AB27]">
                       Search
                    </button>
                </div>
            </div>
        </section>
      </section>
    </section>
  );
}
