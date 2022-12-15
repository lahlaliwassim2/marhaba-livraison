import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import {Link} from "react-router-dom"

const dashbordAdmin = () => {
  return (
    <>
      <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div class="flex items-start justify-between">
          <div class="relative hidden h-screen shadow-lg lg:block w-80">
            <div class="h-full bg-white dark:bg-gray-700">
              <div class="flex items-center justify-start pt-6 ml-8">
                <p class="text-xl font-bold dark:text-white">Dashboard</p>
              </div>
              <nav class="mt-6">
                <div>
                  <Link
                    class="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-lime-500 dark:text-white"
                    to="#"
                  >
                    <span class="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span class="mx-2 text-sm font-normal">Clients</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    to="#"
                  >
                    <span class="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span class="mx-2 text-sm font-normal">
                      Livreures
                    </span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    to="#"
                  >
                    <span class="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span class="mx-4 text-sm font-normal">Catégories</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    to="#"
                  >
                    <span class="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span class="mx-4 text-sm font-normal">Products</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div class="flex flex-col w-full md:space-y-4">
            <header class="z-40 flex items-center justify-between w-full h-16">
              <div class="block ml-6 lg:hidden">
                <button class="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <RiShoppingCart2Line />
                </button>
              </div>
              <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div class="relative flex items-center justify-end w-full p-1 space-x-4">
                  <span class="flex w-full h-10 text-sm border border-gray-300 rounded-full cursor-pointer md:w-1/3">
                    <input
                      type="search"
                      name="serch"
                      placeholder="Search"
                      class="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none"
                    />
                  </span>
                </div>
              </div>
            </header>
            <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 class="text-4xl font-semibold text-gray-800 dark:text-white mb-3">
                Good afternoom, Admin
              </h1>
              <h2 class="text-gray-400 text-md ">
                Here&#x27;s what&#x27;s happening with your ambassador account
                today.
              </h2>
              <div class="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div class="flex items-center w-full space-x-4 md:w-1/2">
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        12
                      </p>
                      <p class="text-sm text-gray-400">Active projects</p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        93.76
                      </p>
                      <p class="text-sm text-gray-400">
                        Commission in approval
                      </p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center w-full space-x-4 md:w-1/2">
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        12
                      </p>
                      <p class="text-sm text-gray-400">Active projects</p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        93.76
                      </p>
                      <p class="text-sm text-gray-400">
                        Commission in approval
                      </p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-4 my-4  lg:grid-cols-1">
                <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                  <div class="py-8">
                    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table class="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                              >
                                Phone
                              </th>
                              <th
                                scope="col"
                                class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                              >
                                status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex items-center">
                                  <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      Jean marc
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  Clients@gmail.com
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  0732983892381
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                  <span
                                    aria-hidden="true"
                                    class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                  ></span>
                                  <span class="relative">active</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex items-center">
                                  <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      Marcus coco
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  Clients2@gmail.com
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  0700983892385
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                  <span
                                    aria-hidden="true"
                                    class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                  ></span>
                                  <span class="relative">active</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex items-center">
                                  <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      Ecric marc
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  Clients3@gmail.com
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  0799983892389
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                  <span
                                    aria-hidden="true"
                                    class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                  ></span>
                                  <span class="relative">active</span>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex items-center">
                                  <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      Julien Huger
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  Clients4@gmail.com
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  0732983892382
                                </p>
                              </td>
                              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                  <span
                                    aria-hidden="true"
                                    class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                  ></span>
                                  <span class="relative">active</span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default dashbordAdmin;
