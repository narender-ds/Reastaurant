import React, { useState } from "react";
// import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';

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
            <div className="centered-container">
              <div>
                <h1 style={{ fontWeight: "bold" }}>Menu Item:</h1>
                {item.name}
              </div>
              <div>
                {item.photoGallery.map((images: any) => {
                  return (
                    <img
                      style={{ marginLeft: "386px", width: "70px" }}
                      src={images?.image?.url}
                    />
                  );
                })}
              </div>
              <h1>
                {item.price.value}
                {item.price.currencyCode}
              </h1>
              <div>
                <h1 style={{ fontWeight: "bold" }}>Description:</h1>
                {item.description}
              </div>
              {/* <div className={cssClasses.ctaButton}></div> */}
            </div>
          </>
        );
      })}
    </>
  );
};

export default FetchApiData;
