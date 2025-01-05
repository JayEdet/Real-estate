import { useState } from "react";

/* This component is simply the select States(Abuja, Akwaibom...) and search button*/
export default function SelectProp({ selectState, onFilter }) {
  const [statesChange, setStateChange] = useState("");
  const handleChange = (e) => {
    const selectedState = e.target.value;
    setStateChange(selectedState);
  };

  const handleClick = () => {
    if (selectState === "all locations") {
      return;
    } else {
      onFilter(statesChange);
    }
  };

  return (
    <div className="select w-fit flex flex-col justify-between">
      <div className="lg:flex">
        <div className="option p-2 rounded-md bg-white ">
          <label
            htmlFor="location"
            className="font-bold text-2xl bg-myGradient bg-clip-text text-transparent lg:px-8"
          >
            Location
          </label>
          <select
            name="location"
            id="location"
            value={statesChange}
            className="cursor-pointer ml-8 outline-none"
            onChange={handleChange}
          >
            <option value="">All Locations</option>
            {selectState.location.map((location) => (
              <option className="cursor-pointer" key={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* button */}
        <div className="flex justify-center">
          <button className="button relative p-4" onClick={handleClick}>
            <span className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex"></span>
            <span className="relative z-10">Search property</span>
          </button>
        </div>
      </div>
    </div>
  );
}
