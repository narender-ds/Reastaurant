import React from "react";
import "./Card.css";

type Props = {
  name: any;
  image: any;
  details: any;
  price: any;
};

const MenuItemcard = ({ name, image,price, details }: Props) => {
  const data = () => {
    alert("Please Login First");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          <div className="centered-container">
            <div className="cardss">
              <div className="max-w-sm rounded overflow-hidden shadow-lg  w-96">
                {image}
                <div
                  className="font-bold text-xl mb-2"
                  style={{ marginLeft: "30px", marginTop: "20px" }}
                >
                  {name}
                </div>
                <p
                  style={{ marginLeft: "300px" }}
                  className="text-gray-700 text-base"
                >
                  <span>Rs{price}</span>
                </p>
                <div className="section">
                  <p>{details}</p>

                  <button
                    className="text-white bg-red-700 
                hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                    onClick={data}
                  >
                    Order Now
                  </button>
                  <button
                    className="text-white bg-purple-700 
                hover:bg-blue-800 focus:ring-4 focus:ring-aqua-300 
                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                    onClick={data}
                  >
                    Add To Cart
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
