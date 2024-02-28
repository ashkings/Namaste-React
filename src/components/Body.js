import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "react-content-loader";
import RestaurantCard from "./RestaurantCard";
import useRestaurantsList from "../utils/useRestaurantsList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const { loading, resInfo: listOfRestaurants } = useRestaurantsList();

  useEffect(() => {
    setFilteredList(listOfRestaurants);
  }, [listOfRestaurants]);

  return loading ? (
    <List />
  ) : (
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
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
