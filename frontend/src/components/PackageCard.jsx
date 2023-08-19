import React from "react";

function PackageCard({pImage, pTitle, pDepartureTime, pTicketPrice, onViewMore }) {
  return (
    <div className="w-full max-w-sm border-2 border-indigo-600 shadow bg-card-purple-light bg-opacity-30" >
        
      <a href="#">
          <img className="p-8 rounded-t-lg" src={pImage} alt="product image"/>
      </a>
      <div className="px-5 pb-5">
          <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{pTitle}</h5>
          </a>
          <div className="flex items-left mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{pDepartureTime}</span>
          </div>
          <div className="flex items-center justify-between">
               <span className="text-3xl font-bold text-gray-900 dark:text-white">{"$" + pTicketPrice}</span>
              {/*<a href="#" onClick={onViewMore} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a> */}
          <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 "
              onClick={onViewMore}>
                <span class=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                  View More
                </span>
              </button>
          </div>
      </div>
  </div>
  
    )
}

export default PackageCard;