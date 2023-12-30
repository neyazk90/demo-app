import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import useFetchCountryList from "../shared/hooks/useFetchCountryList";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [isPaused, setIsPaused] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const countryLists = useFetchCountryList();

    useEffect(() => {
        const getTime = async () => {
            try {
                const response = await fetch(`http://worldtimeapi.org/api/timezone/${selectedCountry}`);
                const data = await response.json();
                setTime(new Date(data.datetime));
            } catch (error) {
                console.error("Error fetching timezones:", error);
            }
        };
        if (selectedCountry) getTime();
    }, [selectedCountry]);

    const handleCountryChange = useCallback((event) => {
        setSelectedCountry(event.target.value);
    }, []);

    const clockHandler = useCallback(() => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    }, []);

    useEffect(() => {
        
        let intervalId;
        if (!isPaused) {
            intervalId = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isPaused]);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="flex flex-wrap mb-5 items-center justify-around">
            {countryLists && (
                <select className="md:w-44 p-3 border-[1px] rounded-md border-gray-200" onChange={handleCountryChange} value={selectedCountry}>
                    <option value="">Select a country</option>
                    {countryLists?.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            )}
            <div className="clock md:w-32 text-center md:mt-0 sm:mt-10 font-bold">{formattedTime}</div>
            <button className="btn" onClick={clockHandler}>
                {isPaused ? "Start" : "Pause"}{" "}
            </button>
        </div>
    );
};

export default Clock;
