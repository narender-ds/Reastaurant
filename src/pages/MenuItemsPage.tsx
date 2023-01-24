import React from "react";
import AlternativeVerticals from "../components/AlternativeVerticals";
import { MenuCard } from "../components/cards/MenuCard";
import FetchApiData from "../components/FetchApiData";
import VerticalResults from "../components/VerticalResults";
import usePageSetupEffect from "../hooks/usePageSetupEffect";

const MenuItems = ({ verticalKey }: { verticalKey: string }) => {
  usePageSetupEffect(verticalKey);
  return (
    <>
      <AlternativeVerticals
        currentVerticalLabel="menuItems"
        verticalsConfig={[
          { label: "Locations", verticalKey: "locations" },
          { label: "Faqs", verticalKey: "faqs" },
          { label: "MenuItems", verticalKey: "menu_items" },
        ]}
      />
      {/* <FetchApiData/> */}
      <VerticalResults CardComponent={MenuCard} />
    </>
  );
};

export default MenuItems;
