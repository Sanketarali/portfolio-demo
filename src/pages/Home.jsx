import React from "react";
import Layout from "../components/Layout";
import Project from "./Project";
import profile from "../assets/Profile.jpg";
import Footer from "../components/Footer";
import Skills from "./Skills";

export default function Home() {
  return (
    <Layout>
      <div className="w-[100%] h-[84vh] my-6 overflow-auto text-white">
        <div className="w-full flex flex-col gap-5">
          {/* banner */}
          <div className="w-full -z-50 bg-image bg-no-repeat bg-cover bg-center shadow-md">
            <div className="flex gap-3 md:gap-4 items-center h-40 pl-4 lg:px-14 bg-blur backdrop-filter backdrop-blur-xl">
              <div className="w-[95px] h-[95px] lg:w-[120px] lg:h-[120px]">
                <img
                  src={profile}
                  alt="sanket arali"
                  className="rounded-full border-[3px] border-neutral-200 w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-2xl">Sanket Arali</h1>
                <p className="text-[16px]">Data Engineer</p>
              </div>
            </div>
          </div>

          {/* skill section */}
          <Skills />

          {/* project section */}
          <Project />
        </div>

        {/* footer  */}
        <Footer />
      </div>
    </Layout>
  );
}
