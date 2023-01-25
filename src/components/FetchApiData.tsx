import React, { useState } from "react";
import "../components/cards/Card.css";
const FetchApiData = () => {
  const [menu, setMenu] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=ed9fb6461531aa59f5ce73445dea9093&v=20230110&entityTypes=ce_menuItems"
    );
    const result = await response.json();
    return setMenu(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log("menu", menu);
  return (
    <>
      {menu?.response?.entities?.map((item: any) => {
        return (
          <>
            <div className="flex flex-wrap gap-y-6">
              {/* <div className="centered-container"> */}
              <div className="cardss">
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-96">
                  {item.photoGallery.map((images: any) => {
                    return (
                      <img
                        className="w-96 max-h-64 "
                        src={images?.image?.url}
                      />
                    );
                  })}

                  <div className="px-6 py-4 h-72">
                    <div className="font-bold text-xl mb-2"> {item.name}</div>
                    <p className="text-gray-700 text-base">
                      <span>Rs{item.price.value}</span>
                    </p>
                    <p>{item.description}</p>
                  </div>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                    Get Details
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </>
        );
      })}
    </>
  );
};

export default FetchApiData;
