import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import useFetchCountryList from "../shared/hooks/useFetchCountryList";

const Clock = () => {
 const [localTime, setLocalTime] = useState(new Date());
 const [countryTime, setCountryTime] = useState(null);
 const [isPaused, setIsPaused] = useState(false);
 const [selectedCountry, setSelectedCountry] = useState("");
 const countryLists = useFetchCountryList();

 useEffect(() => {
  if (selectedCountry) {
   const getTime = async () => {
    try {
     const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${selectedCountry}`
     );
     const data = await response.json();
     setCountryTime(new Date(data.datetime));
    } catch (error) {
     console.error("Error fetching timezones:", error);
    }
   };
   getTime();
  } else {
   setCountryTime(null);
  }
 }, [selectedCountry]);

 const handleCountryChange = useCallback((event) => {
  setSelectedCountry(event.target.value);
 }, []);

 const clockHandler = useCallback(() => {
  setIsPaused((prevIsPaused) => !prevIsPaused);
 }, []);

 useEffect(() => {
  let intervalId;
  if (!isPaused && !selectedCountry) {
   intervalId = setInterval(() => {
    setLocalTime(new Date());
   }, 1000);
  }

  return () => clearInterval(intervalId);
 }, [isPaused, selectedCountry]);

 const displayTime =
  selectedCountry && countryTime
   ? countryTime.toLocaleTimeString()
   : localTime.toLocaleTimeString();

 return (
  <div className="flex flex-wrap mb-5 items-center justify-around">
   {countryLists && (
    <select
     className="md:w-44 p-3 border-[1px] rounded-md border-gray-200"
     onChange={handleCountryChange}
     value={selectedCountry}
    >
     <option value="">Select a country</option>
     {countryLists?.map((country) => (
      <option key={country} value={country}>
       {country}
      </option>
     ))}
    </select>
   )}
   <div className="clock md:w-32 text-center mt-3 font-bold">{displayTime}</div>
   <button className="btn" onClick={clockHandler}>
    {isPaused ? "Start" : "Pause"}{" "}
   </button>
  </div>
 );
};

export default Clock;