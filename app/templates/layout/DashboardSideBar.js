'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.svg"
import home from "@/public/icons/home.svg";
import Detective from "@/public/icons/Detective.svg";
import Institutions from "@/public/icons/Institutions.svg";
import Approvals from "@/public/icons/Approvals.svg";
import audit from "@/public/icons/audit.svg";
import logout from "@/public/icons/logout.svg";


 
import { usePathname } from 'next/navigation'


export default function DashboardSideBar() {
  const pathname = usePathname()
  return (
    <div className="h-full min-h-dvh w-full max-w-64 bg-[#1E1E2D] py-5 pl-5">
      <div>
        <Image src={Logo}  alt="logo icon" className="pt-1 pb-11"/>
        <div>
          <div className={`link ${pathname === '/' ? 'border-r-[2.5px] border-[#03AB27]' : ''} flex items-center justify-start gap-2`}>
            <Image
              src={home}
              alt="dashbaord icon"
            />
            <Link href="/" className={`link ${pathname === '/' ? 'text-white' : 'text-[#888C9F]'} text-[13px] font-normal`}>Dashboard</Link>
          </div>
          <div>
            <h4 className="text-[#4A4B68] text-xs font-normal uppercase mt-10 mb-6">Users</h4>
            <div className={`link ${pathname === '/users' ? 'border-r-[2.5px] border-[#03AB27]' : ''} flex items-center justify-start gap-2 mt-6`}>
            <Image
              src={Detective}
              alt="users icon"
            />
            <Link href="/users"  className={`link ${pathname === '/users' ? 'text-white' : 'text-[#888C9F]'} text-[13px] font-normal`}>System users</Link>
          </div>
          <div className={`link ${pathname === '/institutions' ? 'border-r-[2.5px] border-[#03AB27]' : ''} flex items-center justify-start gap-2 mt-6`}>
            <Image
              src={Institutions}
              alt="institutions icon"
            />
            <Link href="/institutions" 
            className={`link ${pathname === '/institutions' ? 'text-white' : 'text-[#888C9F]'} text-[13px] font-normal`}
            >Institutions</Link>
          </div>
          </div>
          <div>
            <h4 className="text-[#4A4B68] text-xs font-normal uppercase mt-10 mb-6">Operations</h4>
            <div className={`link ${pathname === '/approvals' ? 'border-r-[2.5px] border-[#03AB27]' : ''} flex items-center justify-start gap-2 mt-6`}>
            <Image
              src={Approvals}
              alt="users image"
            />
            <Link href="/approvals" className={`link ${pathname === '/approvals' ? 'text-white' : 'text-[#888C9F]'} text-[13px] font-normal`}>Approvals</Link>
          </div>
          <div className={`link ${pathname === '/audit' ? 'border-r-[2.5px] border-[#03AB27]' : ''} flex items-center justify-start gap-2 mt-6`}>
            <Image
              src={audit}
              alt="approval icon"
            />
            <Link href="/audit" className={`link ${pathname === '/audit' ? 'text-white' : 'text-[#888C9F]'} text-[13px] font-normal`}>Audit Trails</Link>
          </div>
          </div>
          <div>
            <h4 className="text-[#4A4B68] text-xs font-normal uppercase mt-10 mb-6">Actions</h4>
            <div className="flex items-center justify-start gap-2">
            <Image
              src={logout}
              alt="action icon"
            />
            <Link href="/" className="text-[#888C9F] text-xs font-normal">Logout</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
