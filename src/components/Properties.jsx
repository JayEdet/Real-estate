/* All properties to display on the page */
/* components */
import { useState } from "react";
import Card from "./Card";
import SelectProp from "./SelectProp";
/* images */
import carcassProp from "/uncompleted1.jpg";
import carcassProp2 from "/uncompleted2.jpg";

const cardItems = [
  {
    image: carcassProp,
    description: "New carcass building",
    price: "250,000,000",
    state: "abuja",
  },
  {
    image: carcassProp2,
    description: "Second carcass building",
    price: "300,000,000",
    state: "lagos",
  },
];
export default function Properties() {
  const [filteredProp, setFilteredProp] = useState(cardItems);
  const selectState = {
    location: ["Abuja", "Lagos", "Port Harcourt", "Uyo"],
  };

  const handleFilter = (filtered) => {
    if (filtered) {
      const filteredProps = cardItems.filter(
        (property) => property.state.toLowerCase() === filtered.toLowerCase()
      );
      setFilteredProp(filteredProps);
    } else {
      setFilteredProp(cardItems);
    }
  };
  return (
    <div>
      <div
        className="relative hero w-full h-80 p-16 object-cover bg-cover bg-fixed"
        style={{ backgroundImage: "url('./home topography.jpg')" }}
      >
        <div className="flex flex-col absolute items-center justify-center inset-0 bg-black bg-opacity-50">
          <h1 className="font-bold font-heroText text-center text-offwhite md:text-2xl">
            Explore properties
          </h1>
          <SelectProp selectState={selectState} onFilter={handleFilter} />
        </div>
      </div>
      {/* show properties */}
      <div className="flex flex-col gap-3 md:flex-row">
        {filteredProp.map((property) => (
          <Card
            key={property.description}
            image={property.image}
            description={property.description}
            price={property.price}
            state={property.state}
          />
        ))}
      </div>
    </div>
  );
}
