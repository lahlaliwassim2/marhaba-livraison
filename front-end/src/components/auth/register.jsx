import React from "react";
import reg from "../../assiet/images/reg1.jpg";
import Logo from "../../assiet/logo/logo.png";
import {Link} from "react-router-dom"
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
const register = () => {
  return (
    <>
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-full md:w-1/2">
          <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <img src={Logo} className="max-h-40"/>
          </div>
          <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center font-bold text-orange-500">MARHABA</p>
            <form class="flex flex-col pt-3 md:pt-8">
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlineUser/>
                  </span>
                  <input
                    type="text"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Fullname"
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlineGoogle/>
                  </span>
                  <input
                    type="text"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlinePhone/>
                  </span>
                  <input
                    type="phone"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4 mb-12">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <AiOutlineUnlock/>
                  </span>
                  <input
                    type="password"
                    id="design-login-password"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-lime-500 hover:text-with hover:bg-orange-500 focus:outline-none focus:ring-2"
              >
                <span class="w-full">Register</span>
              </button>
            </form>
            <div class="pt-12 pb-12 text-center">
              <p>
              You  have an account ? 
                <Link to="/login" class="font-semibold underline">
                   Login here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 shadow-2xl">
          <img
            class="hidden object-cover w-full h-screen md:block opacity-75"
            src={reg}
          />
        </div>
      </div>
    </>
  );
};

export default register;
