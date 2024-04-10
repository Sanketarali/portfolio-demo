import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="flex lg:p-6 py-10 h-[70vh] lg:h-[76vh] text-white">
          <div className="w-[100%] text-[14px]">
            <h1 className="text-xl mb-4 font-bold pb-4 border-b border-neutral-500">
              Get in touch
            </h1>

            <div className="w-full flex justify-center lg:py-10">
              <form
                action="https://formspree.io/f/xwkdzbbr"
                method="POST"
                className="w-full lg:w-[60%] flex flex-col space-y-4 "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-md p-3 lg:p-2 border-neutral-500 bg-neutral-800 placeholder:text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md p-3 lg:p-2 border-neutral-500 bg-neutral-800 placeholder:text-white"
                />
                <textarea
                  type="text"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-md p-3 lg:p-2 border-neutral-500 bg-neutral-800 placeholder:text-white resize-none"
                />
                <button
                  type="submit"
                  className="flex w-fit rounded-md bg-neutral-50 text-black p-3 lg:p-2 hover:bg-gray-light text-[16px] font-medium hover:bg-neutral-800 hover:text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
