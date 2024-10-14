"use client";

import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathname = usePathname();
  console.log(pathname);
  let header = pathname.replace("/", "");
  return (
    <div className="bg-white w-full h-24 pl-12 pb-8 pr-7 pt-6">
      <div className="flex items-center justify-between">
        <div>
          {pathname === "/" ? (
            <h3 className="text-[#293345] text-base font-semibold capitalize">
              Home
            </h3>
          ) : (
            <h3 className="text-[#293345] text-base font-semibold capitalize">
              {header}
            </h3>
          )}
          {pathname === "/institutions" ? ( <p className="text-[8px] text-[#424D61] font-medium">
            <span className="text-[#94A0B4]">Home / </span> Institution
            Management / Institutions
          </p>) : <p className="text-[8px] text-[#424D61] font-medium">
            <span className="text-[#94A0B4]">Home </span> {header}
          </p>}
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-[11px] text-[#959CB6]">
            Hi, <span className="text-[#6C7293] text-[13px]">Sean</span>{" "}
          </h3>
          <div className="bg-[#D7F9EF] rounded w-9 h-9 flex items-center justify-center">
            <p className="text-center text-[#0BB783] text-[17px] font-normal">
              S
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
