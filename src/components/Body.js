import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "react-content-loader";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import useRestaurantsList from "../utils/useRestaurantsList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const { loading, resInfo: listOfRestaurants } = useRestaurantsList();

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    setFilteredList(listOfRestaurants);
  }, [listOfRestaurants]);

  if (loading) return <List />;

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="search p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg"
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
        <div className="px-4 py-1 m-4 bg-gray-100 rounded-lg">
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
      <div className="flex flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            {restaurant?.info?.isOpen ? (
              <RestaurantCardOpen resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
