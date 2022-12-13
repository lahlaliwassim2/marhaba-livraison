export default function AddProduct() {
    return (
<section className="h-full flex bg-gray-100/50">

<div className="w-3/6 m-auto">

 <h1 className="text-center text-4xl">Fill The Product Forme</h1>

<div className="flex items-center justify-center w-full  mt-5 mb-5">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div>

    

    <div className=" relative ">
    <label for="name-with-label" className="text-gray-700">
        Product name
    </label>
    <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Product name"/>
    </div>



    <label for="price" className="block text-sm font-medium text-gray-700">
        Price
    </label>
<div className="md:flex sm:block">
   
    <div className="relative mt-1 rounded-md shadow-sm md:w-4/5 mr-20 sm:w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
                $
            </span>
        </div>
        <input type="number" name="price" id="price" className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="0.00"/>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <label for="currency" className="sr-only">
                    Currency
                </label>
                <select id="Currency" name="currency" className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                    <option>
                        MAD
                    </option>
                    <option>
                        USD
                    </option>
                </select>
            </div>
        </div>
        <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-20% focus:outline-none focus:ring-primary-500 focus:border-primary-500 md:w-2/4 sm:w-full sm:justify-center" name="animals">
    <option value="">
        Select Categorie
    </option>
    <option value="dog">
        Dog
    </option>
 </select>
    </div>



  <div className="mt-8">  
<label className="text-gray-700" for="name">
    <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter description" name="comment" rows="5" cols="40">
    </textarea>
</label>
  </div>


<div className="justify-end">
<button type="button" className="py-2 px-4 flex justify-center w-1\/5 mt-5 mb-5 items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Save
</button>
</div>


 


    </div>
</section>

    )}