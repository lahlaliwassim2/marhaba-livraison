import "./cart.css";
import { useState } from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"

export default function Cart() {
  const [cart, setCart] = useState(false)
  

  return (

    <div className="flex flex-row">

   

    <div className={(!cart)? 'invisible': 'overflow-y-auto h-full w-[30%] py-4 px-3 bg-gray-50 rounded dark:bg-gray-800'}>
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl w-full h-full">
        <div className="md:flex w-full  h-full ">
          <div className="w-full p-4 px-5 py-5  h-full">
            <div className="md:grid md:grid-cols-1 gap-1 w-full h-full ">
              <div className="flex flex-row  justify-between bg-slate-200 w-full">
                <h1 className="text-xl ml-3 font-medium ">Cart</h1> 
                <button onClick={()=> {setCart(false)}}><AiOutlineArrowLeft/></button>
              </div>
              
              <div className="col-span-2 p-1 w-full ">
                <div className=" justify-between items-center mt-6 pt-3 w-full h-[70%] max-h-[70%] overflow-y-auto">
                  <div className="flex mb-2  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center w-full ">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full"
                    />

                    <div className="flex flex-row ml-3 ">
                      <div className="flex flex-col mr-2 ">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <div className=" flex flex-row justify-center   ">
                          <button className="font-semibold">-</button>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value="1"
                          />
                          <button className="font-semibold">+</button>
                        </div>
                      </div>

                      <div className="ml-3 pt-3">
                        <span className="text-s font-medium">$10.50</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t ">
                  <div className="flex items-center">
                    <i className="fa fa-arrow-left text-sm pr-2"></i>
                    <span className="text-md  font-medium text-blue-500">
                      Send Order
                    </span>
                  </div>

                  <div className="flex justify-center items-end ">
                    <span className="text-sm font-medium text-gray-400 mr-1">
                      Subtotal:
                    </span>
                    <span className="text-lg font-bold text-gray-800 ">
                      {" "}
                      $24.90
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

    <button className="float-end m-auto bg-teal-500" onClick={()=> {setCart(true)} }>Add to cart</button>
    </div>
  );
}
