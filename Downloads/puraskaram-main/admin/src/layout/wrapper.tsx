"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const router = useRouter();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return (
    <div className="tp-main-wrapper bg-slate-100 h-screen">
      <Sidebar sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <div className="tp-main-content lg:ml-[250px] xl:ml-[300px] w-[calc(100% - 300px)]">
        <Header setSideMenu={setSideMenu} />
        {children}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Wrapper;
