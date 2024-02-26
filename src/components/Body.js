import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9583852&lng=77.643915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const list =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(list);
    setFilteredList(list);
  };

  return (
    <div className="body">
      <div className="filter-search">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchVal) {
                const filterList = listOfRestaurants.filter((restaurant) =>
                  restaurant?.info?.name
                    ?.toLowerCase()
                    .includes(searchVal?.toLowerCase())
                );
                setFilteredList(filterList);
              } else {
                setFilteredList(listOfRestaurants);
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating >= 4.5
              );
              setFilteredList(filterList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
