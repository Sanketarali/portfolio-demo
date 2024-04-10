import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="w-full gap-5 px-6 flex justify-between">
        <div className="w-[16%] h-[88vh] hidden lg:flex">
          <SideNav />
        </div>
        <div className="w-[100%] lg:w-[84%] h-[84vh]">
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
}
