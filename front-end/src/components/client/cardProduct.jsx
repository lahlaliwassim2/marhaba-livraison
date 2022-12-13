import React from "react";
// import Link from "react-router-dom"
import MyImage from "../../assiet/images/large.jpg";
import Frit from "../../assiet/images/frit.jpg";
import Somo from "../../assiet/images/somo.jpg";
import Sou from "../../assiet/images/sou2.jpg";
import Souchi from "../../assiet/images/souchet.jpg";
import Salad from "../../assiet/images/salda.jpg";
import Poke from "../../assiet/images/poke.jpg";
import Burger from "../../assiet/images/burger.jpg";
import { RiShoppingCart2Line } from "react-icons/ri";

const cardProduct = () => {
  return (
    <>
      <div className="w-full p-12 bg-white">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <img src={Sou} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Frit} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Somo} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Souchi} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div classNameName="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Salad} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={MyImage} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Poke} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
          
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <img src={Burger} className="object-cover w-full max-h-40" alt="blog photo"/>
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-5 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  un plat d'origine italienne fait d'une pâte à pain étalée et
                  de coulis de tomates,
                </p>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <p className="mt-3 mb-3 text-xl font-medium text-gray-800 dark:text-white">
                    69 Dhs
                  </p>
                  <button className="text-white bg-lime-500 hover:bg-lime-400 focus:ring-4 focus:outline-none rounded-lg  px-6 py-3 mt-1  dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-400">
                    <RiShoppingCart2Line />
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default cardProduct;
