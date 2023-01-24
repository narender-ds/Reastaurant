import React from "react";
import "./Card.css";

type Props = {
  name: any;
  image: any;
  details: any;
};

const MenuItemcard = ({ name, image, details }: Props) => {
  return (
    <>
      <div className="centered-container">
        <div className="cardss">
          <div className="max-w-sm rounded overflow-hidden shadow-lg  w-96">
            <div className="section">
              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                {image}
                <div className="px-6 py-4 h-72">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">
                    {/* <span>Rs{price}</span> */}
                  </p>
                  <p>{details}</p>

                  <button className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemcard;
